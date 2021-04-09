
const URL = "http://localhost:5555/animes";
const wrap = document.querySelector("#wrapper");
const element = document.getElementById("up");


//adding scroll;

window.smoothScroll = function (target) {
  var scrollContainer = target;
  do { //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function (c, a, b, i) {
    i++; if (i > 30) return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function () { scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

getData();
async function getData() {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);



  data.forEach((item) => {


    const card = document.createElement("div");
    const image = document.createElement("img");
    const cardbody = document.createElement("div");
    const heading = document.createElement("h5");
    const description = document.createElement("p");
    const updateb = document.createElement("button");
    const deleteb = document.createElement("button");

    card.classList.add("card", "mx-2", "my-2");
    card.style = "width:18rem";

    image.classList.add("card-img-top");
    cardbody.classList.add("card-body");
    heading.classList.add("card-title");
    description.classList.add("card-text");
    deleteb.classList.add("btn", "btn-danger", "delete");
    updateb.classList.add("btn", "btn-secondary", "update");

    updateb.id = "updateanime"
    deleteb.id = "delanime"

    cardbody.setAttribute('data-id', `${item._id}`);

    card.appendChild(image);
    card.appendChild(cardbody);
    cardbody.appendChild(heading);
    cardbody.appendChild(description);
    cardbody.appendChild(updateb);
    cardbody.appendChild(deleteb);

    image.src = "img/1.webp";
    heading.textContent = item.animeName;
    description.textContent = item.animeDescription;
    updateb.textContent = "Update";
    deleteb.textContent = "Delete";

    wrap.appendChild(card);

  });
}


wrap.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(e.target);
  let updatebutpress = e.target.id == "updateanime";
  let delbutpress = e.target.id == "delanime";


  // DELETE ANIME //


  if (delbutpress) {
    const parent = e.target.parentElement;

    let name = parent.querySelector(".card-title").textContent;

    if (confirm(`do you want to delete ${name} card `)) {

      const id = e.target.parentElement.dataset.id;

      const options = {
        method: "DELETE",
      };

      fetch(`http://localhost:5555/animes/${id}`, options).then(res => res.json()).then(() => location.reload());


    }
  }


  if (updatebutpress) {
    element.style.display = "";

    const id = e.target.parentElement.dataset.id;
    const parent = e.target.parentElement;

    let name = parent.querySelector(".card-title").textContent;
    let des = parent.querySelector(".card-text").textContent;
    if (confirm(`do u wanna update ${name} card `)) {
      var updatename = document.getElementById("name");
      var updatedes = document.getElementById("description");
      var button = document.getElementById("btn");
      updatename.value = name;
      updatedes.value = des;
      smoothScroll(element);
      button.addEventListener("click", (e) => {
        fetch(`${URL}/${id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            animeName: updatename.value,
            animeDescription: updatedes.value

          })
        })
          .then(res => res.json())
          .then(() => {
            alert("updated!")
            location.reload()
          })
      })
    }

  }


})





