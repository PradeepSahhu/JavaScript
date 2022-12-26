/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

// const everydayPack = new Backpack((items) => {
//   items.id,
//     items.name,
//     items.volume,
//     items.color,
//     items.pocketNum,
//     items.strapLengthL,
//     items.strapLenghtR,
//     items.lidOpen,
//     items.dateAcquired,
//     items.image;
// });

// map throughout the array and make a new array.
const content = backpackObjectArray.map((backpack) => {
  // "backpack" now holds a single backpack object.

  // create a new article.
  const theArticle = document.createElement("article");
  theArticle.classList.add("backpack");
  // console.log(backpack);

  // set article ID to the backpack.id property.
  theArticle.setAttribute("id", backpack.id);

  // set the innerHTML of backpackArticle using the backpack object.
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
    </ul>
`;
  // return the backpackArticle to the content array.
  return theArticle;

  //**************Experiment************* */
  // for (const itm in backpack) {
  //   // console.log(it);
  //   console.log(backpack[itm]); // it contains the value.
  // }
});
//********************************************** */
// const content = `
//     <figure class="backpack__image">
//       <img src=${everydayPack.image} alt="" />
//     </figure>
//     <h1 class="backpack__name">${everydayPack.name}</h1>
//     <ul class="backpack__features">
//       <li class="packprop backpack__volume">Volume:<span> ${
//         everydayPack.volume
//       }l</span></li>
//       <li class="packprop backpack__color">Color:<span> ${
//         everydayPack.color
//       }</span></li>
//       <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
//       <li class="packprop backpack__pockets">Number of pockets:<span> ${
//         everydayPack.pocketNum
//       }</span></li>
//       <li class="packprop backpack__strap">Left strap length:<span> ${
//         everydayPack.strapLength.left
//       } inches</span></li>
//       <li class="packprop backpack__strap">Right strap length:<span> ${
//         everydayPack.strapLength.right
//       } inches</span></li>
//       <li class="feature backpack__lid">Lid status:<span> ${
//         everydayPack.lidOpen ? "open" : "closed"
//       }</span></li>
//     </ul>

// `;
//************************************** */
// Get the main.

const main = document.querySelector(".maincontent");

// Loop through the content array to append each backpack article.
content.forEach((backpack) => {
  main.append(backpack);
});
// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

// main.append(newArticle);
