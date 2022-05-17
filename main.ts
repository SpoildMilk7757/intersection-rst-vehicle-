radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        Presses = 0
    }
})
input.onButtonPressed(Button.A, function () {
    Presses += 1
    if (Presses == 1) {
        radio.sendNumber(7)
        basic.pause(1000)
    } else {
        radio.sendNumber(8)
    }
})
input.onButtonPressed(Button.B, function () {
    Presses += 0 - Presses
})
let Presses = 0
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # #
    . # . # .
    . . . . .
    `)
radio.setGroup(177)
let Ambulance = 0
Presses = 0
