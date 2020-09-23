const express = require("express");
const cors = require("./middlewares/cors")

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.json());
app.use(cors({ origin: true }));
app.options("*", cors());

const students = require("./routes/students");

//Routes
app.use('/students', students);

//MAIN
app.get('/', (req, res) => { res.send('REST API - CRUD STUDENTS'); });

module.exports = app;