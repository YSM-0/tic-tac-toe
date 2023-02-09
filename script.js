let playGrid = [
    ["","",""],
    ["","",""],
    ["","",""]
]

const startButton = document.querySelector('.start')

const player = {mark: "X"}

const bot = {mark: "O"}

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

            markCase.addEventListener('click', () => {
                if (markCase.textContent === "") {
                    row[i] = player.mark
                    markCase.textContent = row[i]
                    if (checkGrid() === 'continue') {
                        botTurn()
                    }
                }
            })
        }
    }
}

const askName = function () {
    const pageContainer = document.querySelector('.page-container')
    const nameDiv = document.createElement('nameDiv')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const button = document.createElement('button')

    nameDiv.classList.add('name-div')
    label.classList.add('label')
    input.classList.add('input')
    button.classList.add('button')

    pageContainer.appendChild(nameDiv)
    nameDiv.appendChild(label)
    nameDiv.appendChild(input)
    nameDiv.appendChild(button)

    button.textContent = "LET'S GO!"
    label.textContent = 'NAME:'

    button.addEventListener('click', () => {
        if (input.value !== "") {
            player.name = input.value
            nameDiv.remove()
            createGrid(playGrid)
        }
    })
}

const startGame = function () {
    const pageContainer = document.querySelector('.page-container')

    pageContainer.innerHTML = ""

    playGrid = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]

    askName()
}

const restartGame = function () {
    const pageContainer = document.querySelector('.page-container')

    pageContainer.innerHTML = ""

    playGrid = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]

    createGrid(playGrid)
}

const randomNumber = function (max) {
    return Math.floor(Math.random() * max);
}

const botTurn = function () {
    let x = randomNumber(3)
    let y = randomNumber(3)
    
    const pageContainer = document.querySelector('.page-container')

    while ( playGrid[x][y] !== "") {  
        x = randomNumber(3)
        y = randomNumber(3)
    }

    playGrid[x][y] = bot.mark

    pageContainer.innerHTML = ""
    createGrid(playGrid)
    checkGrid()
}

const checkGrid = function () {
    // CHECK ROWS
    for (let row of playGrid) {
        if (row[0] === player.mark && row[1] === player.mark && row[2] === player.mark) {
            return win()
        } else 
        if (row[0] === bot.mark && row[1] === bot.mark && row[2] === bot.mark) {
            return loss()
        }
    }

    // CHECK COLUMNS
    for (let i = 0; i <= 2; i++) {
        let x = ""
        let y = ""
        let z = ""

        x = playGrid[0][i]
        y = playGrid[1][i]
        z = playGrid[2][i]

        if (x === player.mark && y === player.mark && z === player.mark) {
            return win()
        } else
        if (x === bot.mark && y === bot.mark && z === bot.mark) {
            return loss()
        }
    }

    // CHECK DIAG
    if (playGrid[0][0] === player.mark && playGrid[1][1] === player.mark && playGrid[2][2] === player.mark) {
        return win()
    }
    if (playGrid[0][2] === player.mark && playGrid[1][1] === player.mark && playGrid[2][0] === player.mark) {
        return win()
    }

    if (playGrid[0][0] === bot.mark && playGrid[1][1] === bot.mark && playGrid[2][2] === bot.mark) {
        return loss()
    }
    if (playGrid[0][2] === bot.mark && playGrid[1][1] === bot.mark && playGrid[2][0] === bot.mark) {
        return loss()
    }

    // CHECK DRAFT 
    for (let row of playGrid) {
        if (row.includes("")) {
            return 'continue'
        }
    } 

    draft()
}

const win = function () {
    const shadow = document.createElement('div')  
    const message = document.createElement('p') 
    const restartButton = document.createElement('button')
    const pageContainer = document.querySelector('.page-container')

    shadow.classList.add('shadow')
    restartButton.classList.add('start')

    pageContainer.appendChild(shadow)
    shadow.appendChild(message)
    shadow.appendChild(restartButton)

    message.textContent = `${player.name} WON!`
    restartButton.textContent = 'RESTART'
    
    restartButton.addEventListener('click', () => {
        restartGame()
    })
}

const loss = function () {
    const shadow = document.createElement('div')  
    const message = document.createElement('p') 
    const restartButton = document.createElement('button')
    const pageContainer = document.querySelector('.page-container')

    shadow.classList.add('shadow')
    restartButton.classList.add('start')

    pageContainer.appendChild(shadow)
    shadow.appendChild(message)
    shadow.appendChild(restartButton)

    message.textContent = `YOU LOSS!`
    restartButton.textContent = 'RESTART'

    restartButton.addEventListener('click', () => {
        restartGame()
    })
}

const draft = function () {
    const shadow = document.createElement('div')  
    const message = document.createElement('p') 
    const restartButton = document.createElement('button')
    const pageContainer = document.querySelector('.page-container')

    shadow.classList.add('shadow')
    restartButton.classList.add('start')

    pageContainer.appendChild(shadow)
    shadow.appendChild(message)
    shadow.appendChild(restartButton)

    message.textContent = `DRAFT!`
    restartButton.textContent = 'RESTART'
    
    restartButton.addEventListener('click', () => {
        restartGame()
    })
}

startButton.addEventListener('click', () => {
    startGame()
})