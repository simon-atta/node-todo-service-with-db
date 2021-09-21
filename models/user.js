import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    todos: {
        type: Array
    }
});

module.exports = mongoose.model("User", UserSchema);

