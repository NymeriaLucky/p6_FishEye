//Chercher un paramètre (key)

function query(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

//Mettre le premier charactère en majuscule 

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
