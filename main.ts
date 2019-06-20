if (groveIMU.init() == 0) {
    basic.showString("O");
} else {
    basic.showString("X");
}

serial.redirectToUSB();

basic.forever(function () {
    serial.writeNumbers(groveIMU.readAllMotion());
    serial.writeLine("");
    basic.pause(500);
})