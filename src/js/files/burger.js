export default function burger() {
  const burgerOpen = document.querySelector("#burger-open");
  const burgerCloseBtn = document.querySelector("#burger-close");
  const burger = document.querySelector("#burger");
  const burgerOverlay = document.querySelector(".header__burger-overlay");

  burgerOpen.addEventListener("click", (e) => {
    e.stopPropagation();

    if (burger.classList.contains("_open")) {
      burgerClose();
    } else {
      burgerOpen.classList.add("_active");
      burger.classList.add("_open");

      burgerOverlay.classList.add("_active");
      document.body.classList.add("body-hidden");
      burger.addEventListener("click", (e) => e.stopPropagation());

      burgerCloseBtn.addEventListener("click", burgerClose);
      console.log(burgerCloseBtn)

      document.body.addEventListener("click", burgerClose);
    }
  });
}
export function burgerClose() {
  const burger = document.querySelector("#burger");
  const burgerOpen = document.querySelector("#burger-open");
  const burgerOverlay = document.querySelector(".header__burger-overlay");

  burgerOpen.classList.remove("_active");
  burger.classList.remove("_open");
  burgerOverlay.classList.remove("_active");

  document.body.classList.remove("body-hidden");

  document.body.removeEventListener("click", burgerClose);
}
