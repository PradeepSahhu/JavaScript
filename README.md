# JavaScript

## Working with JS functions

```
/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

/* Function Declaration.

function function_name(){
    // statement.
}
*/

/* Function expression 
const function_name(variable) = function () {
    // statement.
}
*/
/*
Arrow function.

const function_name(variable) = () => {
    // statement
}
*/
const changing = function () {
  // function expression.
  const newButton = document.querySelector("main button");
  newButton.style.color = "red";
  newButton.style.backgroundColor = "black";
  newButton.style.padding = "10px";
  newButton.style.margin = "10px";
  newButton.style.fontSize = "50px";
};
function colorchanging() {
  // function declaration.
  const mainBody = document.querySelector("main");
  const newButton = document.createElement("button");
  newButton.innerHTML = `
    <p>Button One</p>
  `;
  mainBody.append(newButton);
  newButton.classList.add("1st-class", "2nd-class");

  //   return newButton;
  //   onclick = changing(newButton);
}
const arrowFunction = () => {
  // Arrow function.
  const mainbody = document.querySelector("main");
  const buttons = document.createElement("button");
  buttons.innerHTML = `
  Button Two`;
  buttons.classList.add("first-class", "second-class");
  mainbody.append(buttons);

  return buttons;
};

// second button styles with arrow function.
const secondButton = () => {
  const button = document.querySelector("main .first-class");
  button.style.color = "white";
  button.style.backgroundColor = "green";
  button.style.padding = "20px";
  button.style.margin = "10px";
  button.style.fontSize = "50px";
};

// const hiddening = (element1, element2) => {
//   element1.addEventListener("click", (element2.style.display = "none"));
// };

// console.log(colorchanging());
colorchanging();
const newButton = document.querySelector("main button");
console.log(newButton);

arrowFunction();
const buttons = document.querySelector("main button:nth-last-child(1)"); // this is not working.
// secondButton(buttons);
console.log(buttons);
newButton.addEventListener("click", changing, false);
newButton.addEventListener("click", secondButton, false);
// newButton.addEventListener("click");
// hiddening(newButton, buttons);

```
## Why we need to use Database 

- Reason is : because we can't permenantly store data into our arrays. Upon refresh all the data is lost and only the default data remains.

![image](https://user-images.githubusercontent.com/94203408/209479548-1943aa72-aee1-4ceb-995a-d75e7bbc66f3.png)

![image](https://user-images.githubusercontent.com/94203408/209479443-538f8d56-d354-4618-85ec-ae93bce07683.png)

