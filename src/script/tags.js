/*fetch('FishEyeData.json') // demande de récuperation pour charger le fichier question
.then(function (response) {
    return response.json();
})
.then(function(data) {
  appendData(data);
})
.catch(function(err) {
    console.log('erreur : ' + err);
});


function appendData(data){
    var tags = data.tags;
    var photographersTagsBox = document.getElementById('tag-nav');
const array1 = [243, 82, 925, 930, 527, 195];//id respectif des photographes, array2=medias
const found = array1.find(tags => photographers == 8);

console.log(found);
// a adapter pour récupérer les infos du photographe dans le tableau photographers venant du json, où mettre cette commande?

/*et dans le tableau media du json, de récupérer les médias qui appartiennent aux photographes 
avec array.filter en adaptant suivant besoin:*
const tags = ['#portrait', '#art', '#fashion', '#architecture', '#travel', '#sport', '#animals', '#events'];

const result = tags.filter(tags => tags.length == 8);

console.log(result);

for (tags of photographers) {
    var photographersTagsBox = document.createElement("photographerTagsBox")// tableau tous tags 
    var tagNav = document.createElement("tag-nav")//espace de stockage de la liste 
    var tag = document.createElement("tag"); // element du tableau li
    var ul = document.createElement("ul")//contenant de la liste
    var li = document.createElement("li")//contenant de l'élément #tag
    var tags = document. createElement("tagList")


    var tag = photographers.tag;
    var photographersTagsBox =  photographers.photographersTagsBox;
    var tagList = "photographersTagsBox";

    tagNav.innerText = tagList;
    tagNav.appendChild(tag)
        for (tags of tagList) {
          console.log("tag: " + tags);
          tagList = tagList + " " + tags;
        }
        
        tags.innerText = tagList;
        photographersTagsBox.appendChild(tags);
}

@param {string} tag - a tag
     * @returns {array} - all the photographers tagged
     *
     getPhotographersTagsbox(tagList) {
        // return all the photographers from the JSON whose tags include the looked tag
        return data.photographers.filter(photographer => photographer.tags.includes(tag));
    }
}
    
// après récupération des données, afficher dans le DOM
        /* {
            function appendData(data) {

    // Traitement de l'array "photographers" --> Affiche de la fiche de chaque photographe
    var photographers = data.photographers;

    // Traitement de l'array "media" (à déplacer)
    // var medias = data.media;

    //var photographersTagsBox = document.getElementById('tagsbox');
    var listPhotograph = document.getElementById('list'); // mes instructions sur les données
      
    var photographerCard = document.createElement("photographer-card");

    for (photographer of photographers) {
        */
fetch('FishEyeData.json') // demande de récuperation pour charger le fichier question
      .then(function (response) {
  return response.json();
  })
      .then(function(data) {
  appendData(data);
      })
      .catch(function(err) {
  console.log('erreur : ' + err);
      });


  function appendData(data){
        var tags = data.tags;
        var photographersTagsBox = document.getElementById('tag-nav');
    const array1 = [243, 82, 925, 930, 527, 195];//id respectif des photographes, array2=medias
    const found = array1.find(tags => photographers == 8);
    
    console.log(found);
    // a adapter pour récupérer les infos du photographe dans le tableau photographers venant du json, où mettre cette commande?
    
    /*et dans le tableau media du json, de récupérer les médias qui appartiennent aux photographes 
    avec array.filter en adaptant suivant besoin:*/
    const tags = ['#portrait', '#art', '#fashion', '#architecture', '#travel', '#sport', '#animals', '#events'];
    
    const result = tags.filter(tags => tags.length == 8);
    
    console.log(result);


for (tags of photographers) {
  var photographersTagsBox = document.createElement("photographerTagsBox")// tableau tous tags 
  var tagNav = document.createElement("tagNav")//espace de stockage de la liste 
  var tag = document.createElement("tag"); // element du tableau li
  var ul = document.createElement("ul")//contenant de la liste
  var li = document.createElement("li")//contenant de l'élément #tag
  var tags = document. createElement("tagList")
  

  var tag = photographers.tag;
  var photographersTagsBox =  photographers.photographersTagsBox;
  var tagList = "photographersTagsBox";
      for (tag of itags) {
        console.log("tag: " + tag);
        tagList = tagList + " " + tag;
      }
      
      tags.innerText = tagList;
      photographersTagsBox.appendChild(tags);
}

@param {string} tag - a tag
     * @returns {array} - all the photographers tagged
     */
     getPhotographersTagsbox(tagList) {
        // return all the photographers from the JSON whose tags include the looked tag
        return data.photographers.filter(photographer => photographer.tags.includes(tag));
    }
}

// après récupération des données, afficher dans le DOM
        /* {
            function appendData(data) {

    // Traitement de l'array "photographers" --> Affiche de la fiche de chaque photographe
    var photographers = data.photographers;

    // Traitement de l'array "media" (à déplacer)
    // var medias = data.media;

    //var photographersTagsBox = document.getElementById('tagsbox');
    var listPhotograph = document.getElementById('list'); // mes instructions sur les données
      
    var photographerCard = document.createElement("photographer-card");

    for (photographer of photographers) {
        */

    
var tagNav = class {
  constructor( tags){
    this.tags = tags;
    return all `tags`;
  }
}

function showArray(dat

fetch ('FishEyeData.json'){
        let tagNav = document.getElementById('tag-nav');
          for(let value of data){
                  tagNav.innerHTML += value;
          }
        
        let filteredArray = tableauMedia.filter(media => media.photographerId == id);
        showArray(filteredArray);

        let tagNav = new tagNav('tag-nav'){
          constructor( tags){
            this.tags=tags;
            return all `tags`;
          }
        }

        console.log(document.getElementById('tags'));