const nome = document.getElementById('nome'); 
const texto = document.querySelector('#texto'); 
const img = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#btn') 


elementoBtn.addEventListener('click', () =>{
  
    if(elementoBtn.value == 'all'){
        
        img.src = './assets/media/01.png' 
        nome.innerText = 'Wretch'
        texto.innerText = `A poor, purposeless sod, naked as the day they were born.`
        elementoBtn.value = 'segundo' 

    } else if(elementoBtn.value == 'segundo') { 

        img.src = './assets/media/02.png' 
        nome.innerText = 'Samurai' 
        texto.innerText = 'A capable fighter from the distant Land of Reeds.'
        elementoBtn.value = 'terceiro' 

    } else if(elementoBtn.value == 'terceiro') { 

        img.src = './assets/media/03.png' 
        nome.innerText = 'Astrologer' 
        texto.innerText = 'A scholar who reads fate in the stars.\nHeir to the school of glintstone sorcery.'
        elementoBtn.value = 'quarto' 

    } else if(elementoBtn.value == 'quarto') { 

        img.src = './assets/media/04.png' 
        nome.innerText = 'Bandit' 
        texto.innerText = 'Heir to the school of glintstone sorcery.\nExcels at ranged combat with bows.'
        elementoBtn.value = 'quinto' 

    } else if(elementoBtn.value == 'quinto') { 

        img.src = './assets/media/05.png' 
        nome.innerText = 'Confessor' 
        texto.innerText = 'A church spy adept at covert operations.\nEqually adept with a sword as they are with their incantations.'
        elementoBtn.value = 'sexto' 

    } else if(elementoBtn.value == 'sexto') { 
        
        img.src = './assets/media/06.png' 
        nome.innerText = 'Hero' 
        texto.innerText = 'A stalwart hero, at home with a battleaxe, descended from a badlands chieftain.'
        elementoBtn.value = 'setimo' 

    } else if(elementoBtn.value == 'setimo') { 

        img.src = './assets/media/07.png' 
        nome.innerText = 'Prophet' 
        texto.innerText = 'A seer ostracized for inauspicious prophecies.\nWell-versed in healing incantations.'
        elementoBtn.value = 'oitavo' 

    } else if(elementoBtn.value == 'oitavo') { 

        img.src = './assets/media/08.png' 
        nome.innerText = 'Warrior' 
        texto.innerText = 'A nomad warrior who fights wielding two blades at once.\nAn origin of exceptional technique.'
        elementoBtn.value = 'nono' 

    } else if(elementoBtn.value == 'nono') { 

        img.src = './assets/media/09.png' 
        nome.innerText = 'Vagabond' 
        texto.innerText = 'A knight exiled from their homeland to wander.\nA solid, armor-clad origin.'
        elementoBtn.value = 'decimo' 

    } else if(elementoBtn.value == 'decimo') { 

        img.src = './assets/media/10.png' 
        nome.innerText = 'Prisoner' 
        texto.innerText = 'A prisoner bound in an iron mask.\nStudied in glinstone sorcery, having lived among the elite prior to sentencing.'
        elementoBtn.value = 'primeiro' 

    } else { 

        img.src = './assets/media/all.png' 
        nome.innerText = 'Choose your class' 
        texto.innerText = ``;
        elementoBtn.value = 'all' 
        img.setAttribute('id', 'imgR');

    }
})