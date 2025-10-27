const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    rating: { type: Number, min: 1, max: 5, require: true },
    content: { type: String, require: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "member", require: true },
    perfume: { type: mongoose.Schema.Types.ObjectId, ref: "perfume" }
}, { timestamps: true });


module.exports = mongoose.model("comments", commentSchema, "comments");