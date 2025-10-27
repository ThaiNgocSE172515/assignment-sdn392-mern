const app = require("express");
const { loginWithUser, registerMember } = require("../controller/auth_controller");
const router = app.Router();

router.post("/login", loginWithUser)
router.post("/register", registerMember)

module.exports = router;
