//Select the img
const elContainer = document.getElementById ("elContainer");
console.log(elContainer);


//immagine attiva al momento
let ActiveImg = 0;

//Select tasto Nextf
const next = document.getElementById("next");
console.log(next);

//select tasto previous
const previous = document.getElementById("previous");
console.log(previous);

const images = [
    {
        image: '01.webp',
        title: "Marvel\\'s Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }
    , {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];


//Creazione Ciclo forEach
images.forEach((info) => {
    console.log(info.image + info.title + info.text);
        
    elContainer.innerHTML += 
        `<div> 
            <div class="img-container"> <img src="${info.image}"> </div>
            <div class="decription">
                <h1>${info.title}</h1>
                <div>${info.text}</div>
            </div>
        </div>`;
    }
);

//creo active al tasto next
next.addEventListener('click',
    function(){

        if(ActiveImg < (images.length = 0)) {

            img[ActiveImg].classList.remove("active");
            img[ActiveImg].classList.add("inactive");
            console.log("ciao");
    
            //Cambia immagine passare a imm successiva
            ActiveImg = ActiveImg + 1;
    
            //immagini successive cosa fa
            img[ActiveImg].classList.remove("inactive");
            img[ActiveImg].classList.add("active");
        }
    }
)


