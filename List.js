
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

a développer :

function buildTags(photographers) {
  let list = new Set();
  for (var i = 0; i < photographers.length; i++) {
    let tags = photographers[i].tags;
    for (var j = 0; j < tags.length; j++) {
      list.add(tags[j]);
    }
  }
  return list;