
const photographerId = [243, 930, 82, 527, 925, 195];

const found = photographerId.filter(photographerId => FishEyeData.json > 6);

console.log(found);
/* a adapter pour récupérer les infos du photographe dans le tableau photographers venant du json, où mettre cette commande?
                                                       quel type d'élément ? Id ?

 exemple:                                                      
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"] 

exemple2
let array = [1,2,3,4,5,6,7,8,9,10];

function showArray(data){
	let container = document.getElementById("container");
  for(let value of data){
  		container.innerHTML += value;
  }
}
let filteredArray = array.filter(element => element <= 5);
showArray(filteredArray);*/

let photographer = [name,id,city,country,tags,tagline, price, portrait]

function showPhotographer(data){
  let article = document.getElementById("article");
  for (let value of data){
    article.innerHTML += value;
  }
}
showArray(array);




/*
a développer :

function buildTags(photographers) {
  let list = new Set();
  for (var i = 0; i < photographers.length; i++) {
    let tags = photographers[i].tags;
    for (var j = 0; j < tags.length; j++) {
      list.add(tags[j]);
    }
  }
  return list;*/