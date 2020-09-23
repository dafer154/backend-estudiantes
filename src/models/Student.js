const { Schema, model } = require("mongoose");

const StudentSchema = new Schema(
    {
        firstName: String,
        lastName: { type: String, required: true },
        grade: { type: String },
        license: { type: String },
        age: { type: String, required: true },
        sex: { type: String, required: true },
    }
);

module.exports = model("Student", StudentSchema);