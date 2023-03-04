const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const morgan = require('morgan');
const router = require('./src/routes/index');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/rickandmorty', router)


app.listen(PORT, ()=>{ console.log(`Server is listening on ${PORT}`)})