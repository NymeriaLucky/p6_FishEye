 //ouverture de la modal formulaire dans les pages des photographes
 let testForm = document.querySelectorAll(".pp_contact");
   let ouverture = document.querySelector(".form_modal");
testForm.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  ouverture.style.display = "block";
} 

//Mon fichier forké
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// lancer l'événement modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lancer le formulaire modal
function launchModal() {
  modalbg.style.display = "block";
}
//Mon code-------------------------------------------------------------
// Ouvrir le menu sur mobile
const topbar = document.getElementById("myTopnav");
topbar.addEventListener('click', () => {
  if (topbar.className === "topnav") {
    topbar.className += " responsive";
  } else {
    topbar.className = "topnav";
  }
});

// Un formulaire modal appelé indexForm, avec les données nécessaires
const indexForm = new modalForm('.formData', '.btn-submit', '.bground', '.modal-btn');

// constructeur modalForm
function modalForm (formData, formConfirmButton, formModal, modalOpenButtons) {
  // arguments passés au constructeur de formulaire
  this.form = form;
  this.form(formData, formConfirmButton);
  // utilisation des éléments DOM nécessaires
  this.modal = document.querySelector(formModal);
  this.openButtons = document.querySelectorAll(modalOpenButtons);
  this.closebuttons = this.modal.querySelectorAll('.close');
  
  // surveiller un ou plusieurs boutons pour faire apparaître le modal
  this.openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        this.modal.style.display = "block";
    });
  });

  // Écouter un ou plusieurs boutons pour faire disparaître le modal
  this.closebuttons.forEach(btn => {
    btn.addEventListener('click', () => {
    this.modal.style.display = "none";
    });
  });
}

//Constructeur de formulaire
function form (formData, formConfirmButton) {
  // Prendre les éléments DOM nécessaires
  this.data = [...document.querySelectorAll(formData + ' input')];
  this.confirmButton = document.querySelector(formConfirmButton);
  // Attendre le bouton de confirmation et envoyer les données du formulaire pour validation
  this.confirmButton.addEventListener('click', ($event) => {
    // empêcher l'événement HTML
    $event.preventDefault();

    // nettoyer les erreurs obsolètes
    this.hideErrors(this.data);

    // isValid sera vrai si toutes les validations d'éléments retournent true
    const elements = [];
    this.data.forEach(object => {
      let el;
      // créer une instance d'élément en fonction du type d'objet vérifié par par l'instruction switch
      switch (object.type) {
        case 'prenom':
          el = new elementRadio(object);
          break
        case 'nom':
          el = new elementRadio(object);
          break
        case 'email':
          el = new elementEmail(object);
          break
        case 'Votre message': 
          el = new elementText(object);
          break        
        default :
          el = new element(object);
      }
      elements.push(el);
    });
  
    let isValid = elements.every((element) => {
      return element.isValid()
    });
    
    // Si le formulaire est valide, envoyez une confirmation
    if(isValid){
      let formBody = document.querySelector('.modal-body');
      let formSuccess = document.querySelector('.modal-success');
      formSuccess.style.minHeight = formBody.clientHeight +"px";
      formBody.style.display = 'none';
      formSuccess.style.display = 'flex';
    }
  });
  // cacher toutes les erreurs du formulaire
  this.hideErrors = function(data) {
    data.forEach((object) => {
      object.parentNode.setAttribute('data-error-visible', 'false');
    });
  };
}; 

//Constructeur d'élément
class element {
  constructor(object) {
    this.object = object;
  };
  /* default isValid () n'est pas censé être utilisé, donc il retourne false
  **si vous utilisez un nouvel type d'élément du formulaire, vous allez probablement
  ** créer un nouvel elementChild avec un isValid () spécifique*/
  isValid() {
    console.log("Element: " + this.object + " non reconnu.")
    console.log(this.object.type)
    return false;
  }
  //displayError sur un élément non valide
  displayError(errorMessage) {
    this.object.parentNode.setAttribute('data-error-visible', 'true');
    this.object.parentNode.setAttribute('data-error', errorMessage);
  };
};

class elementText extends element {
  isValid() {
    if(this.object.value.length>=2){
      return true;
    }else {
      this.displayError('Doit contenir plus de deux caractères.');//--MESSAGES D'ERREUR du nom
      return false;
    }
  }
}
//validation plus complexe avec regex, vérifier que le texte corresponde à une description que l'on a définie(email)
class elementEmail extends element {
  isValid() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(this.object.value).toLowerCase())){
      return true;
    }else {
      this.displayError('Doit être une adresse email valide.');//--MESSAGES D'ERREUR email
      return false;
    };
  };
};


