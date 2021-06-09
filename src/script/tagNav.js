
/**
 * A component with all the tags, displayed on the index and on the tag pages 
 */
 export class TagsNav extends HTMLElement {
    constructor() {
        super();
    }
 
    /**
     * Insert an template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <a class="tag" href="/tag-portrait">
                <span class="sr-only">Portrait</span>
                #portrait
            </a>
            <a class="tag" href="/tag-art">
                <span class="sr-only">Art</span>
                #art
            </a>
            <a class="tag" href="/tag-fashion">
                <span class="sr-only">Fashion</span>
                #fashion
            </a>
            <a class="tag" href="/tag-architecture">
                <span class="sr-only">Architectue</span>
                #architecture
            </a>
            <a class="tag" href="/tag-travel">
                <span class="sr-only">Travel</span>
                #travel
            </a>
            <a class="tag" href="/tag-sport">
                <span class="sr-only">Sport</span>
                #sport
            </a>
            <a class="tag" href="/tag-animals">
                <span class="sr-only">Animals</span>
                #animals
            </a>
            <a class="tag" href="/tag-events">
                <span class="sr-only">Events</span>
                #events
            </a>
        `;
        this.appendChild(template.content);
        this.activeCurrent();
    }

    /**
     * If the session is in a tag page, active the current tag
    */
         activeCurrent() {
            this.querySelectorAll(".tag").forEach(tag => {
                if (window.history.state.url.slice(5) == tag.href.split('tag-')[1]) {
                    tag.classList.add("current");
                    tag.href = "/";
                }
            });
        }
}




/*
const tagsList = document.querySelector('tag-nav');

fetch('data/FishEyeData.json') // demande de récuperation pour charger le fichier 
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

    // Traitement de l'array "photographers" --> Affiche de la fiche de chaque photographe
    var tags = document.createElement("tags"); 
    var photographersTags = document.getElementById('tagsList');
    

    var tagList = "";
    for (tag of itags) {
      console.log("tag: " + tag);
      tagList = tagList + " " + tag;
    }
    
    tags.innerHTML = tagsList;
    tag-nav.appendChild(tags);
    tag-nav.appendChild(document.createElement("br"));
    nav.appendChild(tag-nav);


    for (tag of pg.getP_tags()) {
        console.log(">>> tag: " + tag);
  
        var li = document.createElement("li");
        var nav = document.createElement("tag-nav");
        var a = document.createElement("a"); 
        var nav = document.createElement("nav");
  
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
        *
  
        a.title = tag;
        a.href = "javascript:filterByTag(" + tag + ")";
        a.innerText = "#" + tag;
        a.setAttribute("id", tag);
  
        li.appendChild(a);
  
        tag-nav.appendChild(li);
      }
  

};
*/

