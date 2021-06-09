
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
    var photographers = data.photographers;

    // Traitement de l'array "media" (à déplacer)
    // var medias = data.media;

    // var photographersTagsBox = document.getElementById('tagsbox');
    var listPhotograph = document.getElementById('list'); // mes instructions sur les données
      
    var photographerCard = document.createElement("photographer-card");

    for (photographer of photographers) {
    // for (var i = 0; i < photographers.length; i++) {
        // var photographer = photographers[i];
  
        /* {
            "name": "Mimi Keel",
            "id": 243,
            "city": "London",
            "country": "UK",
            "tags": ["portrait", "events", "travel", "animals"],
            "tagline": "Voir le beau dans le quotidien",
            "price": 400,
            "portrait": "MimiKeel.jpg"
          },
        */
  
        /*
          <article>
            <photographer-card id ="930">
              <a href="detail.html?id=930">Détail id</a>
              <img src="portrait">
              <h2>name</h2>
              <localisation>country</localisation>
              <localisation>city</localisation>
              <slogan>tagline</slogan>
              <price>price €</price>
              <tags>tags</tags>
              <div id= "diaporama">
                <script src= "diaporama.js">
                  <video>video</video>
                </script>
              </div>
            </photographer-card>
          </article>
        */
        var article = document.createElement("article");
        var h5 = document.createElement("h5"); //  city, country
        var img = document.createElement("img"); // portrait
        var a = document.createElement("a"); // lien vers détail id
        var h2 = document.createElement("h2"); // name
        var blockquote = document.createElement("blockquote"); // slogan
        var slogan = document.createElement("slogan"); // tagline
        var iprice = document.createElement("price");
        var tags = document.createElement("tags"); // tableau tags
        var diaporama = document.createElement("diaporama");
        var scriptDiapo = document.createElement("script");
        var video = document.createElement("video");
        
        var city= photographer.city;
        var name = photographer.name;
        var id = photographer.id;
        var country= photographer.country;
        var itags = photographer.tags; // Attention c'est un tableau
        var tagline = photographer.tagline;
        var price = photographer.price;
        var portrait = photographer.portrait;
   
        h2.innerText = name;
        article.appendChild(h2);
        // a.appendChild(h2);
        // article.appendChild(document.createElement("br"));
        
        a.title = name;
        // a.innerHTML = "Fiche détaillée";
        a.href = "detail.html?id=" + id;
        // a.setAttribute('href', "detail.html?id=" + id);
        // article.appendChild(a);

        /*
        <a href="https://www.example.com">
            <img alt="image" src="image.jpg" width=200" height="200">
        </a>
        */

        img.src = "src/image/FishEyes_Photos/Sample_Photos/Photographers_ID_Photos/" + portrait;
        img.alt = portrait;
        img.width = "200";
        img.height = "200";
        a.appendChild(img);
        article.appendChild(a);

        h5.innerText = city + ", " + country;
        article.appendChild(h5);      
       
        blockquote.innerText = tagline;
        //slogan.innerText = tagline;
        article.appendChild(blockquote);
        article.appendChild(document.createElement("br"));

        iprice.innerText = price + " €/jour";
        article.appendChild(iprice);
        article.appendChild(document.createElement("br"));


        var tagList = "";
        for (tag of itags) {
          console.log("tag: " + tag);
          tagList = tagList + " " + tag;
        }
        
        tags.innerText = tagList;
        article.appendChild(tags);
        article.appendChild(document.createElement("br"));

        article.appendChild(document.createElement("br"));

        // article.appendChild(photographerCard);
        listPhotograph.appendChild(article);
    }

}
