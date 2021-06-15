 /**
     * Faire une request, si elle est valide return a page, sinon return the error404 page
     * @param {string} url - the user's request 
     * @returns {object} - a page, will be registered as this.currentPage in the router
     */
  createPage(url) 
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
    
    console.log(Page);


const queryString = window.location.search;
console.log("queryString : " + queryString);
const urlParams = new URLSearchParams(queryString);
const idParam = urlParams.get("id");
console.log("id param : " + idParam);

fetch('FishEyeData.json')
.then(function (response) {
    return response.json();
})
.then(function(data) {
    mediaList = fetchData(data); // list contient un array d'objets media
})
.catch(function(err) {
    console.log('erreur : ' + err);
});

var p_id;
var p_name;
var p_button;
var p_tags = new Array;
var p_tagline;
var p_location;
var p_portrait;


function showArray(data){
	let article = document.getElementById("article");
  for(let value of data){
  		container.innerHTML += value;
  }
}

let filteredArray = array.filter(element => element <= 5);
showArray(filteredArray);


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

//essai myriam :
// factory pattern , fonction pour filtrer les images du photographe suivant le tag et id

 tableauMedia.filter(media => media.photographerId == id)

 class photographerId{
            showArray(data){
                 find('image') //soit diaporama ?
                 image <= 10
                 return('image'+"")
             }
     
            showArray(data){
                 find('title') //un titre pour chaque image
                 return('title')
             }

            showArray(data){
                 find('date') //une date pur chaque image
                 return('date')
            }

            showArray(data){
                 find('likes') //nombre de likes pour chaque image
                 return('likes')
            }  
         
 }

 function factory(Id){
      switch(Id){
        case 'image':
                return new image("")
        case 'title':
                return new title()
        case 'date' :
                return new date()
        case'likes' :
                return new likes()
      }
 }

 const photographer = factory('tags');
 photographerId.showArray(data);


 //autre essai
 // Un composant qui affichera tous les médias du photographe sur sa page
var PhotographerMedias = new(PhotographerMedias)
 

  /**
   * Insérez un modèle, puis appelez short() & render() & listenSort
   */
  connectedCallback () 
      const template = document.createElement('template');
      template.innerHTML = `
      <section class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
      </section>
      `;
      this.appendChild(template.content);
      this.sort("date");
      this.render();
      this.listenSort();
  
  /**
   *  Effacez la section, puis créez une <media-card> pour chaque média
   */
  render() 
      this.querySelector("section").innerHTML = "";
      this.medias.forEach(media => {
          this.querySelector("section").insertAdjacentHTML('beforeEnd', 
          '<media-card id="num' + media.id + '"></media-card>');
      });
  

  /*
   Boutton trier les médias par date, likes ou titre*/
    @param {sting} value - parameters of sorting
  sort(value) 
      switch (value) {
          case "date":
              this.medias.sort((m1, m2) => {
                  let d1 = new Date(m1.date);
                  let d2 = new Date(m2.date);
                  return d2 - d1;
              })
              break;
      
          case "likes":
              this.medias.sort((m1, m2) => m2.likes - m1.likes);
              break;
      
          case "title":
              this.medias.sort((m1, m2) => m1.title.toLowerCase().localeCompare(m2.title.toLowerCase()));
              break;
      
          default:
              console.error("Oops");
              break;
      }
  };

  /**
   * Écoutez le composant <medias-select> et sort() lorsqu'un paramètre de tri est sélectionné
   */
   listenSort() 
      document.getElementById("sortMedias").addEventListener('change', select => {
          this.sort(select.target.value)
          this.render();
      })
  

  /*
   A partir d'un ID retourner un tableau avec tous les médias du photographe depuis le JSON*/
    @param {integer} id - id du photographer
    @returns {array} - les medias du photographe
   

  getMedias(id) 
      // renvoyer le photographe dans le JSON dont l'identifiant correspond à l'identifiant demandé
      console.log( data.media.filter(media => media.photographerId == id));
  

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


fetch("FishEyeData.json")
            .then(res => res.json())
            .then(jsonData => {
            console.log(jsonData)
            const photographers = jsonData.photographers
            jsonData.photographers.forEach(photographer => {
            photographersDiv.innerText = photographer.name
            document.getElementById("photographers").appendChild(photographersDiv)
            const photographersDiv = document.createElement("div")
                        })
                    });
                    
let childElement = document.createElement("Photograph-header");
            childElement PhotographerHeader= new PhotographerHeader;
            class PhotographerHeader{//Uncaught SyntaxError : identifiant inattendu ?
                constructor(p_id, p_name,p_button, p_tags, p_tagline, p_location, p_portrait){
                   this.p_id =p_id;
                   this.p_name=p_name;
                   this.p_location=p_location;
                   this.p_tagline=p_tagline;
                   this.tags=p_tags;
                   this.button=p_button;
                   this.portrait=p_portrait;
                }
             }
             getP_id() {
                return this.p_id;
            }
            
            setP_id(p_id) {
                this.p_id = p_id;    
            }
            
            getP_name() {
                return this.p_name;
            }
            
            setP_name(p_name) {
                this.p_name = p_name;    
            }
            
            getP_price() {
                return this.p_button;
            }
            
            setP_price(p_button) {
                this.p_button = p_button;    
            }
            
            getP_tags() {
                return this.p_tags;
            }
            
            setP_tags(p_tags) {
                this.p_tags = p_tags;    
            }
            
            getP_tagline() {
                return this.p_tagline;
            }
            
            setP_tagline(p_tagline) {
                this.p_tagline = p_tagline;    
            }
            
            getP_location() {
                return this.p_location;
            }
            
            setP_location(p_location) {
                this.p_location = p_location;    
            }
            
            getP_portrait() {
                return this.p_portrait;
            }
            
            setP_portrait(p_portrait) {
                this.p_portrait = p_portrait;    
            }
            }
                
            
            ${thumbnail}//likes
                  </a>
                  <figcaption class="photo__details">
                       <h2 class="photo-title">${media.name}</h2> 
                       <p class="price">${media.price}€</p>
                       <a href="#" class="likes likesBlock" aria-describedby="Mentions j'aime"><span class="likes">${media.likes} </span><em class="fas fa-heart"></em></a>
                  </figcaption>
              </figure>   
            `;

parentElement.appendChild(childElement); 
                  }
                }); 
 //Pour les likes des photographes :
<a
          aria-hidden="false"
          class="heart"
          focusable="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"          
        >
          <title>Coeur</title>
          <desc>la forme d'un coeur dessiné simplement</desc>
          <path
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          />
        </a> 
        
        function store() {
            var favItem = document.getElementsByClassName('favorite');
            var favorites =[];
            var fav = favItem.children;
            favorites.push(fav);
            console.log(favItem);
            console.log(favorites);
        }
        document.querySelectorAll(".favorite").forEach(item => {
            item.addEventListener("click", store);
        });    