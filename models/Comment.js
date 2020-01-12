import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})