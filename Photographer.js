

//recherche l'url de tous les photographes ? faut-il refaire pour chacun ?
const searchParam = (new URL(window.location)).searchParams; // parse l'url de la page et récupère l'ensemble des paramètres
const photographId = searchParam.get('id'); // récupère la valeur du paramètre nommé 'id'
return(URL);

//moule à cake POO pour rechercher le photographe suivant son Id ensuite ses images pour le diaporama?

 class photographer{          //charger la photo du photographe dans la page index.html ?
 	add(photographerId.Portrait){
      console.log(ajout Portrait);
 	}
 }

 class Diaporama{             //caroussel pour chaque photographe ensuite avec ses images
 	add(photographer.Image){
 		console.log(ajout image);
 	}
 }
/* constructor(listPhotographes){
 	this.listPhotographer = listPhotographes[];
 	this.current = null;
 }
*/
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