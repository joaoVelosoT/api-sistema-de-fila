const {Router} = require('express');
const FilaController = require('../controllers/filaController');
const {ValidateFila, ValidateFilaID} = require('../middlewares/validateFila');
const router = Router();

// Rotas extras
router.get('/proxlista', FilaController.proxLista);
router.get('/pendentes', FilaController.pendentes);
router.get('/concluidos', FilaController.concluidos);
router.get('/cancelados', FilaController.cancelados);

// Rotas padrões do crud
router.post('/', ValidateFila, FilaController.create);
router.get('/', FilaController.getAll);
router.get('/:id', ValidateFilaID, FilaController.getOne);
router.put('/:id', ValidateFilaID,  FilaController.update);
router.delete('/:id',ValidateFilaID, FilaController.delete);


module.exports = router;