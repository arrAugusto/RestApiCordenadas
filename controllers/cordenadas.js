var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'b0bkuit1yfkbcafigwey-mysql.services.clever-cloud.com',
    user: 'u2asrlgxjquivkrq',
    password: 'XAOKrsa8yg5DH9xJCpbi',
    database: 'b0bkuit1yfkbcafigwey'
});



const { response } = require('express')

const saveCordenadasGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: "get Api rest desde el controlador willy gay"
    })
}

const saveCordenadasPOST = (req, res = response) => {
    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });

    const { accuracy, altitude, heading, latitude, longitude, speed, timeDate } = req.body;

    let sql = `CALL New_Cordenada_Reg(` + accuracy + `, ` + altitude + `, ` + heading + `, ` + latitude + `, ` + longitude + `, ` + speed + `, 1, '` + timeDate + `')`;
    console.log(sql);

    connection.query(sql,
        function (error, results, fields) {

            if (error) throw error;
            console.log('ok>>> ');
        });

    res.json({
        accuracy,
        altitude,
        heading,
        latitude,
        longitude,
        speed
    })
}
module.exports = {
    saveCordenadasGet,
    saveCordenadasPOST
}