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
        radio.sendNumber(7)
        for (let index = 0; index < 30; index++) {
            music.playTone(831, music.beat(BeatFraction.Half))
            music.playTone(659, music.beat(BeatFraction.Half))
        }
    }
})
