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
    }
})
