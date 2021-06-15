/* Home page of the application
*/
export class IndexPage extends HTMLElement {
   constructor() {
       super();
   } 
   

fetch("FishEyeData.json")
            .then(res => res.json())
            .then(jsonData => {
            console.log(jsonData)
            const photographersDiv = document.createElement("div")
            photographersDiv.innerText = jsonData.photographers[0].name;//Là tu récupère le photographe[0], au lieu de ça tu pourrais récupérer un objet "photographes" 
            document.getElementById("photographers").appendChild(photographersDiv)
                          }); 

const photographers = jsonData.photographers
jsonData.photographers.forEach ( photographer => {
                            // tu rempli ton HTML
                             // innertext = photographer.name
                            // ... appendchild
                          });
then(jsonData => {
    console.log(jsonData)
                    // Je récupères tous les photographes dans une variable
                    // Je prends les photographes et je boucle dessus
                          // pour chaque photographe, je crée une div
                          // je rempli la div avec le nom du photographe<
                          // j'envoie la div dans le HTML avec appendchild
                          // fin de la boucle
                    // fin du fetch
                    
