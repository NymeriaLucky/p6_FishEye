//données de chaque photographe

class Photographer {
  constructor(data) {
    this.name = data.name;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.tags = data.tags;
    this.portrait = data.portrait;
    this.id = data.id;
  }
  render() {
    let tagHtml = "";
    for (let i = 0; i < this.tags.length; i++) {
      let tag = this.tags[i];
      // tags sous chaque photographe de la page principale
      tagHtml += `<span tabindex="11" class="tag-photographe">#${tag}</span>`;

    }

  /*pour afficher le photograph sur la page photographer-page*/
    return `
       <a tabindex="12" href="photographer-page.html?id=${this.id}" class="linkPhotographer">
        <div class="photoIdentite"><img src="medias/photographersIDPhotosb/${this.portrait}" alt="lien vers la page de ${this.name}"></div>
        <h2 class="identite">${this.name}</h2>
        <p class="lieu">${this.city}, ${this.country}</p>
        <p class="tagline">${this.tagline} </p>
        <p  class="prix">${this.price}€/jour</p>
        <div class="tags">${tagHtml}</div>
      </a>`;
  }

  //récupération des tags du photographe (page photographe)
  displayTags() {
    let html = "";

    // Tag de la page détail
    this.tags.forEach((tag) => {
      html += `<a tabindex="10" href="index.html?tag=${tag}" class="tag-photographe" id="${tag}">#${tag}</a>`;
    });

    document.getElementById("tagProfil").innerHTML = html;
  }

  //profil du photographe (page photographe)
  displayProfil() {
    document.getElementById("nameProfil").innerHTML = `${this.name}`;
    document.getElementById(
      "locationProfil"
    ).innerHTML = `<h2>${this.city}, ${this.country}</h2>`;
    document.getElementById("taglineProfil").innerHTML = this.tagline;

    document.getElementById(
      "photoProfil"
    ).innerHTML = `<img src="medias/photographersIDPhotosb/${this.portrait}" alt="photo de profil de ${this.name}">`;
    document.getElementById("form-title-name").innerHTML = this.name;
    document.getElementById("scrollPrice").innerHTML = `${this.price}€/jour`;
    this.displayTags();
  }
}

  

