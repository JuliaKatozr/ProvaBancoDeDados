const express = require('express');
const mercadoriaController = require('../controllers/mercadoriaController');
const router = express.Router();

router.post('/mercadoria', mercadoriaController.Insert);
router.get('/mercadoria', mercadoriaController.SelectAll);
router.get('/mercadoria/:id', mercadoriaController.SelectDetail);
router.put('/mercadoria/:id', mercadoriaController.Update);
router.delete('/mercadoria/:id', mercadoriaController.Delete);

module.exports = router;