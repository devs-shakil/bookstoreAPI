const { MongoClient} = require("mongodb");
require('dotenv').config()
//create a new mongodb client
const client = new MongoClient('mongodb://localhost:27017');
console.log("Database connected");

 

module.exports = {client}