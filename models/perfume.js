const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
    perfumeName: { type: String, require: true },
    uri: { type: String, require: true },
    price: { type: Number, require: true },
    concentration: { type: String, require: true },
    description: { type: String, require: true },
    ingredients: { type: String, require: true },
    volume: { type: Number, require: true },
    targetAudience: { type: String, require: true },
    comments: [{ type: mongoose.Schema.ObjectId, ref: "comment" }],
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "brand", require: true },
}, { timestamps: true });

module.exports = mongoose.model("perfumes", perfumeSchema, "perfumes");