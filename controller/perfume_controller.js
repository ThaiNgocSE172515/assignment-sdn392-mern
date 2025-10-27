const Perfume = require("../models/perfume");



module.exports.getPerfume = async (req, res) => {
    try {
        const { perfumeName } = req.query;
        if (perfumeName) {
            const response = await Perfume.find({ perfumeName: perfumeName });
            return res.status(200).json(response);
        }
        const response = await Perfume.find({});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin nước hoa", error: error });
    }
}

module.exports.createPerfume = async (req, res) => {
    try {
        const response = await Perfume.create({
            perfumeName: req.body.perfumeName,
            uri: req.body.uri,
            price: req.body.price,
            concentration: req.body.concentration,
            description: req.body.description,
            ingredients: req.body.ingredients,
            volume: req.body.volume,
            targetAudience: req.body.targetAudience,
            brand: req.body.brand,
        });
        return res.status(200).json({ data: response });
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin nước hoa", error: error });
    }
}
module.exports.getPerfumeById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Perfume.findById(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin nước hoa", error: error });
    }
}

module.exports.deletePerfume = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Perfume.findById(id);
        return res.status(200).json({ message: `xóa nước hoa thành công với id là ${id}` });
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin nước hoa", error: error });
    }
}

module.exports.updatePerfume = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Perfume.findByIdAndUpdate(id, {
            perfumeName: req.body.perfumeName,
            uri: req.body.uri,
            price: req.body.price,
            concentration: req.body.concentration,
            description: req.body.description,
            ingredients: req.body.ingredients,
            volume: req.body.volume,
            targetAudience: req.body.targetAudience,
            brand: req.body.brand,
        });
        return res.status(200).json({ message: `update nước hoa thành công với id là ${id}`, data: response });
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin nước hoa", error: error });
    }
}