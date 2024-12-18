import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
export default function slider() {
  const recSlider = document.querySelector(".rec__slider");

  if (recSlider && window.matchMedia("(max-width: 1024px)").matches) {
    const swiper = new Swiper(recSlider, {
      speed: 700,
      modules: [Autoplay],
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000,
      },
    });
  }

  const gallerySliders = document.querySelectorAll(".gallery__item-slider");

  if (gallerySliders.length) {
    gallerySliders.forEach((slider) => {
      const buttonsSlider = slider
        .closest(".gallery__item")
        .querySelectorAll(".gallery__nav-btn");

      const swiper = new Swiper(slider, {
        speed: 700,
        modules: [Autoplay],
        spaceBetween: 15,
        slidesPerView: "auto",
        autoplay: {
          delay: 3000,
        },
      });

      buttonsSlider.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          swiper.slideTo(index);
        });
      });
    });
  }

  const reviewsSlider = document.querySelector(".reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 700,
      modules: [Autoplay, Navigation, Pagination],
      spaceBetween: 20,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".reviews__slider-btn._prev",
        nextEl: ".reviews__slider-btn._next"
      },
      pagination: {
        clickable: true,
        el: ".reviews__slider-pagination"
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        577: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      }
    });
  }
}
