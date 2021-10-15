let order = []
let clickedOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const showScore = document.getElementById('score')

const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    let time
    order.push(colorOrder)
    for(let i in order){
        time = Number(i) +1
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, time)
    }
}

//TODO: Ajustar tempo com base na chamada da função nextLevel
const lightColor = (element, time) => {
    time = time * 500
    setTimeout(() =>{
        element.classList.add('selected')
    }, time)
    setTimeout(() => {
        element.classList.remove('selected')
    }, time + 250)
}

const checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
        if(clickedOrder.length == order.length){
            showScore.innerHTML = score
            nextLevel();
        }
    }
}

const click = (color) => {
    clickedOrder.push(color) 
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)

}
const createColorElement = (color) => {
    switch(color){
        case 0:
            return green
        case 1:
            return red
        case 2:
            return yellow
        case 3:
            return blue
    }
}
const nextLevel = () => {
    score++;
    shuffleOrder()
}
const gameOver = () => {
    alert(`Pontuação: ${score}\nVoce perdeu o jogo\nCliquem em Ok para iniciar novamente`)
    score = 0;
    showScore.innerHTML = score
    order = []
    clickedOrder = []

    playGame()
}

const playGame = () => {
    alert('Bem vindo ao Genius, iniciando o jogo...')
    score = 0
    showScore.innerHTML = score

    nextLevel()
}
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()