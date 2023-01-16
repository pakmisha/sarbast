import Swiper, {
  Navigation,
  Pagination,
  Thumbs,
  Controller,
  Autoplay,
  Mousewheel,
  Grid,
} from "swiper";
Swiper.use([
  Navigation,
  Pagination,
  Thumbs,
  Controller,
  Autoplay,
  Mousewheel,
  Grid,
]);
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import AOS from "aos";
import Macy from "macy";
require("fslightbox");
const inView = require("in-view");
// import "./main.js";
Vue.config.devtools = true;
new Vue({
  el: "#app",
  data() {
    return {
      result: 0,
      success: false,
      questions: [
        {
          question: "Когда был создан национальный бренд пива Sarbast?",
          isAnswered: null,
          answers: [
            {
              answer: "1992",
              point: 0,
            },
            {
              answer: "2001",
              point: 0,
            },
            {
              answer: "2007",
              point: 1,
            },
            {
              answer: "2012",
              point: 0,
            },
          ],
          // answers: {
          //   1992: 10,
          //   2001: 0,
          //   2007: 0,
          //   2012: 0,
          // },
        },
        {
          question: "Что изображено на логотипе Sarbast? ",
          isAnswered: null,
          answers: [
            {
              answer: "Орел и лучи",
              point: 1,
            },
            {
              answer: "Сокол и солнце",
              point: 0,
            },
            {
              answer: "Ворон и звезды",
              point: 0,
            },
            {
              answer: "Сокол и лучи",
              point: 0,
            },
          ],
        },
        {
          question: "Что означает Sarbast ?",
          isAnswered: null,
          answers: [
            {
              answer: "Светлый, добрый, доброжелательный",
              point: 0,
            },
            {
              answer: "Cвободный, независимый, вольный",
              point: 1,
            },
            {
              answer: "Эффектный, темпераментный, бойкий",
              point: 0,
            },
          ],
        },
        {
          question:
            "В каком году началось производство Sarbast Original Unfiltered? ",
          isAnswered: null,
          answers: [
            {
              answer: "2007",
              point: 0,
            },
            {
              answer: "2009",
              point: 0,
            },
            {
              answer: "2017",
              point: 0,
            },
            {
              answer: "2019",
              point: 1,
            },
          ],
        },

        {
          question: "Сколько сортов пива Sarbast есть? ",
          isAnswered: null,
          answers: [
            {
              answer: "3",
              point: 0,
            },
            {
              answer: "4",
              point: 1,
            },
            {
              answer: "5",
              point: 0,
            },
            {
              answer: "7",
              point: 0,
            },
          ],
        },
        {
          question:
            "В каком международном бельгийской конкурсе участвует Sarbast?",
          isAnswered: null,
          answers: [
            {
              answer: "Monde Selection",
              point: 1,
            },
            {
              answer: "International Beer Award",
              point: 0,
            },
            {
              answer: "Brussels Beer Award",
              point: 0,
            },
            {
              answer: "Belgium Selection",
              point: 0,
            },
          ],
        },
        {
          question: "Из каких ингредиентов готовится пиво Sarbast?",
          isAnswered: null,
          answers: [
            {
              answer: "Вода, разрыхлитель, солод, хмель",
              point: 0,
            },
            {
              answer: "Вода, дрожжи, солод, хмель",
              point: 1,
            },
            {
              answer: "Вода, дрожжи, рис, хмель",
              point: 0,
            },
            {
              answer: "Вода, пищевая сода, солод, хмель",
              point: 0,
            },
          ],
        },
        {
          question:
            "У какого саб-бренда семейства Sarbast самое низкое содержание алкоголя?",
          isAnswered: null,
          answers: [
            {
              answer: "Sarbast Original Unfiltered",
              point: 0,
            },
            {
              answer: "Sarbast Special",
              point: 0,
            },
            {
              answer: "Sarbast Original",
              point: 0,
            },
            {
              answer: "Sarbast Lite",
              point: 1,
            },
          ],
        },
        {
          question:
            "Какую международную награду качества выиграл Sarbast в 2022? ",
          isAnswered: null,
          answers: [
            {
              answer: "American Beer Association Award",
              point: 0,
            },
            {
              answer: "Mezinárodní pivní festival",
              point: 0,
            },
            {
              answer: "World Beer Awards",
              point: 1,
            },
            {
              answer: "Beerfest Olomouc",
              point: 0,
            },
          ],
        },
      ],
      questionsUz: [
        {
          question: "Sarbast milliy pivo brendi qachon yaratilgan? ",
          isAnswered: null,
          answers: [
            {
              answer: "1992",
              point: 0,
            },
            {
              answer: "2001",
              point: 0,
            },
            {
              answer: "2007",
              point: 1,
            },
            {
              answer: "2012",
              point: 0,
            },
          ],
          // answers: {
          //   1992: 10,
          //   2001: 0,
          //   2007: 0,
          //   2012: 0,
          // },
        },
        {
          question: "Sarbast nima ma'noni bildiradi? ",
          isAnswered: null,
          answers: [
            {
              answer: "Yaxshi, mehribon, xayrixoh",
              point: 0,
            },
            {
              answer: "Erkin, mustaqil, hur",
              point: 1,
            },
            {
              answer: "Sifatli, sinovdan o'tgan, ishonchli",
              point: 0,
            },
            {
              answer: "Ajoyib, temperamentli, o'tkir",
              point: 0,
            },
          ],
        },
        {
          question: "Sarbast logotipida nimaning rasmi bor? ",
          isAnswered: null,
          answers: [
            {
              answer: "Burgut va nurlar",
              point: 1,
            },
            {
              answer: "Lochin va quyosh",
              point: 0,
            },
            {
              answer: "Qarg'a va yulduzlar",
              point: 0,
            },
            {
              answer: "Lochin va nurlar",
              point: 0,
            },
          ],
        },

        {
          question:
            " Sarbast Original Unfiltered pivosini chiqarish qaysi yildan boshlangan? ",
          isAnswered: null,
          answers: [
            {
              answer: "2007",
              point: 0,
            },
            {
              answer: "2009",
              point: 0,
            },
            {
              answer: "2017",
              point: 0,
            },
            {
              answer: "2019",
              point: 1,
            },
          ],
        },
        {
          question: "Sarbast pivosining nechta navi bor?",
          isAnswered: null,
          answers: [
            {
              answer: "3",
              point: 0,
            },
            {
              answer: "4",
              point: 1,
            },
            {
              answer: "5",
              point: 0,
            },
            {
              answer: "7",
              point: 0,
            },
          ],
        },
        {
          question:
            "Sarbast Belgiyaning qaysi xalqaro konkursida ishtirok etadi?  ",
          isAnswered: null,
          answers: [
            {
              answer: "Monde Selection",
              point: 1,
            },
            {
              answer: "International Beer Award",
              point: 0,
            },
            {
              answer: "Brussels Beer Award",
              point: 0,
            },
            {
              answer: "Belgium Selection",
              point: 0,
            },
          ],
        },
        {
          question:
            "Sarbast pivosi tarkibiga qanday masalliq solib tayyorlanadi? ",
          isAnswered: null,
          answers: [
            {
              answer: "Suv, g'ovaklagich, undirilgan arpa doni, xmel ",
              point: 0,
            },
            {
              answer: "Suv, achitqi, undirilgan arpa doni, xmel ",
              point: 1,
            },
            {
              answer: "Suv, achitqi, guruch, xmel ",
              point: 0,
            },
            {
              answer: "Suv, osh soda, undirilgan arpa doni, xmel ",
              point: 0,
            },
          ],
        },
        {
          question:
            "Sarbast ichki brendlarining qaysi birida alkogol eng past darajada? ",
          isAnswered: null,
          answers: [
            {
              answer: "Sarbast Original Unfiltered",
              point: 0,
            },
            {
              answer: "Sarbast Special",
              point: 0,
            },
            {
              answer: "Sarbast Original",
              point: 0,
            },
            {
              answer: "Sarbast Lite",
              point: 1,
            },
          ],
        },
        {
          question: "2022 yil Sarbast qaysi xalqaro sifat mukofotini oldi? ",
          isAnswered: null,
          answers: [
            {
              answer: "American Beer Association Award",
              point: 0,
            },
            {
              answer: "Mezinárodní pivní festival ",
              point: 0,
            },
            {
              answer: "World Beer Awards",
              point: 1,
            },
            {
              answer: "Beerfest Olomouc",
              point: 0,
            },
          ],
        },
      ],
      results: [
        {
          title: "Поздравляем!",
          subtitle: "Вы ответили правильно на все вопросы.",
          min: 9,
          max: 9,
        },
        {
          title: "Поздравляем!",
          subtitle: "Вы ответили правильно почти на все вопросы.",
          min: 7,
          max: 8,
        },
        {
          title: "Вы можете лучше!",
          subtitle: "Попробуйте снова, и узнайте больше о Sarbast.",
          min: 5,
          max: 6,
        },
        {
          title: "Вы можете лучше!",
          subtitle: "Попробуйте снова, и узнайте больше о Sarbast.",
          min: 0,
          max: 4,
        },
      ],
      resultsUz: [
        {
          title: "Tabriklaymiz!",
          subtitle: "Siz hamma savolimizga to'g'ri javob berdingiz. ",
          min: 9,
          max: 9,
        },
        {
          title: "Tabriklaymiz!",
          subtitle:
            "Savollarimizning deyarli hammasiga to'g'ri javob berdingiz. ",
          min: 7,
          max: 8,
        },
        {
          title: "Keyingi safar albatta yengasiz ",
          subtitle:
            "Sarbast haqida ko'proq bilib keyinroq yana bir marta harakat qilib ko'ring ",
          min: 5,
          max: 6,
        },
        {
          title: "Keyingi safar albatta yengasiz ",
          subtitle:
            "Sarbast haqida ko'proq bilib keyinroq yana bir marta harakat qilib ko'ring ",
          min: 0,
          max: 4,
        },
      ],
    };
  },
  computed: {},
  watch: {
    questions: {
      deep: true,
      handler(value) {
        const answered = this.questions.filter(
          (item) => item.isAnswered !== null
        );
        if (answered.length == this.questions.length) {
          console.log("END");
          this.success = true;
        }
        if (this.success) {
          document.querySelector("html").classList.add("no-scroll");
        } else {
          document.querySelector("html").classList.remove("no-scroll");
        }
      },
    },
    questionsUz: {
      deep: true,
      handler(value) {
        const answered = this.questionsUz.filter(
          (item) => item.isAnswered !== null
        );
        if (answered.length == this.questionsUz.length) {
          console.log("END");
          this.success = true;
        }
        if (this.success) {
          document.querySelector("html").classList.add("no-scroll");
        } else {
          document.querySelector("html").classList.remove("no-scroll");
        }
      },
    },
  },
  methods: {
    answered(question, answer) {
      question.isAnswered = question.answers.indexOf(answer);
      this.result += answer.point;
      console.log("click");
    },
    resetQuiz() {
      this.result = 0;
      this.success = false;
      this.questions.filter((item) => (item.isAnswered = null));
      this.questionsUz.filter((item) => (item.isAnswered = null));
    },
  },
});

