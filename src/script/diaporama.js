// Variables globales
let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
let timer, elements, slides, slideWidth

window.onload = () => {
    // On récupère le conteneur principal du diaporama
    const diapo = document.querySelector(".diapo")

    // On récupère le conteneur de tous les éléments
    elements = document.querySelector(".elements")

    // On récupère un tableau contenant la liste des diapos
    slides = Array.from(elements.children)

    // On calcule la largeur visible du diaporama
    slideWidth = diapo.getBoundingClientRect().width

    // On récupère les deux flèches
    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")

    // On met en place les écouteurs d'évènements sur les flèches
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    // Automatiser le diaporama
    // timer = setInterval(slideNext, 4000)

    // Gérer le survol de la souris
    // diapo.addEventListener("mouseover", stopTimer)
    // diapo.addEventListener("mouseout", startTimer)

    // Mise en oeuvre du "responsive"
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
}
/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext(){
    // On incrémente le compteur
    compteur++

    // Si on dépasse la fin du diaporama, on "rembobine"
    if(compteur == slides.length){
        compteur = 0
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev(){
    // On décrémente le compteur
    compteur--

    // Si on dépasse le début du diaporama, on repart à la fin
    if(compteur < 0){
        compteur = slides.length - 1
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}
/**
 * On stoppe le défilement
 */
function stopTimer(){
    clearInterval(timer)
}

/**
 * On redémarre le défilement
 */
function startTimer(){
    timer = setInterval(slideNext, 4000)
}



/**essai diaporama myriam
 * 
 /moule à cake POO pour rechercher le photographe suivant son Id ensuite ses images pour le diaporama?

 class photographer{          //charger la photo du photographe dans la page index.html ?
    add(photographerId.Portrait){
     console.log(ajout Portrait);
    }
} 
 


 class Diaporama{ //caroussel pour chaque photographe ensuite avec ses images
 	add(photographer.Image){
 		console.log(ajout image);
 	}
 }
/* constructor(listPhotographes){
 	this.listPhotographer = listPhotographes[];
 	this.current = null;
 }
*/
/*
constructor(listImage,selector){
    this.listImage = listImage;
    this.current = null;
    this.element = document.querySelector(selector);
}

init(){
     var ul = document.createElement("ul");
    for(let image of this.listImage){
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src",image);
        li.appendChild(img);
        ul.appendChild(li);
    }
    this.element.appendchild(ul);
}

add(image){
    this.listImage.push(image);
}

play(){
   this.curent = this.listImage[0];
}

next(){
      for(let Im0; i<this.listImage.lenght; i++){
          if(this.listImage[i]== this;current){
              this.current = this.listImage[++i];
              break;
          }
      }
    }

previous(){
       for(let Im0; i<this.listImage.lenght; i++){
          if(this.listImage[i]== this;current){
              this.current = this.listImage[++i];
              break;
          }
    }
}
}

<video id="example_video_by_hand" class="video-js vjs-default-skin" controls width="640" height="264"
               poster="http://video-js.zencoder.com/oceans-clip.jpg" preload="auto" data-setup="{}">
           <source type="video/mp4" src="http://video-js.zencoder.com/oceans-clip.mp4">
       </video>
       */
/*
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
       
 