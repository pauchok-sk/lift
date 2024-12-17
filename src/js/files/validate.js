import JustValidate from "just-validate";

export default function validate() {
  const modalFormCall = new JustValidate("#form-order-call");

  modalFormCall
    .addField("#order-call-name", [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимум 3 символа",
      },
      {
        rule: "required",
        errorMessage: "Это поле должно быть заполнено",
      },
    ])
    .addField("#order-call-tel", [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимум 3 символа",
      },
      {
        rule: "required",
        errorMessage: "Это поле должно быть заполнено",
      },
    ]);
}
