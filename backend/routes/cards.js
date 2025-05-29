// backend/routes/cards.js
const express = require('express');
const router = express.Router();
const { getCards, createCard } = require('../controllers/cardsController');

router.get('/', getCards);
router.post('/', createCard);

module.exports = router;
