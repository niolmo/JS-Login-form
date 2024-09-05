const form = document.querySelector(".page__form");
const url; // Ваша ссылка 

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(`${url}/???`, {
    method: "POST",
    body: formData
  }); //Вмнсто ??? вставьте вашу полную ссылку
  const resault = await response.text();
  console.log(resault);
});
