import JustValidate from "just-validate";

export default function validate() {
  const modalFormCall = new JustValidate("#form-order-call");

  if (modalFormCall) {
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
      .addField("#order-call-email", [
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
      .addField("#order-call-work", [
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
      .addField("#order-call-policy", [
        {
          rule: "required",
          errorMessage: "Это поле должно быть заполнено",
        },
      ]);
  }

  
  if (document.querySelector("#form-connection")) {
    const formConnection = new JustValidate("#form-connection");
    formConnection
      .addField("#connection-name", [
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
      .addField("#connection-tel", [
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
}
