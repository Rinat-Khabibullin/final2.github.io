import Swiper from 'swiper';

let mainList = document.querySelector('.main__list-services');
let listItem = mainList.children;

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', function() {
    for (let index = 0; index < listItem.length; index++) {
    listItem[index].classList.remove('list-services__item--active');
    }
    listItem[i].classList.add('list-services__item--active');
    })
}

// READ MORE BUTTON
let main = document.querySelector(".main");
let mainReadMoreBtn = main.querySelector(".read-more__button");
let contentText = main.querySelector(".content__text");

mainReadMoreBtn.addEventListener("click", function () {
  if (mainReadMoreBtn.textContent === "Читать далее") {
    contentText.classList.add("heightAuto");
    mainReadMoreBtn.textContent = "Скрыть";
  } else {
    contentText.classList.remove("heightAuto");
    mainReadMoreBtn.textContent = "Читать далее";
  }
});


// ___________________________________

let mql = window.matchMedia("(max-width: 767px)");
let swiperSlider = null;

if (mql.matches) {
  swiperSlider = new Swiper(".swiper", {
    centeredSlides: false,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
      },
      350: {
        slidesPerView: 1.44,
      },
      440: {
        slidesPerView: 1.66,
      },
      500: {
        slidesPerView: 1.9,
      },
      550: {
        slidesPerView: 2.1,
      },
      600: {
        slidesPerView: 2.3,
      },
      700: {
        slidesPerView: 2.7,
      },
    },
    spaceBetween: 24,
    grabCursor: true,
    init: true,
  });
}

window.addEventListener("resize", (e) => {
  if (mql.matches) {
    if (swiperSlider === null) {
      swiperSlider = new Swiper(".swiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 24,
        grabCursor: true,
        init: true,
      });
    }
  } else {
    if (swiperSlider) {
      swiperSlider.forEach((s) => {
        s.destroy();
      });
      swiperSlider = null;
    }
  }
});

let container = document.querySelectorAll(".container");

for (let i = 0;i < container.length; i++) {
  let buttonReadMore = container[i].querySelector(".container__readMore");
  let buttonIcon = container[i].querySelector(".readMore__button-icon");
  let listHeight = container[i].querySelector(".swiper-wrapper");
  let buttonText = container[i].querySelector(".readMore__button-text");

  buttonReadMore.addEventListener("click", function () {
    if (buttonText.textContent == "Показать все") {
      buttonText.textContent = "Скрыть";
      buttonIcon.classList.add("rotateIcon");
      listHeight.classList.add("hidenContent");
    } else {
      buttonText.textContent = "Показать все";
      buttonIcon.classList.remove("rotateIcon");
      listHeight.classList.remove("hidenContent");
    }
  });
}

// aside

let body = document.querySelector('body');
let burger = body.querySelector('.round-icon--burger');
let aside = document.querySelector('.aside');
let buttonCloseAside = body.querySelector('.left__burger');
let mainConteaner = body.querySelector('.div-blur');
burger.addEventListener('click', function() {
  body.classList.add('displayFlex');
  aside.classList.add('displayBlock');
  mainConteaner.classList.add('blur');
  buttonCloseAside.addEventListener('click', function() {
    body.classList.remove('displayFlex');
    aside.classList.remove('displayBlock');
    mainConteaner.classList.remove('blur');
    })
  mainConteaner.addEventListener('click', function() {
    body.classList.remove('displayFlex');
    aside.classList.remove('displayBlock');
    mainConteaner.classList.remove('blur');
  })
})



// MODAL chat
let aisdeChatBtn = aside.querySelector('.icon-chat');
let menuChatBtn = document.querySelector('.round-icon--chat');
let chatFeebback = body.querySelector('.modal');
let chatFeebbackClose = chatFeebback.querySelector('.modal__closeBtn');

function openChatButton() {
  chatFeebback.classList.add('displayBlock');
  mainConteaner.classList.add('blur');
  body.classList.remove('displayFlex');
  aside.classList.remove('displayBlock');
  chatFeebbackClose.addEventListener('click', function() {
    chatFeebback.classList.remove('displayBlock');
    mainConteaner.classList.remove('blur');
    aside.classList.remove('displayBlock');
    
  })
  mainConteaner.addEventListener('click', function() {
    chatFeebback.classList.remove('displayBlock');
    mainConteaner.classList.remove('blur');
    aside.classList.remove('displayBlock');
  })
}


aisdeChatBtn.addEventListener('click', function() {
  openChatButton()
    asideTitle.textContent = "Обратная связь";
    asideNameInp.classList.remove('visually-hidden');
    asideEmailInp.classList.remove('visually-hidden');
    asideMessageInp.classList.remove('visually-hidden');
})
menuChatBtn.addEventListener('click', function() {
  openChatButton()
})
// MODAL call
let menuBtnCall = document.querySelector('.round-icon--call');
let asideBtnCall = aside.querySelector('.icon-call');
let asideTitle = chatFeebback.querySelector('.content__title');
let asideNameInp= chatFeebback.querySelector('.content__nameInp');
let asideEmailInp= chatFeebback.querySelector('.content__emailInp');
let asideMessageInp= chatFeebback.querySelector('.content__messageInp');

function openCallButton() {
  asideTitle.textContent = "Заказать звонок";
  asideNameInp.classList.add('visually-hidden');
  asideEmailInp.classList.add('visually-hidden');
  asideMessageInp.classList.add('visually-hidden');
  openChatButton()
  chatFeebbackClose.addEventListener('click', function() {
    chatFeebback.classList.remove('displayBlock');
    asideTitle.textContent = "Обратная связь";
    asideNameInp.classList.remove('visually-hidden');
    asideEmailInp.classList.remove('visually-hidden');
    asideMessageInp.classList.remove('visually-hidden');
  })
}

menuBtnCall.addEventListener('click', function() {
  openCallButton()
})

asideBtnCall.addEventListener('click', function() {
  openCallButton()
})
