const board = document.querySelector('#board')
const colors = ['#7f01f8', '#c803e7', '#f30458', '#c8f502', '#05b90e', '#f56700', '#04f1cd', '#f10404']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = gerRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function gerRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}