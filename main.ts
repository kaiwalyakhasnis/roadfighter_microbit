function turnLeft () {
    my_car.change(LedSpriteProperty.X, -1)
}
input.onButtonPressed(Button.A, function () {
    turnLeft()
})
input.onGesture(Gesture.TiltLeft, function () {
    turnLeft()
})
function turnRight () {
    my_car.change(LedSpriteProperty.X, 1)
}
input.onButtonPressed(Button.B, function () {
    turnRight()
})
input.onGesture(Gesture.TiltRight, function () {
    turnRight()
})
let other_car: game.LedSprite = null
let my_car: game.LedSprite = null
my_car = game.createSprite(2, 4)
basic.forever(function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    other_car = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        other_car.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (other_car.isTouching(my_car)) {
            game.gameOver()
        }
        if (other_car.get(LedSpriteProperty.Y) == 4) {
            other_car.delete()
        }
    }
})
