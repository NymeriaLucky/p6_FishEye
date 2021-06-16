
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

/*import { Photographers } from './photographer';*/
const queryString = window.location.search;
console.log("queryString : " + queryString);
const urlParams = new URLSearchParams(queryString);
const idParam = urlParams.get("id");
console.log("id param : " + idParam);

var p_id;
var p_name;
var p_price;
var p_tags = new Array;
var p_tagline;
var p_location;
var p_portrait;

// Objet Photographer
class Photographer {
    constructor(p_id, p_name, p_price, p_tags, p_tagline, p_location, p_portrait) { // constructeur
        this.p_id = p_id;
        this.p_name = p_name;
        this.p_price = p_price;
        this.p_tags = p_tags;
        this.p_tagline = p_tagline;
        this.p_location = p_location;
        this.p_portrait = p_portrait;
        this.log=function(){
   
let photographer = new Photographer();
console.log(photographer + ""+ "this.p_id" - "this.p_name" - "this.p_price" - "this.p_tags"- "this.p_tagline" - "this.p_location"
-"this.p_portrait");
}

// Contient la liste des médias sous forme d'array et qui sera utilisé dans l'objet Medias
var mediaList = new Array;
var m_id;
var m_p_id;
var m_image;
var m_video;
var m_title;
var m_tags;
var m_likes;
var m_date;
var m_price;


// Fonction de création des objets Photographers et Medias à partir des données JSON
function fetchData(data) {

    console.log('********************************* Photographers ********************************');

    // Liste des photographes au format JSON
    var photographersData = data.photographers;

    // Nombre de photographes
    var count = Object.keys(photographersData).length;
    console.log("Number of photographers: " + count);

    // Instanciation de Photographers
    photographers = new Photographers();

    // On parcours les entrées photographers du JSON
    for (let i = 0; i < count; i++) {
        // console.log('i: ' + i);

        var p = photographersData[i];

       // Création de l'instance Photographer
       photographer = new Photographer(p_id, p_name, p_price, p_tags, p_tagline ,p_location, p_portrait);

        /*
        console.log("p_id: " + p_id);
        console.log("p_name: " + p_name);
        console.log("p_price: " + p_price);
        console.log("p_tagline: " + p_tagline);
        console.log("p_location: " + p_location);
        console.log("p_portrait: " + p_portrait);
        */

        // Un photographe peut avoir plusiseurs tags, ils sont stockés dans un tableau
        p_tags = [];
        for (tag of p.tags) {
            // console.log("p_tag: " + tag);
            p_tags.push(tag);
        }

        /*
        for (property in photographer) {
            console.log(photographer[property]);    
        }
        */

        // console.log(photographer.constructor.name);

        // Ajout du photographe dans la liste des photographes
        photographerList.push(photographer);
    }

    // Mise à jour de l'instance Photographers avec le liste des photographes
    photographers.setPhotographers(photographerList);

    // console.log(photographers.constructor.name);

    // Affichage des photographes de l'objet Photographers
    console.log("List of photographers from Photographers object:");
    for (property in photographers) {
        console.log(photographers[property]);
    }

    
    console.log('********************************* Traitements **********************************');

    /*
     * Test
    // Récupération de tous les médias d'un photographe à partir de l'identifiant du photographe
    mediasByPhotographerId = medias.getMediasByPhotographerId(idparam);

    console.log(">>> Medias by photographer id:");
    for (property in mediasByPhotographerId) {
        console.log(mediasByPhotographerId[property]);
    }
    */

    /*
     * Test
    // Récupération de tous les photographes ayant le même tag
    photographersByTag = photographers.getPhotographersByTag("travel");

    console.log(">>> Photographers by tag:");
    for (property in photographersByTag) {
        console.log(photographersByTag[property]);
    }
    */

    // debugger;

    /*
    * Test
    // Récupération de tous les médias ayant le même tag
    mediasByTag = medias.getMediasByTag("travel");

    console.log(">>> Medias by tag:");
    for (property in mediasByTag) {
        console.log(mediasByTag[property]);
    }
    */

    console.log('********************************** Affichage ***********************************');

    /*
     * Tests
    // Recherche d'un photographer à partir de son identifiant
    photographers.getPhotographerById(idParam);

    // Tri des médias d'un photographe par rapport au like de ces médias
    medias.orderPhotographerMediasByLikes(idParam);

    // Tri des médias d'un photographe par rapport au titre de ces médias
    medias.orderPhotographerMediasByName(idParam);

    // Tri des médias d'un photographe par rapport à la date de ces médias
    medias.orderPhotographerMediasByDate(idParam);
    */

    console.log('************************************ header ************************************');

    // Barre des tags
    var pg = photographers.getPhotographerById(idParam);

    var pgInfo = document.getElementById('info');

    var a = document.createElement("a");
    var img = document.createElement("img");

    a.title = pg.getP_name();
    img.src = "src/image/FishEyes_Photos/Sample_Photos/Photographers_ID_Photos/" + pg.getP_portrait();
    a.setAttribute('onClick', "onImageClick(" + '"' + img.src + '"' + ")");

    img.alt = pg.getP_portrait();
    img.width = "200";
    img.height = "200";
    a.appendChild(img);
    pgInfo.appendChild(a);

    var h2 = document.createElement("h2");
    h2.innerText = pg.getP_name();
    pgInfo.appendChild(h2);

    var location = document.createElement("h3");
    location.innerText = pg.getP_location();
    pgInfo.appendChild(location);

    var tagline = document.createElement("h3");
    tagline.innerText = pg.getP_tagline();
    pgInfo.appendChild(tagline);


    var navBar = document.getElementById('nav-bar')
    var tagsNav = document.createElement("ul");
    navBar.appendChild(tagsNav);

    // TODO : Utilser la fonction de filtrage par Tag quand on clique sur un tag

    /*
    <ul id="tags-nav">
        <li><a class="tag" href= "tag-portrait" id="portrait"><span>#portrait</span></a></li>
        ...
    */
    for (tag of pg.getP_tags()) {
      console.log(">>> tag: " + tag);

      var li = document.createElement("li");

      var a = document.createElement("a"); 

      /*
        <a href ="javascript:nomfonction()">Cliquez ici</a>

        var filteredList =  list.filter(function(value) {
            return tag == value;
        });

        var newArray = media.filter(function (l) {
            return l.price <= 100 &&
                l.likes >= 500 &&
                l.date >= 2019 &&
                l.tag >= "sport";
        });
      */

      a.title = tag;
      a.href = "javascript:filterByTag(" + tag + ")";
      a.innerText = "#" + tag;
      a.setAttribute("id", tag);

      li.appendChild(a);

      tagsNav.appendChild(li);
    }

    /*
     * https://www.w3schools.com/howto/howto_js_dropdown.asp
    <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
        <div id="myDropdown" class="dropdown-content">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
    </div>
    */

    // TODO : Utilser la fonction de tri par Title/Date/Likes quand on sélectionne un élément de la dropdown
 
    var dropdown = document.getElementById('dropdown');

    var btn = document.createElement("button");
    btn.innerText="Popularité";
    btn.addEventListener("click",myfunction);
    btn.setAttribute('class', "dropbtn");
    dropdown.appendChild(btn);

    var btn = document.createElement("button");
    btn.innerText="Engagez-moi";
    btn.addEventListener("click",myfunction);
    btn.setAttribute('class', "dropbtn");
    dropdown.appendChild(btn);

    var myDropdown = document.createElement('div');
    myDropdown.setAttribute('class', "dropdown-content");
    myDropdown.setAttribute('id', "myDropdown");
    dropdown.appendChild(myDropdown);

  
   // const sortCriteria = 
    var likesCriteria = document.createElement("a");
    likesCriteria.innerText = "Popularité";
    likesCriteria.href = "javascript:medias.orderPhotographerMediasByLikes(" + idParam + ")";
    likesCriteria.setAttribute('value', "likes");
    myDropdown.appendChild(likesCriteria);

    var dateCriteria = document.createElement("a");
    dateCriteria.innerText = "Date";
    dateCriteria.href = "#date";
    dateCriteria.setAttribute('value', "date");
    myDropdown.appendChild(dateCriteria);

    var nameCriteria = document.createElement("a");
    nameCriteria.innerText = "Titre";
    nameCriteria.href = "#title";
    nameCriteria.setAttribute('value', "title");
    myDropdown.appendChild(nameCriteria);
    
    var btn = document.createElement("button");
    btn.innerText="Contactez-moi";
    btn.addEventListener("click",myfunction);
    btn.setAttribute('class', "dropbtn");
    dropdown.appendChild(btn);

    console.log('************************************* Detail ***************************************');

    var pgmdList = medias.getMediasByPhotographerId(idParam); // Liste de tous les médias du photographe courant non triés
    displayMedia(pgmdList, pg.getP_name());
 
}

// var selected = document.getElementById("myDropdown").value;
// console.log(">>> Selected value: " + selvalue);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.click = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// TODO Mettre la partie Affichage dans une fonction

function displayMedia(pgmdList, p_name) {
    console.log('************************************* Detail ***************************************');

    // Selon le context pgmdList va contenir tous les médias non triés, tous les médias triés, ou uniquement les medias d'un tag

    var detail = document.getElementById('detail');

    // var pgmdList = medias.getMediasByPhotographerId(idParam); // Liste des médias du photographe courant

    for (pgmd in pgmdList) {
        md = mediaList[pgmd];

        console.log(">>> Article pg.GetP_name: " + p_name);
        console.log(">>> Article md.GetM_image: " + md.getM_image());
        console.log(">>> Article md.GetM_title: " + md.getM_title());
        console.log(">>> Article md.GetM_likes: " + md.getM_likes());

        var article = document.createElement("article");
        detail.appendChild(article);

        var a = document.createElement("a"); 
        a.title = md.getM_title();
        a.href = "diaporama.html?id=" + md.getM_id;

        // TODO : Utiliser onclick() pour le diapo

        const dirName = p_name.replace(" ", "_"); // Prenom_Nom photographe

        if (typeof md.getM_image() == 'undefined' && typeof md.getM_video() != 'undefined') {
            console.log("Le média est de type video");
            /*
            <video id="example_video_by_hand" class="video-js vjs-default-skin" controls width="640" height="264"
              poster="http://video-js.zencoder.com/oceans-clip.jpg" preload="auto" data-setup="{}">
                <source type="video/mp4" src="http://video-js.zencoder.com/oceans-clip.mp4">
            </video>
            */
    
            var video = document.createElement("video");
            video.setAttribute("id", "idPhoto");
            video.setAttribute("class", "video-js vjs-default-skin");
            video.setAttribute("width", "560");
            video.setAttribute("data-height", "400");
            video.setAttribute("controls", " ");
            video.setAttribute("poster", "src/image/logo/video-logo.jpg");
            video.setAttribute("preload", "auto");
            video.setAttribute("data-setup", "{}");

            var source = document.createElement("source");
            source.setAttribute("type", "video/mp4");
            source.setAttribute("src", "src/image/FishEyes_Photos/Sample_Photos/" + dirName + "/" + md.getM_video());
            
            video.appendChild(source);
            article.appendChild(video);

            if(video.muted) {
                video.muted = false;
            } else {
                video.muted = true;
                video.play()
            }
        } else {
            console.log("Le média est de type image");
            var img = document.createElement("img");       
            img.src = "src/image/FishEyes_Photos/Sample_Photos/" + dirName + "/" + md.getM_image();
            img.alt = md.getM_title();
            img.width = "320";
            img.height = "400";
            img.setAttribute("id", "image");
    
            a.appendChild(img);
            article.appendChild(a);
        }


        article.appendChild(document.createElement("br"));

        var title = document.createElement("span");
        title.innerText = "Title : " + md.getM_title();
        article.appendChild(title);

        var fill = document.createElement("span");
        fill.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        article.appendChild(fill);

        var likes = document.createElement("span");
        likes.innerText = "Likes : " + md.getM_likes();
        article.appendChild(likes);



    }
}

//  Effacez la section(article), puis créez une <media-card> pour chaque média (essai  à adapter)

/* Insérez un modèle vide, puis appelez render() essai
     
function connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="py-2">
            </div>
        `;
        this.appendChild(template.content);
        this.render();
    }

function render() {
        this.tags.forEach(tag => {
            this.querySelector("div").insertAdjacentHTML('beforeEnd',
            `<a class="tag" href="/tag-` + tag + `">
                <span class="sr-only">`
                    + tag +
                `</span>
                #` + tag +`</a>`);
        });
        this.activeCurrent();
    }
*/
