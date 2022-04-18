const mongoose = require('mongoose')
const { Schema } = mongoose;

const taskSchema = new Schema ({
    task_name: {
        type: String,
        required: [true, "task"]
    },
    task_done: {
        type: Boolean,
        required: [true, "task status"]
    },
    created_date: {
        type: Date,
        required: [true, "created date"]
    },
    finished_date: {
        type: Date
    }
})

const Task = mongoose.model('Tasks', taskSchema);
module.exports = Task;