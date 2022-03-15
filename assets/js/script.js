const nome = document.getElementById('nome'); 
const texto = document.querySelector('#texto'); 
const img = document.querySelector('#imagem');
const atributes = document.querySelector('.attributes');
let elementoBtn = document.querySelector('#btn'); 
const atributesVigor = document.querySelector('#vigor');
const atributesDexterity = document.querySelector('#dexterity');
const atributesMind = document.querySelector('#mind');
const atributesIntelligence = document.querySelector('#intelligence');
const atributesEndurance = document.querySelector('#endurance');
const atributesFaith = document.querySelector('#faith');
const atributesStrength = document.querySelector('#strength');
const atributesArcane = document.querySelector('#arcane');
const controlDisplay = document.querySelector('#control_display');


elementoBtn.addEventListener('click', () =>{
  
    if(elementoBtn.value == 'all'){
        
        img.src = './assets/media/01.png';

        nome.textContent = 'Wretch';
        controlDisplay.style.display = 'flex';
        texto.innerText = `A poor, purposeless sod, naked as the day they were born.`;
        atributes.textContent = `Atributes`;
        atributesVigor.textContent = 'Vigor: 10';
        atributesDexterity.textContent = 'Desterity: 10';
        atributesMind.textContent = 'Mind: 10';
        atributesIntelligence.textContent = 'Intelligence: 10';
        atributesEndurance.textContent = 'Endurance: 10';
        atributesFaith.textContent = 'Faith: 10';
        atributesStrength.textContent = 'Strength: 10';
        atributesArcane.textContent = 'Arcane: 10';

        elementoBtn.value = 'segundo';

    } else if(elementoBtn.value == 'segundo') { 

        img.src = './assets/media/02.png' 
        nome.innerText = 'Samurai' 
        texto.innerText = 'A capable fighter from the distant Land of Reeds.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 12';
        atributesDexterity.textContent = 'Desterity: 15';
        atributesMind.textContent = 'Mind: 14';
        atributesIntelligence.textContent = 'Intelligence: 7';
        atributesEndurance.textContent = 'Endurance: 8';
        atributesFaith.textContent = 'Faith: 16';
        atributesStrength.textContent = 'Strength: 11';
        atributesArcane.textContent = 'Arcane: 10';
        elementoBtn.value = 'terceiro' 

    } else if(elementoBtn.value == 'terceiro') { 

        img.src = './assets/media/03.png' 
        nome.innerText = 'Astrologer' 
        texto.innerText = 'A scholar who reads fate in the stars.\nHeir to the school of glintstone sorcery.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 9';
        atributesDexterity.textContent = 'Desterity: 12';
        atributesMind.textContent = 'Mind: 15';
        atributesIntelligence.textContent = 'Intelligence: 16';
        atributesEndurance.textContent = 'Endurance: 9';
        atributesFaith.textContent = 'Faith: 7';
        atributesStrength.textContent = 'Strength: 8';
        atributesArcane.textContent = 'Arcane: 9';
        elementoBtn.value = 'quarto' 

    } else if(elementoBtn.value == 'quarto') { 

        img.src = './assets/media/04.png' 
        nome.innerText = 'Bandit' 
        texto.innerText = 'Heir to the school of glintstone sorcery.\nExcels at ranged combat with bows.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 10';
        atributesDexterity.textContent = 'Desterity: 13';
        atributesMind.textContent = 'Mind: 11';
        atributesIntelligence.textContent = 'Intelligence: 9';
        atributesEndurance.textContent = 'Endurance: 10';
        atributesFaith.textContent = 'Faith: 8';
        atributesStrength.textContent = 'Strength: 9';
        atributesArcane.textContent = 'Arcane: 14';
        elementoBtn.value = 'quinto' 

    } else if(elementoBtn.value == 'quinto') { 

        img.src = './assets/media/05.png' 
        nome.innerText = 'Confessor' 
        texto.innerText = 'A church spy adept at covert operations.\nEqually adept with a sword as they are with their incantations.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 10';
        atributesDexterity.textContent = 'Desterity: 12';
        atributesMind.textContent = 'Mind: 13';
        atributesIntelligence.textContent = 'Intelligence: 9';
        atributesEndurance.textContent = 'Endurance: 10';
        atributesFaith.textContent = 'Faith: 14';
        atributesStrength.textContent = 'Strength: 12';
        atributesArcane.textContent = 'Arcane: 9';
        elementoBtn.value = 'sexto' 

    } else if(elementoBtn.value == 'sexto') { 
        
        img.src = './assets/media/06.png' 
        nome.innerText = 'Hero' 
        texto.innerText = 'A stalwart hero, at home with a battleaxe, descended from a badlands chieftain.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 14';
        atributesDexterity.textContent = 'Desterity: 9';
        atributesMind.textContent = 'Mind: 9';
        atributesIntelligence.textContent = 'Intelligence: 7';
        atributesEndurance.textContent = 'Endurance: 12';
        atributesFaith.textContent = 'Faith: 8';
        atributesStrength.textContent = 'Strength: 16';
        atributesArcane.textContent = 'Arcane: 11';
        elementoBtn.value = 'setimo' 

    } else if(elementoBtn.value == 'setimo') { 

        img.src = './assets/media/07.png' 
        nome.innerText = 'Prophet' 
        texto.innerText = 'A seer ostracized for inauspicious prophecies.\nWell-versed in healing incantations.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 10';
        atributesDexterity.textContent = 'Desterity: 10';
        atributesMind.textContent = 'Mind: 14';
        atributesIntelligence.textContent = 'Intelligence: 7';
        atributesEndurance.textContent = 'Endurance: 8';
        atributesFaith.textContent = 'Faith: 16';
        atributesStrength.textContent = 'Strength: 11';
        atributesArcane.textContent = 'Arcane: 10';
        elementoBtn.value = 'oitavo' 

    } else if(elementoBtn.value == 'oitavo') { 

        img.src = './assets/media/08.png' 
        nome.innerText = 'Warrior' 
        texto.innerText = 'A nomad warrior who fights wielding two blades at once.\nAn origin of exceptional technique.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 11';
        atributesDexterity.textContent = 'Desterity: 16 ';
        atributesMind.textContent = 'Mind: 12';
        atributesIntelligence.textContent = 'Intelligence: 10';
        atributesEndurance.textContent = 'Endurance: 11';
        atributesFaith.textContent = 'Faith: 8';
        atributesStrength.textContent = 'Strength: 10';
        atributesArcane.textContent = 'Arcane: 9';
        elementoBtn.value = 'nono' 

    } else if(elementoBtn.value == 'nono') { 

        img.src = './assets/media/09.png' 
        nome.innerText = 'Vagabond' 
        texto.innerText = 'A knight exiled from their homeland to wander.\nA solid, armor-clad origin.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 15';
        atributesDexterity.textContent = 'Desterity: 13';
        atributesMind.textContent = 'Mind: 10';
        atributesIntelligence.textContent = 'Intelligence: 9';
        atributesEndurance.textContent = 'Endurance: 11';
        atributesFaith.textContent = 'Faith: 9';
        atributesStrength.textContent = 'Strength: 14';
        atributesArcane.textContent = 'Arcane: 7';
        elementoBtn.value = 'decimo' 

    } else if(elementoBtn.value == 'decimo') { 

        img.src = './assets/media/10.png' 
        nome.innerText = 'Prisoner' 
        texto.innerText = 'A prisoner bound in an iron mask.\nStudied in glinstone sorcery, having lived among the elite prior to sentencing.'
        atributes.textContent = `Atributes`
        atributesVigor.textContent = 'Vigor: 11';
        atributesDexterity.textContent = 'Desterity: 14';
        atributesMind.textContent = 'Mind: 12';
        atributesIntelligence.textContent = 'Intelligence: 14';
        atributesEndurance.textContent = 'Endurance: 11';
        atributesFaith.textContent = 'Faith: 66';
        atributesStrength.textContent = 'Strength: 11';
        atributesArcane.textContent = 'Arcane: 9';
        elementoBtn.value = 'primeiro' 

    } else { 

        img.src = './assets/media/all.png' 
        nome.innerText = 'Choose your class' 
        controlDisplay.style.display = 'none';
        texto.innerText = ``;
        atributes.textContent = ``
        atributesVigor.textContent = '';
        atributesDexterity.textContent = '';
        atributesMind.textContent = '';
        atributesIntelligence.textContent = '';
        atributesEndurance.textContent = '';
        atributesFaith.textContent = '';
        atributesStrength.textContent = '';
        atributesArcane.textContent = '';
        elementoBtn.value = 'all' 
    }
})