const character = document.querySelector('.character')
const block = document.querySelector('.obstacle');
const start = document.querySelector('.startGame');

const jump = () => {
    character.classList.add('animateCharacter');
    setTimeout(() => {
        character.classList.remove('animateCharacter')
    }, 400)
}

document.addEventListener('keydown', (key)=> {
    if(key.code === 'Space' && block.classList.contains('animateBlock')){
        jump();
    }else{
        block.classList.add('animateBlock');
        start.style.display = 'none';
    }
})

start.addEventListener('click', ()=> {
    block.style.display = 'inline-block'
    block.classList.add('animateBlock');
    start.style.display = 'none';
}) 


const checkGameOver = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(characterTop >= 179 && blockLeft <=50 && blockLeft > 0){
        alert('You lose')
        character.classList.remove('animateCharacter')
        block.classList.remove('animateBlock');
        start.style.display = 'block'
    }
}, 10);