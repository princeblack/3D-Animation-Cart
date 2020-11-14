// Movement Animation to happen
// const card = document.querySelector(".card");
const container = document.querySelectorAll(".container");

var i;
for (let i = 0; i < container.length; i++) {
  // Items
  const title = container[i].querySelector(".title");
  const sneaker = container[i].querySelector(".sneaker img");
  const purchase = container[i].querySelector(".purchase button");
  const description = container[i].querySelector(".info h3");
  const sizes = container[i].querySelector(".sizes");
  const card = container[i].querySelector(".card");

  //Moving Animation Event
  container[i].addEventListener("mousemove", (e) => {
    // Items
    const card = container[i].querySelector(".card");
    let xAxis = (container[i].clientWidth / 2 - e.layerX) / 20;
    let yAxis = (container[i].clientHeight / 2 - e.layerX) / 20;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
  });

  // Animation in

  container[i].addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    // Popout
    sneaker.style.transform = "translateZ(150px) ";
    // title.style.transform = "translateZ(150px)";
    // description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  });

  // Animation Out
  container[i].addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
  });
}
