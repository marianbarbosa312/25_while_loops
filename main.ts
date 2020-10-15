input.onPinPressed(TouchPin.P0, function () {
    index = 4
    index2 = 0
    while (index >= 0) {
        led.plot(index, index2)
        basic.pause(100)
        index += -1
        index2 += 1
    }
})
input.onButtonPressed(Button.A, function () {
    counter = 0
    while (counter >= 5) {
        basic.showNumber(counter)
        basic.clearScreen()
        music.playMelody("E F G F E F G A ", 120)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
    basic.clearScreen()
})
let counter = 0
let index2 = 0
let index = 0
let Sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        Sprite.change(LedSpriteProperty.X, 2)
        basic.pause(100)
        Sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
