namespace groveIMU {
    /**
     * Initialises IMU, returns 0 if successful
     */
    //% shim=groveIMU::init
    export function init(): number { return 1 }

    //% shim=groveIMU::readAccelX
    export function readAccelX(): number { return 0 }

    //% shim=groveIMU::readAccelY
    export function readAccelY(): number { return 0 }

    //% shim=groveIMU::readAccelZ
    export function readAccelZ(): number { return 0 }

    //% shim=groveIMU::readGyroX
    export function readGyroX(): number { return 0 }

    //% shim=groveIMU::readGyroY
    export function readGyroY(): number { return 0 }

    //% shim=groveIMU::readGyroZ
    export function readGyroZ(): number { return 0 }

    export function readAllMotion(): number[] {
        return [readAccelX(), readAccelY(), readAccelZ(), readGyroX(), readGyroY(), readGyroZ()]
    }

    //% shim=groveIMU::computeY
    export function computeY() { return 0 }
}