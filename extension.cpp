#include "pxt.h"
#include "SparkFunLSM6DS3.h"

using namespace pxt;

namespace groveIMU {
    LSM6DS3 imu;

    //%
    int init() {
        return imu.begin();
    }

    //%
    float readAccelX() {
        return imu.readFloatAccelX();
    }

    //%
    float readAccelY() {
        return imu.readFloatAccelY();
    }

    //%
    float readAccelZ() {
        return imu.readFloatAccelZ();
    }

    //%
    float readGryoX() {
        return imu.readFloatGyroX();
    }

    //%
    float readGryoY() {
        return imu.readFloatGyroY();
    }

    //%
    float readGryoZ() {
        return imu.readFloatGyroZ();
    }
}