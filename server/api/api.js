require('dotenv').config({ path: __dirname + `/../.env` });

const express = require('express');
const apiRouter = require('./routes');

const app = express();

if (process.env.NODE_ENV === 'PROD') {

    app.use(express.json());
    app.use('/api', apiRouter);

    app.use(express.static(__dirname + '/../public/'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/../public/index.html'));


    app.listen(80, () => {
        console.log('server (PROD) running on port 80');
    })
    
} else {
    const cors = require('cors');
    app.use(cors({
        origin: '*'
    }))
    app.use(express.json());
    app.use('/api', apiRouter);
    
    app.listen(3000, () => {
        console.log('server (DEV) running on port 3000');
    })
}


