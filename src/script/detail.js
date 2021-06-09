
const queryString = window.location.search;
console.log("queryString : " + queryString);
const urlParams = new URLSearchParams(queryString);
const idParam = urlParams.get("id");
console.log("id param : " + idParam);

fetch('data/FishEyeData.json')
.then(function (response) {
    return response.json();
})
.then(function(data) {
    mediaList = fetchData(data); // list contient un array d'objets media
})
.catch(function(err) {
    console.log('erreur : ' + err);
});


// Contient la liste des photographes sous forme d'array et qui sera utilisé dans l'objet Photographers
var photographerList = new Array;

class Photographers {
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

        for (property in photographerList) {
            // console.log(photographerList[property].p_tags);

            var tags = new Array;
            tags = photographerList[property].p_tags;

            for (tag of tags) {
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
        for (property in photographerList) {
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
        return this.p_price;
    }

    setP_price(p_price) {
        this.p_price = p_price;    
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

// Contient la liste des médias sous forme d'array et qui sera utilisé dans l'objet Medias
var mediaList = new Array;

// Objet Medias
class Medias {
    constructor() {
    }

    getMedias() {
        return this.mediaList;
    }

    setMedias(mediaList) {
        this.mediaList = mediaList;
    }

    // Permet d'obtenir tous les médias d'un photographe
    getMediasByPhotographerId(p_id) {
        var m_byPhotographerIdList = new Array;

        for (property in mediaList) {
            // console.log(mediaList[property]);

            if (p_id == mediaList[property].m_p_id) {
                m_byPhotographerIdList.push(mediaList[property]);
            }
        }

        return m_byPhotographerIdList;
    }

    // Permet d'obtenir un média à partir de son identifiant
    getMediaById(m_id) {
        var m_byMediaIdList = new Array;

        for (property in mediaList) {
            if (m_id == mediaList[property].m_id) {
                m_byMediaIdList.push(mediaList[property]);
            }
        }

        return m_byMediaIdList;
    }

    // Permet d'obtenir tous les médias ayant un tag identique
    getMediasByTag(m_tag) {
        var m_byTagList = new Array;

        for (property in mediaList) {
            // console.log(mediaList[property].m_tags);

            var tags = new Array;
            tags = mediaList[property].m_tags;

            for (tag of tags) {
                // console.log("tag: " + tag);

                if (m_tag == tag) {
                    m_byTagList.push(mediaList[property]);
                }
            }
        }

        return m_byTagList;
    }

    // Permet de trier les médias d'un photographe par rapport à ses likes
    orderPhotographerMediasByLikes(p_id) {
        var m_orderBy = new Array;
        var sortable = new Array;

        // console.log("likes before sort:");

        // On parcours la liste des médias
        for (property in mediaList) {
            // console.log(mediaList[property].m_p_id);

            media = mediaList[property];

            m_likes = media.m_likes;
            m_p_id = media.m_p_id;
            m_id = media.m_id;

            // On vérifie si le média appartient au photographe en question (paramètre de la fonction)
            if (p_id == m_p_id) {
                // console.log(m_likes);
                sortable.push({m_id, m_likes});
            }
        }

        sortable.sort(function(a, b) {
            if(a.m_likes < b.m_likes) return -1;
            if(a.m_likes > b.m_likes) return 1;
            return 0;
        })

        console.log(sortable.constructor.name);
        console.log(sortable.length);

        // console.log("likes after sort:");
        sortable.forEach(function(currentValue) {
            // console.log(currentValue.m_id);
            m_orderBy.push(medias.getMediaById(currentValue.m_id));
            // console.log(m_orderBy);
        });

        // On renvoi la liste des médias triée
        return m_orderBy;
    }

    // Permet de trier les médias d'un photographe par rapport à leurs titres
    orderPhotographerMediasByName(p_id) {
        var m_orderBy = new Array;
        var sortable = new Array;
    
        // console.log("title before sort:");
    
        // On parcours la liste des médias
        for (property in mediaList) {
            // console.log(mediaList[property].m_p_id);
    
            media = mediaList[property];
    
            m_title = media.m_title;
            m_p_id = media.m_p_id;
            m_id = media.m_id;
    
             // On vérifie si le média appartient au photographe en question (paramètre de la fonction)
            if (p_id == m_p_id) {
                // console.log(m_title);
                sortable.push({m_id, m_title});
            }
        }
    
        // On ne converti pas le titre par rapport au format (le nom des fichiers étant en anglas, pas de problème d'accents)
        sortable.sort(function(a, b) {
            if(a.m_title < b.m_title) return -1;
            if(a.m_title > b.m_title) return 1;
            return 0;
        })
    
        console.log(sortable.constructor.name);
        console.log(sortable.length);
    
        // console.log("title after sort:");
        sortable.forEach(function(currentValue) {
            // console.log(currentValue.m_id);
            m_orderBy.push(medias.getMediaById(currentValue.m_id));
            // console.log(m_orderBy);
        });
    
        // On renvoi la liste des médias triée
        return m_orderBy;
    }

       // Permet de trier les médias d'un photographe par rapport à leurs dates
       orderPhotographerMediasByDate(p_id) {
        var m_orderBy = new Array;
        var sortable = new Array;
    
        // console.log("date before sort:");
    
        // On parcours la liste des médias
        for (property in mediaList) {
            // console.log(mediaList[property].m_p_id);
    
            media = mediaList[property];
    
            // Aucun traitement sur le format de la date, il est du type YYYY-MM-DD qui peut être trié dans le bon ordre
            m_date = media.m_date;
            m_p_id = media.m_p_id;
            m_id = media.m_id;
    
             // On vérifie si le média appartient au photographe en question (paramètre de la fonction)
            if (p_id == m_p_id) {
                // console.log(m_date);
                sortable.push({m_id, m_date});
            }
        }
    
        sortable.sort(function(a, b) {
            if(a.m_date < b.m_date) return -1;
            if(a.m_date > b.m_date) return 1;
            return 0;
        })
    
        console.log(sortable.constructor.name);
        console.log(sortable.length);
    
        // console.log("date after sort:");
        sortable.forEach(function(currentValue) {
            // console.log(currentValue.m_id);
            m_orderBy.push(medias.getMediaById(currentValue.m_id));
            // console.log(m_orderBy);
        });
    
        // On renvoi la liste des médias triée
        return m_orderBy;
    }
}

var m_id;
var m_p_id;
var m_image;
var m_video;
var m_title;
var m_tags;
var m_likes;
var m_date;
var m_price;

// Objet Media
class Media {
    constructor(m_id, m_p_id, m_image, m_video, m_title, m_tags, m_likes, m_date, m_price) { // constructeur
        this.m_id = m_id;
        this.m_p_id = m_p_id;
        this.m_image = m_image;
        this.m_video = m_video;
        this.m_title = m_title;
        this.m_tags = m_tags;
        this.m_likes = m_likes;
        this.m_date = m_date;
        this.m_price = m_price;
    }

    getM_id() {
        return this.m_id;
    }

    setM_id(m_id) {
        this.m_id = m_id;    
    }

    getM_p_id() {
        return this.m_m_id;
    }

    setM_p_id(m_p_id) {
        this.m_p_id = m_p_id;    
    }

    getM_image() {
        return this.m_image;
    }

    setM_image(m_image) {
        this.m_image = m_image;    
    }

    getM_video() {
        return this.m_video;
    }

    setM_video(m_video) {
        this.m_video = m_video;    
    }

    getM_title() {
        return this.m_title;
    }

    setM_title(m_title) {
        this.m_title = m_title;    
    }

    getM_tags() {
        return this.tags_id;
    }

    setM_tags(m_tags) {
        this.m_tags = m_tags;    
    }

    getM_likes() {
        return this.m_likes;
    }

    setM_likes(m_likes) {
        this.m_likes = m_likes;    
    }

    getM_date() {
        return this.m_date;
    }

    setM_date(m_date) {
        this.m_date = m_date;    
    }

    getM_price() {
        return this.m_price;
    }

    setM_price(m_price) {
        this.m_price = m_price;    
    }
}

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

        // On récupère les attributs de chaque photographe
        p_id = p.id;
        p_name = p.name;
        p_price = p.price;
        p_tagline = p.tagline;
        p_location = p.city + ", " + p.country;
        p_portrait = p.portrait;

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

        // Création de l'instance Photographer
        photographer = new Photographer(p_id, p_name, p_price, p_tags, p_tagline ,p_location, p_portrait);

        /*
        console.log('p_id: ' + photographer.getP_id());
        console.log('p_name: ' + photographer.getP_name());
        console.log('p_price: ' + photographer.getP_price());
        console.log('p_tagline: ' + photographer.getP_tagline());
        console.log('p_location: ' + photographer.getP_location());
        console.log('p_portrait: ' + photographer.getP_portrait());
        for (tag in photographer.getP_tags()) {
            console.log('p_tag: ' + tag);
        }
        */

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

    console.log('*********************************** Medias *************************************');

    // Liste des médias au format JSON
    var mediaData = data.media;

    // Nombre de médias
    count = Object.keys(mediaData).length;
    console.log("Number of media: " + count);

    // Instanciation de Medias
    medias = new Medias();

    // On parcours les entrées medias du JSON
    for (let i = 0; i < count; i++) {
        // console.log('i : ' + i);

        var m = mediaData[i];

        // On récupère les attributs de chaque média
        m_id = m.id;
        m_p_id = m.photographerId;

        // Hack : à faire plus proprement
        if (typeof m.image == 'undefined' && typeof m.video != 'undefined') {
            // console.log("Le média est de type video");
            m_video = m.video;
            m_image = undefined;
            m_title =m_video.replace(".mp4", "");
        } else {
            // console.log("Le média est de type image");
            m_image = m.image;
            m_video = undefined;
            m_title = m_image.replace(".jpg", "");
        }
        m_title = m_title.replaceAll("_", " ");

        m_likes = m.likes;
        m_date = m.date;
        m_price = m.price;

        /*
        console.log("m_id: " + m_id);
        console.log("m_p_id: " + m_p_id);
        console.log("m_image: " + m_image);
        console.log("m_likes: " + m_likes);
        console.log("m_date: " + m_date);
        console.log("m_price: " + m_price);
        */

        // Un média peut avoir plusiseurs tags, ils sont stockés dans un tableau
        m_tags = [];
        for (tag of m.tags) {
            // console.log("m_tag: " + tag);
            m_tags.push(tag);
        }

        // Création de l'instance media
        media = new Media(m_id, m_p_id, m_image, m_video, m_title, m_tags, m_likes, m_date, m_price);

        /*
        console.log('m_id: ' + media.getM_id());
        console.log('m_p_id: ' + media.getM_p_id());
        console.log('m_image: ' + media.getM_image());
        console.log('m_video: ' + media.getM_video());
        console.log('m_likes: ' + media.getM_likes());
        console.log('m_date: ' + media.getM_date());
        console.log('m_price: ' + media.getM_price());
        for (tag in media.getM_tags()) {
            console.log('p_tag : ' + tag);
        }
        */

        /*
        for (property in media) {
            console.log(media[property]);    
        }
        */

        // console.log(media.constructor.name);

        // Ajout du média dans la liste des médias
        mediaList.push(media);
    }

    // Mise à jour de l'instance Medias avec le liste des média
    medias.setMedias(mediaList);

    // console.log(medias.constructor.name);

    // Affichage des photographes de l'objet Photographers
    console.log("List of medias from Medias object:");
    for (property in medias) {
        console.log(medias[property]);
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
    btn.setAttribute('onClick', "myFunction()");
    btn.setAttribute('class', "dropbtn");
    dropdown.appendChild(btn);

    var btn = document.createElement("button");
    btn.innerText="Engagez-moi";
    btn.setAttribute('onClick', "myFunction()");
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
    btn.setAttribute('onClick', "myFunction()");
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
window.onclick = function(event) {
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

/*  Effacez la section(article), puis créez une <media-card> pour chaque média (essai  à adapter)
*/
/* Insérez un modèle vide, puis appelez render() essai
     */
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

 