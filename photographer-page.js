 /**
     * Faire une request, si elle est valide return a page, sinon return the error404 page
     * @param {string} url - the user's request 
     * @returns {object} - a page, will be registered as this.currentPage in the router
     */
  createPage(url) {
    let Page;

    if (url == '/') {
        Page = new this.index();
    } else if(url.startsWith("/tag-")) {
        Page = new this.tag();
    } else if(url.startsWith("/user")) {
        Page = new this.user();
    } else {
        Page = new this.error404();
    }

    Page.url = url;
    
    return Page;
}
}


function appendData(data) {

  // Traitement de l'array "photographers" --> Affiche de la fiche de chaque photographe
  var photographers = data.photographers;

  // Traitement de l'array "media" (à déplacer)
  var medias = data.media;

  var photographersTagsBox = document.getElementById('tagsbox');
    var listPhotograph = document.getElementById('list'); // mes instructions sur les données
    
    var photographerCard = document.createElement("photographer-card");

    for (photographer of photographers) {
      // for (var i = 0; i < photographers.length; i++) {
        // var photo
 var video = document.createElement("video");
 video.setAttribute("id", id);
 video.setAttribute("class", "video-js vjs-default-skin");
 video.setAttribute("width", "560");
 video.setAttribute("data-height", "400");
 video.setAttribute("controls", " ");
 video.setAttribute("poster", "FishEyes_Photos/video-logo.jpg");
 video.setAttribute("preload", "auto");
 video.setAttribute("data-setup", "{}");
 
 var source = document.createElement("source");
 source.setAttribute("type", "video/mp4");
 source.setAttribute("src", "FishEyes_Photos/Sample_Photos/Mimi/Animals_Wild_Horses_in_the_mountains.mp4");
 
 video.appendChild(source);
 article.appendChild(video);

 /*
 scriptDia.src = "diaporama.js";
 video.innerText = "video.mp4";
 scriptDiapo.appendChild(video);
 diaporama.appendChild(scriptDia);
 article.appendChild(diaporama);
 article.appendChild(p);
 */
 
 article.appendChild(document.createElement("br"));

 // article.appendChild(photographerCard);
 listPhotograph.appendChild(article);
}

}



//ouverture de la modal formulaire dans la page des photographes.
let testForm = document.querySelectorAll(".pp_contact");
let ouverture = document.querySelector(".form_modal");
testForm.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  ouverture.style.display = "block";

/* si ta modal a un id tu peux simplement la faire apparaître avec du jQuery 
  dans ton javascript ==> $("#monID").show(); a toi de voir pour l'associer a une 
  fonction parametre de ton add.eventListener
Si tu veux faire des transitions tu peux aussi jouer avec ça : 
Fermeture : $("#monIdDeModalAFermer").fadeOut(5000),
Ouverture :$("#monIdDemodalAOuvrir").fadeIn(2500),

Le nombre entre parenthèse étant un délai choisi par toi*/