const APP = {
  initModals() {},
  initInputVerify() {
    function testJump(x) {
      const ml = ~~x.getAttribute("maxlength");
      if (ml && x.value.length >= ml) {
        do {
          x = x.nextSibling;
        } while (x && !/text/.test(x.type));
        if (x && /text/.test(x.type)) {
          x.focus();
        }
      }
    }

    if (sessionStorage.getItem("AnnouncementOnce") == "true") {
      console.log("Announcement");
      document.querySelector(".modal").classList.add("show");
      // document.querySelector("html").classList.remove("no-scroll");
    }
    document.addEventListener("input", function (e) {
      const inputs = [...document.querySelectorAll(".verify-input")];
      const inputValue = inputs.map((n) => n.value).join("");
      const currentYear = new Date().getFullYear();
      console.log(inputValue);
      const inputValueLenght = inputValue.length;

      if (inputValueLenght == 4) {
        // console.log(typeof parseInt(inputValue));
        if (parseInt(inputValue) <= currentYear - 21) {
          sessionStorage.setItem("AnnouncementOnce", "false");
          document.querySelector(".modal").classList.add("close");
          document.querySelector("html").classList.remove("no-scroll");
        } else {
          document.querySelector(".no-verify").classList.add("active");
        }
      }
    });
    const coockie = document.querySelector(".coockie");
    const btnCoockie = document.querySelectorAll(".btn-coockie");
    [...btnCoockie].forEach((item) => {
      item.addEventListener("click", () => {
        sessionStorage.setItem("AnnouncementOnce", "false");
        coockie.classList.add("close");
      });
    });
    if (sessionStorage.getItem("AnnouncementOnce") == "false") {
      document.querySelector(".modal").classList.add("hidden");
      document.querySelector("html").classList.remove("no-scroll");
      document.querySelector(".coockie").classList.add("close");
    }

    // if (popup == null) {
    //   document.querySelector(".modal").classList.add("show");
    //   console.log("asdas");
    // }
  },
  initHamburger() {
    const $hamurger = document.querySelector(".hamburger");
    const $mobileNav = document.querySelector(".mobile-nav");
    const $navPanel = document.querySelector(".nav-panel");
    $hamurger.addEventListener("click", () => {
      $hamurger.classList.toggle("is-active");
      $mobileNav.classList.toggle("active");
      $navPanel.classList.toggle("active");
      document.querySelector("html").classList.toggle("no-scroll");
    });
  },
  initLinks() {
    Array.from(document.querySelectorAll(".link")).forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("html").classList.remove("no-scroll");
        document.querySelector(".mobile-nav").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("is-active");
        Array.from(document.querySelectorAll(".link.active")).forEach(function (
          link
        ) {
          link.classList.remove("active");
        });
        item.classList.add("active");
        scrollTo({
          top: document.querySelector(item.getAttribute("href")).offsetTop,
          left: 0,
          behavior: "smooth",
        });
      });
    });
    Array.from(document.querySelectorAll(".section")).forEach((section) => {
      const id = "#" + section.id;
      const links = document.querySelectorAll(`[href="${id}"]`);

      inView(id)
        .on("enter", (el) => {
          Array.from(links).forEach((link) => {
            link.classList.add("active");
          });
        })
        .on("exit", (el) => {
          Array.from(links).forEach((link) => {
            link.classList.remove("active");
          });
        });
    });
  },
  initSwiper() {
    [...document.querySelectorAll(".swiper")].forEach(($swiper) => {
      const defaultOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },

        // renderBullet: function (index, className) {
        //   if (index === swipertabsName.length - 1) {
        //     return (
        //       '<span class="' +
        //       className +
        //       '">' +
        //       swipertabsName[index] +
        //       "</span>" +
        //       '<div class="active-mark "></div>'
        //     );
        //   }
        //   return (
        //     '<span class="' +
        //     className +
        //     '">' +
        //     swipertabsName[index] +
        //     "</span>"
        //   );
        // },
      };
      let customOptions = $swiper.dataset.options
        ? JSON.parse($swiper.dataset.options)
        : {};
      let options = Object.assign(defaultOptions, customOptions);
      const swiper = new Swiper($swiper, options);
    });
    // var swiperHistoryThumbs = new Swiper(".swiper-history-thumbs", {
    //   spaceBetween: 10,
    //   grabCursor: true,
    //   watchSlidesProgress: true,
    // });
    // var swiperHistory = new Swiper(".swiper-history", {
    //   grabCursor: true,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   thumbs: {
    //     swiper: swiperHistory,
    //   },
    // });
    var swiper_thumbs = new Swiper(".swiper-history-thumbs", {
      slidesPerView: 2,
      slideToClickedSlide: true,
      clickable: true,
      watchSlidesProgress: true,
      grabCursor: true,
      centeredSlides: false,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        1024: {
          centeredSlides: true,
          slidesPerView: 4,
        },
      },
    });
    var swiper_product = new Swiper(".swiper-history", {
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-history-next",
        prevEl: ".swiper-history-prev",
      },
      thumbs: {
        swiper: swiper_thumbs,
      },
    });
    // swiperHistory.controller.control = swiperHistoryThumbs;
    // swiperHistoryThumbs.controller.control = swiperHistory;
    // var swiper_products = new Swiper(".swiper-products", {
    //   direction: "vertical",
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    //   mousewheel: true,
    //   pagination: {
    //     el: ".swiper-products-pagination",
    //     clickable: true,
    //   },
    // });
  },
  initVideo() {
    [...document.querySelectorAll(".video__container")].forEach(
      ($videoContainer) => {
        const video = $videoContainer.querySelector("video");
        const btnContainer = $videoContainer.querySelector(".btn-play");
        $videoContainer.addEventListener("click", () => {});
        if (btnContainer.addEventListener) {
          btnContainer.addEventListener("click", play, false);
        } else if (btnContainer.attachEvent) {
          btnContainer.addEventListener("click", play);
        }
        function play() {
          if (video.paused) {
            video.play();
            btnContainer.classList.add("show");
            video.controls = true;
          } else {
            video.pause();
            btnContainer.classList.remove("show");
            btnContainer.classList.add("show");
          }
        }
      }
    );
  },
  initMacy() {
    var macy = Macy({
      container: "#macy-container",
      trueOrder: true,
      waitForImages: false,
      margin: 14,
      columns: 3,
      // breakAt: {
      //   940: 3,
      //   520: 2,
      //   400: 1,
      // },
    });
  },
  initFlatpicker() {
    [...document.querySelectorAll(".datepicker")].forEach(($picker) => {
      const defaultOptions = { locale: Russian };
      let customOptions = $picker.dataset.options
        ? JSON.parse($picker.dataset.options)
        : {};
      let options = Object.assign(defaultOptions, customOptions);
      flatpickr($picker, options);
    });
  },
  initAccordion() {
    const $accordion = document.querySelectorAll(".faq");
    [...$accordion].forEach(($item) => {
      [...$item.querySelectorAll(".faq-item-toggle")].forEach(($toggle) => {
        $toggle.addEventListener("click", (e) => {
          e.preventDefault();
          $toggle.classList.toggle("active");
        });
      });
    });
  },
};
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  AOS.init({
    once: true,
  });
  APP.initModals();
  APP.initFlatpicker();
  APP.initInputVerify();
  APP.initHamburger();
  APP.initLinks();
  APP.initSwiper();
  APP.initVideo();
  APP.initMacy();
  APP.initAccordion();
});
