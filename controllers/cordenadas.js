const { response } = require('express')

const saveCordenadasGet = (req, res = response) => {

    res.json({
        ok: true,
        msg: "get Api rest desde el controlador willy gay"
    })
}

const saveCordenadasPOST = (req, res = response) => {
    const body = req.body;
    console.log({body});
    res.json({
        body
    })
}
module.exports = {
    saveCordenadasGet,
    saveCordenadasPOST
}