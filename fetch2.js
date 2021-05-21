fetch('FishEyeData.json') // demande de récuperation pour charger le fichier question//
.then(response => 
response.json()) // pour transformer le resultat du fichier qui est une chaine de caractère en un objet/tableau.js//
.then(data => {
var listPhotograph = document.getElementById('photographers');//mes instructions sur les données//
for(const photographers of data.photographers){
  listPhotograph.innerHTML += `<article alt="photographers profile">
                      <a href ="" alt="photographers page">
                          <div class="photo_graphers">
                            <img src="photos/sample/id_photos/${photographers.portrait}" alt="Mimi Keel">
                          </div>
                            <p><span class="name">${photograph.name}</span>
                            </p>
                            <p class ="city" alt="photographers-city">
                                ${photographers.city}
                            </p>
                            <p class ="slogan" alt="photographer-slogan">
                                ${photographers.tagline}
                            </p>
                            <p class ="prices" alt="photographer-prices">
                                ${photographers.price}€/jour
                            </p>
                              <nav aria-label="categories" id="tagsbox">
                              </nav>
                          </article>`; //liste de tous les elements/tags
 var photographersTagsBox = document.getElementById('tagsbox');
 for(let tags of photographers.tags){
   photographersTagsBox.innerHTML += `input type="button" value="#${photographersTagsBox.tags}" alt= ${photographersTags}`;


   listPhotograph.innerHTML += `<article alt="photographers profile">
   <a href ="" alt="photographers page">
       <div class="photo_graphers">
         <img src="photos/sample/id_photos/${photographers.portrait}" alt="Mimi Keel">
       </div>
         <p><span class="name">${photograph.name}</span>
         </p>
         <p class ="city" alt="photographers-city">
             ${photographers.city}
         </p>
         <p class ="slogan" alt="photographer-slogan">
             ${photographers.tagline}
         </p>
         <p class ="prices" alt="photographer-prices">
             ${photographers.price}€/jour
         </p>
           <nav aria-label="categories" id="tagsbox">
           </nav>
       </article>`; //liste de tous les elements/tags

       var photographersTagsBox = document.getElementById('tagsbox');
for(let tags of photographers.tags){
photographersTagsBox.innerHTML += `input type="button" value="#${photographersTagsBox.tags}" alt= ${photographersTags}`;
}//Pour les tags personnalisés attribués aux photographes ?//
var photographersTagsBox = document.getElementById('tagsbox');                      
function buildTags(photographers) {
let list = new Set();
for (var i = 0; i < photographers.length; i++) {
let tags = photographers[i].tags;
for (var j = 0; j < tags.length; j++) {
list.add(tags[j]);
}
}
return list;          
}
}                           
}); 
//Pas d'affichage dans chrome ! sinon utiliser le tableau ci-dessous //

const array1 = [5, 12, 8, 130, 44];//id respectif des photographes, array2=medias
const found = array1.find(element => element > 10);

console.log(found);
// a adapter pour récupérer les infos du photographe dans le tableau photographers venant du json, où mettre cette commande?

/*et dans le tableau media du json, de récupérer les médias qui appartiennent au photograph dont l'id est 85 
avec array.filter en adaptant suivant besoin:*/
const tags = ['#portrait', '#art', '#fashion', '#architecture', '#travel', '#sport', '#animals', '#events'];

const result = tags.filter(tags => tags.length > 6);

console.log(result);
// après récupération des données, afficher dans le DOM

document.getElementById("moncontainer").innerHTML = `<div class="photograph">${photograph.nom}</div>`;

//et adapter l'exemple suivant avec les données json
let photograph =  `<div class="photograph">
                 <img src="/images/${photograph.img}">
                 <span class="name">${photograph.name}</span>
               </div>`;

/*afficher le contenu dans le html
on parcours le tableau photographers du json et après selon les pages,
il faudra filtrer ces données et les afficher*/

for(let photograph of data.photographers){
document.getElementById("listPhotograph").innerHTML += `<div class="photograph"> 
                   <img src="/images/${photograph.img}">
                   <span class="name">${photograph.name}</span>
               </div>`;
};