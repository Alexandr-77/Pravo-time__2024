//
// ==================================================
let body = document.querySelector('body');
let itemLiMenu = document.querySelector("#id-item-uslugi");

let burger = document.querySelector(".burger");
let nav = document.querySelector(".header__block-nav");
let liHeader = document.querySelectorAll(".header__menu-item");
let newlink = document.querySelectorAll(".newlink");

burger.addEventListener("click", rotateBurger);

function rotateBurger() {
  burger.classList.toggle("burger-active");
  body.classList.toggle('body-fix');
  boxSubMenu.style.display = "none";

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}
// -------------------- submenu ---------------------------
let boxSubMenu = document.querySelector(".header__submenu");

itemLiMenu.addEventListener("click", fnSoweMenu);

function fnSoweMenu() {
  if (boxSubMenu.style.display === "block" ) {
    boxSubMenu.style.display = "none";
    // if (window.innerWidth < 990) {
    //   rotateBurger();
    // } else {
    //   none;
    // }
  } else {
    boxSubMenu.style.display = "block";
  }
}

for (let i = 0; i < newlink.length; i++) {
  newlink[i].addEventListener("click", () => {
    if (boxSubMenu.style.display === "block") {
      boxSubMenu.style.display = "none";
    } else {
      boxSubMenu.style.display = "none";
    }
  });
}

for (let i = 0; i < newlink.length; i++) {
  if (window.innerWidth < 990) {
    newlink[i].addEventListener("click", rotateBurger);
  }
}



// отправка формы =============>
$(document).ready(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Спасибо. Ваша заявка была отправлена.");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
// ============================



// ============== prise ============ 
const priceSelect = document.querySelector('#price__select-id');
const priceBox = document.querySelector('#price__box');
const priceBox2 = document.querySelector('#price__box2');

priceSelect.addEventListener('change', function name(params) {
  if (this.value == 1) {
    priceBox.style.display = 'block';
    priceBox2.style.display = 'none';
  }
  if (this.value == 2) {
    priceBox2.style.display = 'block';
    priceBox.style.display = 'none';
  }
});



// ========= slyder slick ==========
$(".slyder__box").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrow: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// ===============================================

new WOW().init();
