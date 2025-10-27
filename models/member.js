const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    membername: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });


module.exports = mongoose.model("members", memberSchema, "members");