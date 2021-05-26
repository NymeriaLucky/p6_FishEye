
const queryString = window.location.search;
console.log("queryString : " + queryString);
const urlParams = new URLSearchParams(queryString);
const idparam = urlParams.get("id");
console.log("id param : " + idparam);

fetch('data/FishEyeData.json') // demande de récuperation pour charger le fichier question
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

    var photographers = data.photographers;

    var nameFound = "";

    for (photographer of photographers) {
        var idphoto = photographer.id;

        console.log('idphoto : ' + idphoto);

        if (idphoto == idparam) {
            nameFound = photographer.name;

            console.log('found : ' + idparam);
        }
    }


    var medias = data.media;

    var found = false;

    for (media of medias) {
        var idphoto = media.photographerId;

        console.log('XXX idparam : ' + idparam);
        console.log('XXX idphoto : ' + idphoto);

        if (idphoto == idparam) {
            console.log("Photographer " + nameFound + " found with id : " + idparam);
            found = true;
 
            /*
                {
                  "id": 73852953,
                  "photographerId": 925,
                  "image": "Sport_2000_with_8.jpg",
                  "tags": ["sport"],
                  "likes": 52,
                  "date": "2013-02-30",
                  "price": 70
                },
            */

            var detail = document.getElementById('detail');
      
            var dirName = nameFound.replace(" ", "_"); // Prenom_Nom photographe

            // var image = media.image;
            // console.log("File name : " + image);
            // var imgLength = image.length;
            // var fileExt = image.substring(imgLength-3, imgLength);
            // console.log("fileExt : " + fileExt);

            Object.keys(media).forEach(function(key) {
                console.log("media key : " + key);

                if (key == "image") {
                    var image = media.image;
                    console.log("Image file : " + image);

                    var img = document.createElement("img");       
                    img.src = "FishEyes_Photos/Sample_Photos/" + dirName + "/" + image;
                    img.alt = image;
                    img.width = "200";
                    img.height = "200";
                    detail.appendChild(img);

                } else if (key == "video") {
                    /*
                    <video id="example_video_by_hand" class="video-js vjs-default-skin" controls width="640" height="264"
                           poster="http://video-js.zencoder.com/oceans-clip.jpg" preload="auto" data-setup="{}">
                        <source type="video/mp4" src="http://video-js.zencoder.com/oceans-clip.mp4">
                    </video>
                    */

                    var ivideo = media.video;
                    console.log("Video file : " + ivideo + " (" + key + ")");

                    var video = document.createElement("video");
                    video.setAttribute("id", idphoto);
                    video.setAttribute("class", "video-js vjs-default-skin");
                    video.setAttribute("width", "560");
                    video.setAttribute("data-height", "400");
                    video.setAttribute("controls", " ");
                    video.setAttribute("poster", "FishEyes_Photos/video-logo.jpg");
                    video.setAttribute("preload", "auto");
                    video.setAttribute("data-setup", "{}");
                    
                    var source = document.createElement("source");
                    source.setAttribute("type", "video/mp4");
                    source.setAttribute("src", "FishEyes_Photos/Sample_Photos/" + dirName + "/" + ivideo);
                    
                    video.appendChild(source);
                    detail.appendChild(video);
                }
            });


            var tags = document.createElement("tags"); // tableau tags
            var itags = media.tags; // Attention c'est un tableau
            var tagList = "Tags : ";
            for (tag of itags) {
              console.log("tag: " + tag);
              tagList = tagList + " " + tag;
            }
            tags.innerText = tagList;
            detail.appendChild(tags);
            detail.appendChild(document.createElement("br"));

            var likes = document.createElement("likes");
            var ilikes = media.likes;
            likes.innerText = "Likes : " + ilikes;
            detail.appendChild(likes);
            detail.appendChild(document.createElement("br"));

            var date = document.createElement("date");
            var idate = media.date;
            date.innerText = "Date : " + idate;
            detail.appendChild(date);
            detail.appendChild(document.createElement("br"));

            var price = document.createElement("price");
            var iprice = media.price;
            price.innerText = "Prix : " + iprice + " €";
            detail.appendChild(price);
            detail.appendChild(document.createElement("br"));

            detail.appendChild(document.createElement("br"));
        }

    }

    if (!found) {
        console.log("No photographer found with id : " + idparam);

        var detail = document.getElementById('detail');

        var noMedia = document.createElement("noMedia");

        detail.innerText = "Pas de données détaillées";
        detail.appendChild(noMedia);
        detail.appendChild(document.createElement("br"));
    }

}