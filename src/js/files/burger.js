export default function burger() {
  const burgerOpen = document.querySelector("#burger-open");
  const burger = document.querySelector("#burger");

  burgerOpen.addEventListener("click", (e) => {
    e.stopPropagation();

    if (burger.classList.contains("_open")) {
      burgerClose();
    } else {
      burgerOpen.classList.add("_active");
      burger.classList.add("_open");

      document.body.classList.add("body-hidden");
      burger.addEventListener("click", (e) => e.stopPropagation());

      document.body.addEventListener("click", burgerClose);
    }
  });
}
export function burgerClose() {
  const burger = document.querySelector("#burger");
  const burgerOpen = document.querySelector("#burger-open");

  burgerOpen.classList.remove("_active");
  burger.classList.remove("_open");

  document.body.classList.remove("body-hidden");

  document.body.removeEventListener("click", burgerClose);
}
