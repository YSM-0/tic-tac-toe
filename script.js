const playGrid = [
    ["X","O","O"],
    ["O","X","O"],
    ["O","X","X"]
]

const createGrid = function (playGrid) {
    const gridContainer = document.createElement('div')
    const pageContainer = document.querySelector('.page-container')

    gridContainer.classList.add('grid-container')

    pageContainer.appendChild(gridContainer)

    for (let row of playGrid) {
        for (let i = 0; i < row.length; i++) {
            const mark = document.createElement('div')
            
            mark.classList.add('mark')
            gridContainer.appendChild(mark)
            mark.textContent = row[i]
        }
    }
}

createGrid(playGrid)