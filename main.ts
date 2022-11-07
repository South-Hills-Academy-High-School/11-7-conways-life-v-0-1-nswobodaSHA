function drawGrid () {
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridsprite = sprites.create(img`
                    f 7 7 7 7 7 7 7 7 7 
                    f 7 7 7 7 7 7 7 7 7 
                    f 7 7 7 7 7 7 7 7 7 
                    f 7 7 7 7 7 7 7 7 7 
                    f 7 7 7 7 7 7 7 7 7 
                    f 7 7 7 7 7 7 7 7 7 
                    f 7 7 7 7 7 7 7 7 7 
                    f 7 7 7 7 7 7 7 7 7 
                    f 7 7 7 7 7 7 7 7 7 
                    f f f f f f f f f f 
                    `, SpriteKind.Player)
                gridsprite.setPosition(currentX, currentY)
                gridSprites.push(gridsprite)
            }
            currentX += 10
        }
        currentY += 10
    }
}
let gridsprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let grid: number[][] = []
let rowTemplate = [
0,
0,
0,
0,
5,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
grid = []
for (let index = 0; index < 12; index++) {
    grid.push(rowTemplate)
}
game.onUpdate(function () {
    drawGrid()
})
