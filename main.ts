input.onButtonPressed(Button.A, function () {
    if (bobPoints < 10 && maryPoints < 10 && johnPoints < 10) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        if (Math.randomBoolean()) {
            bobPoints += 1
        } else {
            maryPoints += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (bobPoints < 10 && maryPoints < 10 && johnPoints < 10) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        if (Math.randomBoolean()) {
            bobPoints += 0 - 1
        } else {
            maryPoints += 0 - 1
        }
    }
})
let johnPoints = 0
let maryPoints = 0
let bobPoints = 0
basic.showString("Press A for Thumbs Up, B for Thumbs Down")
basic.forever(function () {
    if (bobPoints >= 10) {
        basic.showString("Bob wins!")
        basic.pause(1000)
        basic.clearScreen()
        bobPoints = 0
        maryPoints = 0
        johnPoints = 0
    } else if (maryPoints >= 10) {
        basic.showString("Mary wins!")
        basic.pause(1000)
        basic.clearScreen()
        bobPoints = 0
        maryPoints = 0
        johnPoints = 0
    } else if (johnPoints >= 10) {
        basic.showString("John wins!")
        basic.pause(1000)
        basic.clearScreen()
        bobPoints = 0
        maryPoints = 0
        johnPoints = 0
    }
})
