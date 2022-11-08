namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const newCursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridRow += -1
    cursorY += -10
    drawGrid()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[cursorGridRow][cursorGridCol] = grid[cursorGridRow][cursorGridCol] * -1 + 1
    drawGrid()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += -1
    cursorX += -10
    drawGrid()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += 1
    cursorX += 10
    drawGrid()
})
function drawGrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridsprite = sprites.create(img`
                    f 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 
                    f 1 1 1 1 1 1 1 1 1 
                    f f f f f f f f f f 
                    `, SpriteKind.Player)
                gridsprite.left = currentX
                gridsprite.top = currentY
                gridSprites.push(gridsprite)
            }
            currentX += 10
        }
        currentY += 10
    }
    cursorVariable.left = cursorX
    cursorVariable.top = cursorY
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridRow += 1
    cursorY += 10
    drawGrid()
})
let gridsprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let cursorY = 0
let cursorX = 0
let cursorGridRow = 0
let cursorGridCol = 0
let cursorVariable: Sprite = null
let grid: number[][] = []
grid = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let column = 0; column <= 15; column++) {
        grid[row].push(1)
    }
}
cursorVariable = sprites.create(img`
    . 2 2 2 2 . 7 7 7 7 
    . 2 . . . . . . . 7 
    . 2 . . . . . . . 7 
    . 2 . . . . . . . 7 
    . . . . . . . . . . 
    . 7 . . . . . . . 8 
    . 7 . . . . . . . 8 
    . 7 . . . . . . . 8 
    . 7 7 7 7 . 8 8 8 8 
    . . . . . . . . . . 
    `, SpriteKind.cursor)
cursorGridCol = 0
cursorGridRow = 0
cursorX = 0
cursorY = 0
cursorVariable.z = 10
drawGrid()
