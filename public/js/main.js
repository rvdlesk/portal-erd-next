document.querySelector("div.lang-select.dropdown-simple > a").onclick =
  function () {
    let x = document.querySelector("div.dropdown-list");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

document.querySelector("div.menu-grid .dropdown-menu").onclick = function (e) {
  e.stopPropagation();
};

document.querySelector(".hamburger-menu > a").onclick = function () {
  let x = document.querySelector("div.menu");
  if (x.style.display === "flex") {
    document.querySelector(".hamburger-menu > a > img").src="img/menu hamburguesa.svg";
    x.style.display = "none";
  } else {
    document.querySelector(".hamburger-menu > a > img").src="img/close-menu.svg";
    x.style.display = "flex";
  }
};

let sideMenu = document.querySelector("div.list-submenu .group-submenu li.active");
if(sideMenu != null){
  sideMenu.onclick =
  function () {
    let x = document.querySelectorAll("div.list-submenu .group-submenu")[1];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
}

document.querySelector(".menu-grid-title i.ri-close-circle-line").onclick = () => document.querySelector(".menu-grid > a").click();

var widths = [0, 767];

function resizeFn() {
  if (window.innerWidth >= widths[0] && window.innerWidth < widths[1]) {
    let menuGrid = document.querySelector(".menu-grid");
    let menuGridLink = document.querySelector(".menu-grid > a");
    let menuContent = document.querySelector(".main-menu-cont .menu");
    let menuGridTitle = document.querySelector(".menu-grid h3");
    menuContent.prepend(menuGrid);
    menuGridLink.appendChild(menuGridTitle);
    let element = document.getElementById('collapseSeals');
    element.classList.remove('show');
  } else {
    let x = document.querySelector(".menu-grid");
    let z = document.querySelector(".search-bar");
    let y = document.querySelector(".menu-grid > ul.dropdown-menu .menu-grid-title");
    let element = document.getElementById('collapseSeals');
    element.classList.add('show');
    let menuGridTitle = document.querySelector(".menu-grid h3");
    y.prepend(menuGridTitle);
    z.after(x);
  }
}
window.onresize = resizeFn;
resizeFn();
