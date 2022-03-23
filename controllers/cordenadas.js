const { response } = require('express')

const saveCordenadasGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: "get Api rest desde el controlador willy gay"
    })
}

const saveCordenadasPOST = (req, res = response) => {
    const {latitud, longitud} = req.body;
    res.json({
        ok: true,
        msg: "POST Api rest desde el controlador",
        latitud,
        longitud
    })
}
module.exports = {
    saveCordenadasGet,
    saveCordenadasPOST
}