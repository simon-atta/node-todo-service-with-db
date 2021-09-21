import mongoose from "mongoose"



const TodoSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    status: {
        type: String
    }
});

class TodoClass extends mongoose.Model {

}

export default  mongoose.model(TodoClass, TodoSchema, 'todo');


