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

    const { accuracy, altitude, heading, latitude, longitude, speed } = req.body;

    let sql = `CALL New_Cordenada_Reg(`+accuracy+`, `+altitude+`, `+heading+`, `+latitude+`, `+longitude+`, `+speed+`, 1, '2022-03-23')`;
    connection.query(sql, 
    function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ');
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