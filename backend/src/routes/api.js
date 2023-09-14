const express = require("express");
const router = express.Router();

const resistorController = require('../controllers/resistorController'); 

router.get('/resistors', resistorController.getAllResistors);
router.get('/resistors/tolerance', resistorController.getResistorsByTolerance);
router.get('/resistors/colors', resistorController.getResistorsByColors);
module.exports = router;