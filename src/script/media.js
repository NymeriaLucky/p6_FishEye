// Objet Media
class Media {//media-card
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
    this.log = function(){
    var media = new Media();
    console.log(media+""+"this.m_id" - "this.m_p_id" -"this.m_image" -"this.m_video" - "this.m_title"
   - "this.m_tags" - "this.m_likes" - "this.m_date" - "this.m_price"); 
}
    this.display=function( {
    var media = new Media();
    return"<div class='media-card'>"+media+" "this.m_id"+"this.m_p_id"<img src='"+this.m_image"'><video controls poster='"+this.m_video"'>
    </div>";
     }
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
}