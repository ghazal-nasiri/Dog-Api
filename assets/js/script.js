const button = document.querySelector("button");
const dogImage = document.querySelector("img");
const loading = document.querySelector(".loading");
const sizes = document.querySelector(".sizes");
const boxModel = document.querySelector(".box-model");
const containerBoxModel = document.querySelector(".container-box-model");





// resizing the dog image
sizes.addEventListener("click", (e) => {
    const classNam = e.target.className;
    switch (classNam) {
        case "small":
            dogImage.style.width = "300px";
            dogImage.style.height = "200px";
            break;
        case "medium":
            dogImage.style.width = "400px";
            dogImage.style.height = "300px";
            break;
        case "large":
            dogImage.style.width = "500px";
            dogImage.style.height = "400px";
            break;
        case "x-large":
            dogImage.style.width = "600px";
            dogImage.style.height = "500px";
            break;
    }
})

// Get src from localStorage and then display the image
window.addEventListener("load", () => {
    dogImage.src = localStorage.getItem("dogImg");
})



const url = 'https://dog.ceo/api/breeds/image/random';

const randomDogPhoto = (json) => {
    let photo = json.message;
    localStorage.setItem("dogImg", photo)
    dogImage.src = photo;
    dogImage.onload = () => {
        loading.style.display = "none";
    }
}

const getRandomDog = async () => {
    try {
        loading.style.display = "flex";
        const response = await fetch(url);
        const json = await response.json();
        return randomDogPhoto(json);
    }
    catch (e) {
        console.log(e);
        loading.style.display = "none";
        containerBoxModel.classList.add("open");
        boxModel.classList.add("open");

    }

}

button.addEventListener("click", getRandomDog);


containerBoxModel.addEventListener("click", () => {
    containerBoxModel.classList.remove("open");
    boxModel.classList.remove("open");
})
