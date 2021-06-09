/* fonction appellante*/
 const images = []
  for (key in mediaSorted) {
    const shorterImage = mediaSorted[key]
    const imageMedia = new ImageMedia(
      shorterImage.name,
      shorterImage.id,
      shorterImage.photographerId,
      shorterImage.image,
      shorterImage.tags,
      shorterImage.likes,
      shorterImage.date,
      shorterImage.price
    )
    if (shorterImage.image !== undefined) {
      images.push(imageMedia)
    }

    imageMedia.createHTML()
  }
  console.log("shorter.image =", shorter.image)

 // Là c'est ma fonction appellante
loadContent().then((data) => {
  /**
   * @param {URLSearchParams} (window.location.search) fetch => ?id={number}
   * @param {URLSearchParams.get()} params.get('id') => isole l'ID de l'URL
   * @param {filter()} compare si ID = URL
   */

  const toSort = data.media
  const params = new URLSearchParams(window.location.search)
  const sortedData = toSort.filter(newArray => newArray.photographerId == (params.get('id')))
  console.log('tableau filtré :', sortedData);

  const peopleToSort = data.photographers
  const resultPhotographe = peopleToSort.filter(toTarget => toTarget.id == (params.get('id')))
  const sortPhoto = document.getElementById('sort-photo')
  console.log(resultPhotographe)

  sortPhoto.addEventListener('change', () => {
    if (sortPhoto.value == 'trend') { // POPULARITE
      return creatCard(sortedData.sort((a, b) => b.likes - a.likes))
    } else if (sortPhoto.value == 'date') { // DATE
      creatCard(sortedData.sort(function (a, b) {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA - dateB
      }))
    } else if (sortPhoto.value == 'title') { // TITRE
      creatCard(sortedData.sort(function (a, b) {
        const titleA = a.name.toLowerCase()
        const titleB = b.name.toLowerCase()
        if (titleA < titleB) return -1
        if (titleA > titleB) return 1
        return dateA - dateB
      }))
    }
  })

  const mediaphto = new ImageMedia(sortedData.name, sortedData.id, sortedData.photographerId, sortedData.image, sortedData.tags, sortedData.likes, sortedData.date, sortedData.price)

  mediaphto.createHTML()

  console.log('TEST', mediaphto)
}
//Et mon objet :
class ImageMedia {
  /**
       *
       * @param name
       * @param id
       * @param photographerId
       * @param image
       * @param tags
       * @param likes
       * @param date
       * @param price
       */

  constructor (name, id, photographerId, image, tags, likes, date, price) {
    this.name = name
    this.id = id
    this.photographerId = photographerId
    this.image = image
    this.tags = tags
    this.likes = likes
    this.date = date
    this.price = price
    console.log(this.image);
  }

  createHTML () {
    document.getElementById('picture-photographer').innerHTML = `
    <div class="picture-photographer_presentation">
      <div class="wrapper">
      <img class="img-page" src="/img/${this.image}" alt="">
      </div>
      <div class="text-presentation">
        <p>${this.name}</p>
        <div class="price-and-count">
            <p>${this.price}€</p>
            <p class="paddeur">${this.likes} ❤</p>
        </div>
    </div>
</div>
      `
  }
}
/*sortedData est un tableau filtré avec filter()
qui correspond à l'ID de la page du photographe*/

