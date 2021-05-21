fetch("js/FishEyeData.json")//essais
    .then(res => res.json())
    .then(jsonData => {
        console.log(jsonData)
        const photographers = jsonData.photographers
        jsonData.photographers.forEach(photographer => {
            const photographersName = document.createElement("article")
            photographersName.innerText = photographer.name
            document.getElementById("photographersProfile").appendChild(photographersName)
            const photographersPortrait = document.createElement("img")
            photographersPortrait.src = "/images/Photographers ID photos/photographer.portrait"
            document.getElementById("photographersProfile").appendChild(photographersPortrait)
            const photographersCity = document.createElement("article")
            photographersCity.innerText = photographer.city
            document.getElementById("photographersProfile").appendChild(photographersCity)
        })
    });