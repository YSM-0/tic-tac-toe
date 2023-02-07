let playGrid = [
    ["","",""],
    ["","",""],
    ["","",""]
]

const startButton = document.querySelector('.start')

const player = 'X'

const bot = 'O'

const createGrid = function (playGrid) {

    const gridContainer = document.createElement('div')
    const pageContainer = document.querySelector('.page-container')

    gridContainer.classList.add('grid-container')

    pageContainer.appendChild(gridContainer)

    for (let row of playGrid) {
        for (let i = 0; i < row.length; i++) {
            const markCase = document.createElement('div')
            
            markCase.classList.add('mark')
            gridContainer.appendChild(markCase)
            markCase.textContent = row[i]
        }
    }
}

const startGame = function () {
    startButton.remove()

    playGrid = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]

    createGrid(playGrid)
}

startButton.addEventListener('click', () => {
    startGame()
})