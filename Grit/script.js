// definovanie premmených 
const container = document.getElementById('container');
let rozmer = 16;
let duha = false;


//vytvorenie siete (creating the grit)

function vytvorSiet(rozmer) {
    container.style.setProperty('--grid-rows', rozmer);
    container.style.setProperty('--grid-cols', rozmer);
    for (let i = 0; i < rozmer * rozmer; i++) {    
        let bunka = document.createElement('div');
        container.appendChild(bunka).className = 'kocka'
    };
};


vytvorSiet(rozmer);


//zmena farby po prejdení myšou (changing color after hower)

function zmenaNaDuhu () {
    duha = true
};



function BasicColor () {
    target.setAttribute('id', 'zelena')
}

function rainbowColor () {
    let randR = Math.floor(Math.random() * 255) + 1;
    let randG = Math.floor(Math.random() * 255) + 1;
    let randB = Math.floor(Math.random() * 255) + 1;
    target.style.backgroundColor = "rgb(" + randR + ", " + randG + ", " + randB + ")";
}

container.addEventListener("mouseover", function (zle) {
    target = zle.target;

    if (target.matches("div.kocka") && duha == false ) {
        BasicColor(target);
    } else if(target.matches("div.kocka") && duha == true) {
        rainbowColor(target);
    }
});


//vrátenie do pôvodnej podoby (back to original form)

const reset = document.querySelector('#Resetbutton');
reset.addEventListener('click', function(){
    window.location.reload();
});


//zmena rozmeru (changing the size)

const zmenaVelkosti =  document.getElementById('zmena');


function inyRozmer(){

    let ziadost = prompt('What size should grit have? Number from 5 to 64', 16);
    if (isNaN(ziadost)==false && ziadost >= 5 && ziadost <= 64){
        vytvorSiet(ziadost); 
         } else {
            alert('Usupported character')
            return  
};
}



