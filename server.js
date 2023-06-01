const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book');
const app = express();

app.use(express.json())

//connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
.then(() => console.log("Database connection successfully done"))
.catch((error) => console.error('failed to connect mongodb',error));

//use book routes
app.use(bookRoutes);

//..start the server
const PORT = 3000;
app.listen(PORT, () =>{
    console.log("server is started on port" + PORT)
})

