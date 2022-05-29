require('dotenv').config();

const express = require('express');
const apiRouter = require('./routes');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*'
}))

console.log(process.env.MYSQL_USER);
app.use(express.json());
app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('server running on port 3000');
})