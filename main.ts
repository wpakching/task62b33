let c = 0
let f = 0
input.onButtonPressed(Button.A, function () {
    c = input.temperature()
    basic.showNumber(c)
})
input.onButtonPressed(Button.B, function () {
    f = 0
    basic.showNumber(input.temperature() * 1.8 + 32)
})
basic.forever(function () {
	
})
