const { response } = require('express')

const saveCordenadasGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: "get Api rest desde el controlador willy gay"
    })
}

const saveCordenadasPOST = (req, res = response) => {
    const { accuracy, altitude, heading, latitude, longitude, speed} = req.body;
    console.log({body});
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