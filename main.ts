let base = 0
let count = 0
input.onButtonPressed(Button.A, function () {
    base += 1
    basic.showNumber(base)
})
input.onButtonPressed(Button.AB, function () {
    count = base
    while (count >= 0) {
        basic.showNumber(count)
        count += -1
    }
})
input.onButtonPressed(Button.B, function () {
    base += 10
    basic.showNumber(base)
})
