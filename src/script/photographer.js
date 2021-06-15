

//user page
//recherche l'url de tous les photographes ? faut-il refaire pour chacun ?
const searchParam = (new URL(window.location)).searchParams; // parse l'url de la page et récupère l'ensemble des paramètres
const photographId = searchParam.get('id'); // récupère la valeur du paramètre nommé 'id'
return(URL);


 // Contient la liste des photographes sous forme d'array et qui sera utilisé dans l'objet Photographers
var photographerList = new Array;

export class Photographers {
    constructor() {
    }

    getPhotographers() {
        return this.photographerList;
    }

    setPhotographers(photographerList) {
        this.photographerList = photographerList;
    }

    // Permet d'obtenir les photographes ayant un tag identique
    getPhotographersByTag(p_tag) {
        var p_byTagList = new Array;

        for (photograph of photographerList) {// for(property in photographerList) remplacé
            // console.log(photographerList[property].p_tags);

            var tags = new Array;
            tags = photographerList[property].p_tags;

            for (let tag of photograph.p_tags) {//for (tag of tags) remplacé
                // console.log("tag: " + tag);

                if (p_tag == tag) {
                    p_byTagList.push(photographerList[property]);
                }
            }
        }

        return p_byTagList;
    }

    // Permet d'obtenir les photographes ayant un tag identique
    getPhotographerById(pid) {
        for (property of photographerList) {
            // console.log(photographerList[property].p_id);
    
            var p_id = photographerList[property].p_id;

            if (p_id == pid) {
                console.log("Found photographer by id:" + p_id);
                return photographerList[property];
            }
        }
        return null;
    }
}
