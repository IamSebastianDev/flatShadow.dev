/** @format */

import express from 'express';
const app = express();

app.use(express.static('./dist'));
app.use(express.static('./public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up on Port ${PORT}`));
