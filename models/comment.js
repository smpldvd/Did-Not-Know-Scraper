const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    body: {
        type: String,
        trim: true,
    }
});

let Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;