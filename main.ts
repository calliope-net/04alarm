input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    while (true) {
        while (!(input.buttonIsPressed(Button.B))) {
            if (!(input.pinIsPressed(TouchPin.P3))) {
                basic.setLedColor(0xff0000)
                pins.digitalWritePin(DigitalPin.P2, 1)
                pins.digitalWritePin(DigitalPin.C16, 1)
                basic.pause(500)
                pins.digitalWritePin(DigitalPin.P2, 0)
                pins.digitalWritePin(DigitalPin.C16, 0)
                basic.pause(500)
            } else {
                basic.setLedColor(0x00ff00)
            }
        }
        basic.pause(500)
    }
})
basic.showLeds(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
