const app = require("express");
const Command = require("../models/comment")
const Perfume = require("../models/perfume");

module.exports.getComment = async (req, res) => {
    try {
        const { memberName } = req.query;
        if (memberName) {
            const response = await Command.find({ perfumeName: perfumeName });
            return res.status(200).json(response);
        }
        const response = await Perfume.find({});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy comment", error: error });
    }
}
module.exports.getCommentByPerfumeId = async (req, res) => {
    try {
        const { perfumeId } = req.query;
        if (memberName) {
            const response = await Command.find({ perfume: perfumeId });
            return res.status(200).json(response);
        }
        const response = await Perfume.find({});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy comment bởi perfume id", error: error });
    }
}

module.exports.createComment = async (req, res) => {
    try {
        const response = await Perfume.create({
            rating: req.body.rating,
            content: req.body.content,
            author: req.body.author,
            perfume: req.body.perfume
        });
        return res.status(200).json({ data: response });
    } catch (error) {
        return res.status(500).json({ message: "lỗi tạo comment", error: error });
    }
}





