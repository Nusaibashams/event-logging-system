const express = require('express');
const { addEvent, getEvents } = require('../controllers/eventController');

const router = express.Router();

router.post('/logs', addEvent); // Add event logs
router.get('/logs', getEvents); // Query event logs

module.exports = router;
