





/*objectif est de ne faire qu'un seul fichier de detail
un fichier index.html
un fichier detail.html
Quand on clique sur un photographe on va arriver sur la page détail de celui ci.
Donc tu réaffiches ses infos.Il faudra filtrer les média pour ne récupérer que les média qui lui 
 sont associés. Les photograph ont un id et les media ont un photographerId
donc filtrer avec ça*/

//sur la page détail tu est capable de récupérer l'id de l'utilisateurc'est un paramètre d'url

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


function appendData(data) {


const searchParam = (new URL(window.location)).searchParams;//parse l'url de la page et récupère l'ensemble des paramètres
const photographId = searchParam.get('243');
const photographId = searchParam.get('930');
const photographId = searchParam.get('82');
const photographId = searchParam.get('527');
const photographId = searchParam.get('925');
const photographId = searchParam.get('195');//const photographId = searchParam.get('id')

}
