
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
                    
let childElement = document.createElement("article");
            childElement.classList.add("pictures__picture");

            childElement.innerHTML = `
              <figure class="photo">
                  <a href="assets/images/pictures/${media.url}" type="${media.type}">
                       ${thumbnail}
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
                }                 