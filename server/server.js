const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Routes = express.Router();
const PORT = 4000;


require('./routes/workshop')(Routes) //workshop endpoints

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/dscPesu', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/routes', Routes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});