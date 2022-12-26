// import Backpack from "./components/Backpack";
import backpackObjectArray from "./components/data.js";

const content = backpackObjectArray.map((backpack) => {
  const theArticle = document.createElement("article");
  theArticle.setAttribute("id", backpack.id);
  theArticle.classList.add("backpack");

  theArticle.innerHTML = `
  <figure class="backpack__image">
      <img src=${backpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>`;

  return theArticle;
});

// getting the main;
const main = document.querySelector(".maincontent");

content.forEach((backpack) => {
  main.append(backpack);
});

alert("this file is using");
