export default function mask() {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask("+7 (999) 999-99-99");
  if (inputs.length) {
    im.mask(inputs);
  }
}

export function maskToggle() {
  const buttons = document.querySelectorAll("[data-mask-btn]");

  if (buttons.length) {
    buttons.forEach((btn) =>
      btn.addEventListener("click", () => {
        const mask = btn.dataset.maskBtn;

        const currentInput = btn.closest(".parent-mask").querySelector(".input-mask");

        const im = new Inputmask(mask);

        im.mask([currentInput]);
      })
    );
  }
}
