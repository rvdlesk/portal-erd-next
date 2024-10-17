// document.querySelector("div.lang-select.dropdown-simple > a").onclick =
//   function () {
//     let x = document.querySelector("div.dropdown-list");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   };

// document.querySelector("div.menu-grid .dropdown-menu").onclick = function (e) {
//   e.stopPropagation();
// };

// document.querySelector(".hamburger-menu > a").onclick = function () {
//   let x = document.querySelector("div.menu");
//   if (x.style.display === "flex") {
//     document.querySelector(".hamburger-menu > a > img").src="img/menu hamburguesa.svg";
//     x.style.display = "none";
//   } else {
//     document.querySelector(".hamburger-menu > a > img").src="img/close-menu.svg";
//     x.style.display = "flex";
//   }
// };

// let sideMenu = document.querySelector("div.list-submenu .group-submenu li.active");
// if(sideMenu != null){
//   sideMenu.onclick =
//   function () {
//     let x = document.querySelectorAll("div.list-submenu .group-submenu")[1];
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   };
// }

// document.querySelector(".menu-grid-title i.ri-close-circle-line").onclick = () => document.querySelector(".menu-grid > a").click();

// var widths = [0, 767];

// function resizeFn() {
//   if (window.innerWidth >= widths[0] && window.innerWidth < widths[1]) {
//     let menuGrid = document.querySelector(".menu-grid");
//     let menuGridLink = document.querySelector(".menu-grid > a");
//     let menuContent = document.querySelector(".main-menu-cont .menu");
//     let menuGridTitle = document.querySelector(".menu-grid h3");
//     menuContent.prepend(menuGrid);
//     menuGridLink.appendChild(menuGridTitle);
//     let element = document.getElementById('collapseSeals');
//     element.classList.remove('show');
//   } else {
//     let x = document.querySelector(".menu-grid");
//     let z = document.querySelector(".search-bar");
//     let y = document.querySelector(".menu-grid > ul.dropdown-menu .menu-grid-title");
//     let element = document.getElementById('collapseSeals');
//     element.classList.add('show');
//     let menuGridTitle = document.querySelector(".menu-grid h3");
//     y.prepend(menuGridTitle);
//     z.after(x);
//   }
// }
// window.onresize = resizeFn;
// resizeFn();
// utils/domFunctions.js

export function toggleLangDropdown() {
  const langSelectAnchor = document.querySelector("div.lang-select.dropdown-simple > a");
  if (!langSelectAnchor) return;

  langSelectAnchor.onclick = function () {
    const dropdownList = document.querySelector("div.dropdown-list");
    if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
      dropdownList.style.display = "block";
    } else {
      dropdownList.style.display = "none";
    }
  };
}

export function preventMenuGridDropdownClose() {
  const dropdownMenu = document.querySelector("div.menu-grid .dropdown-menu");
  if (!dropdownMenu) return;

  dropdownMenu.onclick = function (e) {
    e.stopPropagation();
  };
}

export function toggleHamburgerMenu() {
  const hamburgerAnchor = document.querySelector(".hamburger-menu > a");
  if (!hamburgerAnchor) return;

  hamburgerAnchor.onclick = function () {
    const menu = document.querySelector("div.menu");
    const img = document.querySelector(".hamburger-menu > a > img");
    if (menu.style.display === "flex") {
      img.src = "img/menu hamburguesa.svg";
      menu.style.display = "none";
    } else {
      img.src = "img/close-menu.svg";
      menu.style.display = "flex";
    }
  };
}

export function toggleSubMenu() {
  const sideMenu = document.querySelector("div.list-submenu .group-submenu li.active");
  if (!sideMenu) return;

  sideMenu.onclick = function () {
    const submenu = document.querySelectorAll("div.list-submenu .group-submenu")[1];
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  };
}

export function closeMenuGrid() {
  const closeIcon = document.querySelector(".menu-grid-title i.ri-close-circle-line");
  if (!closeIcon) return;

  closeIcon.onclick = () => document.querySelector(".menu-grid > a").click();
}

export function handleResize() {
  const widths = [0, 767];
  if (window.innerWidth >= widths[0] && window.innerWidth < widths[1]) {
    const menuGrid = document.querySelector(".menu-grid");
    const menuGridLink = document.querySelector(".menu-grid > a");
    const menuContent = document.querySelector(".main-menu-cont .menu");
    const menuGridTitle = document.querySelector(".menu-grid h3");

    if (menuContent) {
      menuContent.prepend(menuGrid);
      menuGridLink.appendChild(menuGridTitle);
    }

    const element = document.getElementById("collapseSeals");
    if (element) {
      element.classList.remove("show");
    }
  } else {
    const menuGrid = document.querySelector(".menu-grid");
    const searchBar = document.querySelector(".search-bar");
    const menuGridTitle = document.querySelector(".menu-grid h3");
    const dropdownTitle = document.querySelector(".menu-grid > ul.dropdown-menu .menu-grid-title");

    if (dropdownTitle && menuGridTitle) {
      dropdownTitle.prepend(menuGridTitle);
    }
    if (searchBar && menuGrid) {
      searchBar.after(menuGrid);
    }

    const element = document.getElementById("collapseSeals");
    if (element) {
      element.classList.add("show");
    }
  }
}

export const getCurrentYear = () => new Date().getFullYear();