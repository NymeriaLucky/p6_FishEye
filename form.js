 //ouverture de la modal formulaire dans les pages des photographes
 let testForm = document.querySelectorAll(".pp_contact");
   let ouverture = document.querySelector(".form_modal");
testForm.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  ouverture.style.display = "block";
} 

