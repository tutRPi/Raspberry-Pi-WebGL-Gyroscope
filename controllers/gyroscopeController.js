const i2c = require('i2c-bus');
const MPU6050 = require('i2c-mpu6050');

const MPU_6050_ADDR = 0x68;

exports.data = function(req, res) {
    const i2c1 = i2c.openSync(1);
    const sensor = new MPU6050(i2c1, MPU_6050_ADDR);
    const data = sensor.readSync();
    i2c1.closeSync();
    res.json(data);
};

