// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const menuDiv = document.querySelector(".menu-button");

function menuMaker(menuArray){
const menuItem = document.createElement("div");
const list = document.createElement("ul");
const listItems1 = document.createElement("li");
const listItems2 = document.createElement("li");
const listItems3 = document.createElement("li");
const listItems4 = document.createElement("li");
const listItems5 = document.createElement("li");
const listItems6 = document.createElement("li");

menuItem.appendChild(list);
menuItem.appendChild(listItems1);
menuItem.appendChild(listItems2);
menuItem.appendChild(listItems3);
menuItem.appendChild(listItems4);
menuItem.appendChild(listItems5);
menuItem.appendChild(listItems6);


menuItem.classList.add("menu");

listItems1.textContent = menuArray[0]
listItems2.textContent = menuArray[1]
listItems3.textContent = menuArray[2]
listItems4.textContent = menuArray[3]
listItems5.textContent = menuArray[4]
listItems6.textContent = menuArray[6]


//Step 2
const menuButton = document.querySelector('.header')
menuButton.addEventListener("click", (event) => {
  menuItem.classList.toggle("menu--open");
});

//Step 3
return menuItem;
}

//Step 4
menuItems.forEach((menuArray) => {
  const menuItem = menuMaker(menuArray);
  return document.querySelector('.header').appendChild(menuItem);
});
