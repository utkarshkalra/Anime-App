const URL = "http://localhost:5555/animes";

getData();
async function getData() {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  //showing data//

  const element = document.getElementById("up");
  const name = document.querySelector("#name");
  const des = document.querySelector("#description");
  const button = document.querySelector("#btn");

  data.forEach((item) => {
    const wrap = document.querySelector("#wrapper");

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

    updateb.addEventListener("click", () => {
      //console.log(item._id);
      name.value = "";
      des.value = "";
      const id = item._id;
      //element.style.display = "";

      name.value = item.animeName;
      des.value = item.animeDescription;

      button.addEventListener("click", () => {
        const animeName = document.querySelector("#name").value;
        const description = document.querySelector("#description").value;

        const data = { animeName, description };
        const options = {

          body: JSON.stringify(data),
          method: "PUT",
        };

        fetch(`http://localhost:5555/animes/${id}`, options)
          .then(res => res.json())
          .then(res => console.log(res));
      });
    });

    deleteb.addEventListener("click", () => {
      const id = item._id;
      const options = {
        method: "DELETE",
      };

      fetch(`http://localhost:5555/animes/${id}`, options).then(res => res.json()).then(res => console.log(res));

      location.reload();

    })

  });
}

const updateData = (id, name, des) => {
  const data = { name, des };
  //console.log(data);

  const options = {

    body: JSON.stringify(data),
    method: "PUT",
  };

  fetch(`http://localhost:5555/animes/${id}`, options)
    .then(res => res.json())
    .then(res => console.log(res));

};
