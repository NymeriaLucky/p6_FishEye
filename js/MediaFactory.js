/*Factory...si le média est de type image crée une image, sinon crée une vidéo 
(pour le son dans ce cas ajouter une conditions cad else if)*/

class MediaFactory {
  build(data) {
    if (data.hasOwnProperty("image")) {
      data.src = data.image;

      return new Image(data);
    } else {
      data.src = data.video;

      return new Video(data);
    }
  }
}


