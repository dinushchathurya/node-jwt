const express = require('express');
const app = express();
require("dotenv").config();
const connection = require("./db");

const users = require("./routes/users");
const auth = require("./routes/auth");

connection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", users);
app.use("/api", auth);

const port  = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));