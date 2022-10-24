//  Open

let search = document.getElementById("search");
let input = document.getElementById("input");
let Shopping = document.getElementById("shopping");
let Listbars = document.getElementById("bars");

let list = document.getElementById("list");
let Menu = document.getElementById("menu-bar");

//  Close

let CloseList = document.getElementById("xmarkList");
let CloseInput = document.getElementById("closeinput");
let CloseMenu = document.getElementById("close-menu");

//  Up

let Up = document.getElementById("up");

//  Alert

let ContentAlert = document.getElementById("content-alert");
let BtnAlert = document.getElementById("btn-alert");

//  Onload Up
onload = function () {
  Up.classList.remove("show");

  ContentAlert.classList.add("show-alert");

  setTimeout(function () {
    ContentAlert.classList.remove("show-alert");
  }, 300);
};

//  Up Click
onscroll = function () {
  this.scrollY >= 1260 ? Up.classList.add("show") : Up.classList.remove("show");
};

//  Click Alert

BtnAlert.addEventListener("click", function () {
  ContentAlert.classList.add("show-alert");
});

// Loop Function
setInterval(function () {
  ContentAlert.classList.remove("show-alert");
}, 38000);

//  Start Click Up
Up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//  Opening

search.addEventListener("click", function () {
  input.classList.toggle("hide-search");
  Menu.classList.add("hide-menu");
  list.classList.add("hide-list");
});

CloseInput.addEventListener("click", function () {
  input.classList.add("hide-search");
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    this.classList.add("hide");
    input.value = "";
  }
});

//  Shopping

Shopping.addEventListener("click", function () {
  Menu.classList.toggle("hide-menu");
  input.classList.add("hide-search");
  list.classList.add("hide-list");
});

CloseMenu.addEventListener("click", function () {
  Menu.classList.add("hide-menu");
});

//  Listing

Listbars.addEventListener("click", function () {
  list.classList.toggle("hide-list");
  Menu.classList.add("hide-menu");
  input.classList.add("hide-search");
});

//   Closeing

CloseList.addEventListener("click", function () {
  list.classList.add("hide-list");
});

// CloseBars.addEventListener("click", function () {
//   list.classList.add("hide-list");
// });

//   bars Close

function CloseBars() {
  list.classList.add("hide-list");
}
