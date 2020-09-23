const express = require('express');
const students = express.Router();
const studentController = require("../controllers/students");

// notes
students.post("/add", studentController.createStudent);
students.get("/", studentController.getStudents);
students.get("/:id", studentController.getStudentById);
students.delete("/delete/:id", studentController.deleteStudent);
students.put("/edit/:id", studentController.updateStudent);

module.exports = students;