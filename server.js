require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT,
    cors = require('cors'),
    server = app.listen(port,() => console.log(`Listening on port ${port}`));



app.use(cors(),express.json(),express.urlencoded({extended:true}));

require('./server/config/database.config');
require('./server/routes/product.routes')(app);


// install express, mongoose, cors,  and dotenv
