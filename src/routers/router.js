const {Router} = require('express');
const router = Router();
const routerFila = require('./routerFila');

router.use('/fila', routerFila);

module.exports = router;