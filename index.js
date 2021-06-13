const express = require('express');
const app = express();
require("dotenv").config();
const connection = require("./config/db");


connection();
app.use(express.json());

const port  = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port${port}`));