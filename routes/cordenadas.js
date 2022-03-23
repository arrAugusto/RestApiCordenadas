const { Router } = require('express');
const { saveCordenadasGet, saveCordenadasPOST } = require('../controllers/cordenadas');


const router = Router();

router.get('/', saveCordenadasGet)
router.post('/', saveCordenadasPOST);


module.exports = router;