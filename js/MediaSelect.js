//Liste des photographes pour la page d'acceuil

class List {
  constructor() {
    this.all = [];
    this.activeTags = [];
  }
  add(photographer) {
    this.all.push(photographer);
  }

  //Html tous les photographes page accueil proviennent de photographer
  displayPhotographers(photographes) {
    let html = "";

    for (let i = 0; i < photographes.length; i++) {
      let photographe = new Photographer(photographes[i]);
      html += photographe.render();
    }
    document.querySelector("main").innerHTML = html;
  }

  //Insertion dans html des tags du header
  displayTags() {
    let html = "";
    this.getAllTags().forEach((tag) => {
      html += `<a href="#" tabindex="10" class="tag tag-filter" id="${tag}">#${tag}</a>`;
    });
    document.getElementById("tags").innerHTML = html;
  }

  //Recherche tous les tags photographes pour les mettre dans la nav du header ("set" évite les doublons)
  getAllTags() {
    let list = new Set();
    this.all.forEach((photographe) => {
      photographe.tags.forEach((tag) => {
        list.add(tag);
      });
    });

    return list;
  }

  //Filtre sur les tags
  listenForFiltering() {
    let filters = document.querySelectorAll(".tag-filter");
    for (let i = 0; i < filters.length; i++) {
      let filter = filters[i];
      filter.addEventListener("click", (evt) => {
        let tag = evt.target.getAttribute("id");

        this.filter(tag);
      });
    }
  }

  filter(tag) {
    if (this.activeTags.includes(tag)) {
      this.activeTags = this.activeTags.filter((item) => item !== tag);
      document.getElementById(tag).classList.remove("tag-actif");
    } else {
      this.activeTags.push(tag);
      document.getElementById(tag).classList.add("tag-actif");
    }

    this.filtered = this.all.filter((photographe) => {
      let selected = false;
      this.activeTags.forEach((tag) => {
        if (photographe.tags.includes(tag)) {
          selected = true;
        }
      });

      return selected;
    });

    this.hideAll();
    if (this.activeTags.length === 0) {
      this.displayPhotographers(this.all);
    } else {
      this.displayPhotographers(this.filtered);
    }
  }

  hideAll() {
    document.querySelector("main").innerHTML = "";
  }
}
