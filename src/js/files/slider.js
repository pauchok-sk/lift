import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
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
}
