// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const cardsRouter = require('./routes/cards');

app.use(cors());
app.use(express.json()); // Для парсингу JSON

// Роутинг
app.use('/api/cards', cardsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
