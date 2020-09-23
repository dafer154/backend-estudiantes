const Student = require("../models/Student");
const studentController = {};

studentController.createStudent = async (req, res) => {
    const student = req.body;
    try {
        const newStudent = new Student({
            firstName: student.firstName,
            lastName: student.lastName,
            grade: student.grade,
            license: student.license,
            age: student.age,
            sex: student.sex
        });
        await newStudent.save();
        res.status(200).json({ message: "ok", body: newStudent });
    } catch (e) {
        res.status(400).json({ message: "bad request", e: e });
    }
}

studentController.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ message: "ok", body: students });
    } catch (e) {
        res.status(400).json({ message: "bad request", e: e });
    }
};

studentController.getStudentById = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findOne({ _id: id });
        res.status(200).json({ message: "ok", body: student });
    } catch (error) {
        res.status(400).json({ message: "bad request", e: e });
    }
};

studentController.updateStudent = async (req, res) => {
    const { id } = req.params;
    const student = req.body;
    try {
        const newStudent = await Student.findOneAndUpdate(
            { _id: id },
            {
                firstName: student.firstName,
                lastName: student.lastName,
                grade: student.grade,
                license: student.license,
                age: student.age,
                sex: student.sex
            }
        );
        res.status(200).json({ message: "ok", body: newStudent });
    } catch (e) {
        res.status(400).json({ message: "error", exception: e });
    }
};

studentController.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const studentDelete = await Student.findByIdAndDelete(id);
        res.status(200).json({ message: "ok", body: studentDelete });
    } catch (e) {
        res.status(400).json({ message: "error", exception: e });
    }
};



studentController.searchStudent = async (req, res) => {

    const { status, query } = req.body
    try {
        const studentSearch = await Student.find({ $and: [{ status: status }, { title: new RegExp(`^${query}`, 'i') }] })
        res.status(200).json({ message: "ok", body: studentSearch });
    } catch (e) {
        res.status(400).json({ message: "bad request", e: e });
    }
}

module.exports = studentController;