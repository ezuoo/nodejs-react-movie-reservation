var express = require('express');
var router = express.Router();

const ticketValidate = require('../controllers/ticketValidate');

/*
router.all('/cwordsList', common.check, contentsController.selectCwords);
router.get('/regPwords', common.check, contentsController.selectPhonemes);
router.post('/savePwords', contentsController.saveSortWords);
*/

router.get('/tValidate', ticketValidate.validate);

module.exports = router;