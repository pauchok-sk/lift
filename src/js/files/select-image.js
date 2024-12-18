export default function selectImage() {
  const selects = document.querySelectorAll(".select-image");

  if (selects.length) {
    selects.forEach((s) => {
      const image = s.querySelector(".select-image__btn").querySelector("img");

      s.addEventListener("click", (e) => {
        const target = e.target;
        if (target.closest(".select-image__item-btn")) {
          image.src = target.src;
        }
      });
    });
  }
}