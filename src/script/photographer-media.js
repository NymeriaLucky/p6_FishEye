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

        for (property of mediaList) {
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

        for (property of mediaList) {
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
        for (property of mediaList) {
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
        for (property of mediaList) {
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
        for (property of mediaList) {
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