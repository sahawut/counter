input.onButtonPressed(Button.A, function () {
    counter += -1
})
input.onButtonPressed(Button.AB, function () {
    counter = 5
})
input.onButtonPressed(Button.B, function () {
    counter += 1
})
let counter = 0
counter = 5
basic.forever(function () {
    basic.showNumber(counter)
})
