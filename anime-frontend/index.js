const URL = "http://localhost:5500/animes";

getData();
async function getData() {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

//showing data//

  data.forEach((item) => {

    const wrap = document.querySelector("#wrapper");

    const card = document.createElement("div");
    const image = document.createElement("img");
    const cardbody = document.createElement("div");
    const heading = document.createElement("h5");
    const description = document.createElement("p");

    card.classList.add("card","mx-2","my-2");
    card.style = "width:18rem";

    image.classList.add("card-img-top");
    cardbody.classList.add("card-body");
    heading.classList.add("card-title");
    description.classList.add("card-text");

    card.appendChild(image);
    card.appendChild(cardbody);
    cardbody.appendChild(heading);
    cardbody.appendChild(description);

    image.src = "img/1.webp";
    heading.textContent = item.animeName;
    description.textContent = item.animeDescription;

    wrap.appendChild(card);
  });
}


function front() {
  const wrap = document.querySelector("#wrapper");

  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardbody = document.createElement("div");
  const heading = document.createElement("h5");
  const description = document.createElement("p");

  card.classList.add("card");
  card.style = "width:18rem";

  image.classList.add("card-img-top");
  cardbody.classList.add("card-body");
  heading.classList.add("card-title");
  description.classList.add("card-text");

  card.appendChild(image);
  card.appendChild(cardbody);
  cardbody.appendChild(heading);
  cardbody.appendChild(description);

  image.src = "img/1.webp";
  heading.textContent = "hello testing";
  description.textContent = "check 123456789";

  wrap.appendChild(card);
}
