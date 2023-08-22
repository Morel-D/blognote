require('dotenv').config();
const express = require('express');
const cors = require('cors');

const blogList = require('./router/blogRouter');

// Express App
const app = express();


// Middleware 
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log('Listening to port', process.env.PORT)
});



app.use('/Blog', blogList);