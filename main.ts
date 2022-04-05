input.onButtonPressed(Button.AB, function () {
    if (Choice == 1) {
    	
    }
})
let d4 = 0
let Choice = 0
let Option = 1
Choice = 1
basic.forever(function () {
    if (Choice == 1) {
        d4 = randint(1, 4)
        basic.showNumber(d4)
    }
})
