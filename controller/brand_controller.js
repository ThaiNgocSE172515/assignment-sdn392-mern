const app = require("express");
const Brand = require("../models/brand");


module.exports.getBrand = async (req, res) => {
    try {
        const { brandName } = req.query;
        if (memberName) {
            const response = await Brand.find({ brandName: brandName });
            return res.status(200).json(response);
        }
        const response = await Brand.find({});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin brand", error: error });
    }
}
module.exports.getBrandById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Brand.findById(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin thương brand bằng id", error: error });
    }
}
module.exports.createBrand = async (req, res) => {
    try {
        const response = await Brand.create({
            brandName: req.body.brandName,
        });
        return res.status(200).json({ data: response });
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin brand", error: error });
    }
}
module.exports.deleteBrand = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Brand.findByIdAndDelete(id);
        return res.status(200).json({ message: `delete brand thành công với id là ${id}`, data: response });
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin brand", error: error });
    }
}

module.exports.updateBrand = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Perfume.findByIdAndUpdate(id, {
            brandName: req.body.brandName,
        });
        return res.status(200).json({ message: `update brand thành công với id là ${id}`, data: response });
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin brand", error: error });
    }
}