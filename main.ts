input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
    basic.pause(15000)
})
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # #
    . # . # .
    . . . . .
    `)
radio.setGroup(177)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 15; index++) {
            music.playTone(831, music.beat(BeatFraction.Half))
            music.playTone(659, music.beat(BeatFraction.Half))
        }
    }
})
