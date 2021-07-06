//Pour chercher les données de la page d'accueil dans le json

fetch("js/FishEyeData.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    let list = new List();
    for (let i = 0; i < json.photographers.length; i++) {
      let photographe = new Photographer(json.photographers[i]);
      list.add(photographe);
    }

    list.displayTags();

    list.listenForFiltering();
    list.displayPhotographers(list.all);

    if (query("tag")) {
      list.filter(query("tag"));
    }
  });
