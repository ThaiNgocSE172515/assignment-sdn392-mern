const app = require("express");
const Member = require("../models/member");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.registerMember = async (req, res) => {
    try {
        const { membername, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        const response = await Member.create({
            membername: membername,
            password: hashedPassword,
        });
        return res.status(200).json({ data: response });
    } catch (error) {
        return res.status(500).json({ message: "lỗi đăng ký người dùng", error: error });
    }
}
module.exports.loginWithUser = async (req, res) => {
    try {
        const { membername, password } = req.body
        const user = await Member.findOne({
            membername: membername
        })
        console.log(user);
        if (user) {
            const isUser = await bcrypt.compare(password, user.password);

            if (isUser) {
                console.log(1)
                const token = jwt.sign(
                    {
                        id: user.id,
                        membername: user.membername,
                        isAdmin: user.isAdmin,
                    },
                    process.env.JWT_SERECT,
                    {
                        "algorithm": "HS256",
                        "expiresIn": "1h"
                    }
                )
                console.log(token)
                return res.status(200).json({ message: "đăng nhập thành công", data: user, token: token });
            } else {
                return res.status(403).json({ message: "Mật khẩu không đúng" });
            }
        } else {
            return res.status(403).json({ message: "người dùng không tồn tại" });
        }
    } catch (error) {
        return res.status(403).json({ message: "Lỗi đăng nhập", error: error });
    }
}

module.exports.instroSpect = (req, res, next) => {
    try {

        const header = req.headers["authorization"];
        if (!header) {
            return res.status(401).json({ message: "Thiếu token trong header" });
        }
        const token = header.split(" ")[1];

        if (token) {
            const user = jwt.verify(
                token,
                process.env.JWT_SERECT,
            )
            req.user = user;
            next();
        } else {
            return res.status(500).json({ message: "token không hợp lệ" });
        }
    } catch (error) {
        return res.status(500).json({ message: "instro bị lỗi không thể verified token" });
    }
}

module.exports.isLogin = (req, res, next) => {

}

module.exports.verifyAdmin = (req, res, next) => {

};
module.exports.logout = (req, res) => {

};

module.exports.isSeft = (req, res, next) => {

}