/**
 * The Magnetometer Module Blocks, Magnetic Force Stength value to Graph,  plus set sensitivity with A,B buttons
 */
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.A, function () {
    sense = sense + 10
})
input.onButtonPressed(Button.AB, function () {
    sense = 1
})
input.onButtonPressed(Button.B, function () {
    sense = sense - 10
})
let mf = 0
let sense = 0
sense = 1
input.setAccelerometerRange(AcceleratorRange.OneG)
if (input.compassHeading() == -1003) {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    input.calibrateCompass()
} else {
    basic.showIcon(IconNames.Yes)
}
basic.pause(3000)
basic.forever(function () {
    mf = input.magneticForce(Dimension.Strength)
    serial.writeValue("mf", 0)
    led.plotBarGraph(
    mf / sense,
    500
    )
})