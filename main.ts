radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (receivedNumber == 3) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (receivedNumber == 4) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (receivedNumber == 5) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
radio.setGroup(1)
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
basic.forever(function () {
	
})
