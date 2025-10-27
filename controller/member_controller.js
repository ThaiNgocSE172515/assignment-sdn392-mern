const app = require("express");
const Member = require("../models/member");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.getMember = async (req, res) => {
    try {
        const { memberName } = req.query;
        if (memberName) {
            const response = await Member.find({ membername: perfumeName });
            return res.status(200).json(response);
        }
        const response = await Member.find({});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin nước hoa", error: error });
    }
}
module.exports.getMemberById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Member.findById(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin người dùng", error: error });
    }
}

module.exports.deleteMember = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Member.findById(id);
        return res.status(200).json({ message: `xóa nước hoa thành công với id là ${id}` });
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin nước hoa", error: error });
    }
}

module.exports.updateMember = async (req, res) => {
    try {
        const { id } = req.params
        const response = await Member.findByIdAndUpdate(id, {
            membername: req.body.membername,
            password: req.body.membername,
        });
        return res.status(200).json({ message: `update nước hoa thành công với id là ${id}`, data: response });
    } catch (error) {
        return res.status(500).json({ message: "lỗi lấy thông tin nước hoa", error: error });
    }
}