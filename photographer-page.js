//ouverture de la modal formulaire dans la page des photographes.
let testForm = document.querySelectorAll(".pp_contact");
   let ouverture = document.querySelector(".form_modal");
testForm.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  ouverture.style.display = "block";

  /* si t'as modal a un id tu peux simplement la faire apparaître avec du jQuery 
  dans ton javascript ==> $("#monID").show(); a toi de voir pour l'associer a une 
  fonction parametre de ton add.eventListener
Si tu veux faire des transitions tu peux aussi jouer avec ça : 
Fermeture : $("#monIdDeModalAFermer").fadeOut(5000),
Ouverture :$("#monIdDemodalAOuvrir").fadeIn(2500),

Le nombre entre parenthèse étant un délai choisi par toi*/
