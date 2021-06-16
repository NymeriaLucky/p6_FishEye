

 //Un composant TagsNav avec toutes les balises, affiché sur l'index et sur les pages de balises
 
 class TagsNav extends HTMLElement {
    constructor() {
        super();
    }
    
    //  Insérer un modèle   
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
                <span class="sr-only">Architecture</span>
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
    
 //    Si la session est dans une page de balise, activez la balise actuelle

         activeCurrent() {
            this.querySelectorAll(".tag").forEach(tag => {
                if (window.history.state.url.slice(5) == tag.href.split('tag-')[1]) {
                    tag.classList.add("current");
                    tag.href = "/";
                }
            });
        }
}

const tagsList = document.querySelector('tags');


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
    Tags-nav.appendChild(tags);
    Tags-nav.appendChild(document.createElement("br"));
    nav.appendChild(Tags-nav);


    for (tag of pg.getP_tags()) {
        console.log(">>> tag: " + tag);
  
        var li = document.createElement("li");
        var TagsNav = document.createElement("Tags-nav");//emplacement ou vont les tags
        var a = document.createElement("a"); 
        var nav = document.createElement("nav");
        var tags = document.createElement("tags");//tableau tags
        
       TagsNav.innerHTML = tagsList;
       nav.appendChild(TagsNav)
       li = tag;
       li.appendChild(tag);
      
        a.href = "src/detail.html?id=" + id; 
       console.log(TagsNav);
        };
        /* pour filter :
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
         
        a.title = tag;
        a.href = "javascript:filterByTag(" + tag + ")";
        a.innerText = "#" + tag;
        a.setAttribute("id", tag);
  
        li.appendChild(a);
  
        Tags-nav.appendChild(li);
        console.log(TagsNav);
      }
  
    };*/
