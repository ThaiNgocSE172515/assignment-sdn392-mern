const app = require("express");
const { getMember, getMemberById, updateMember, deleteMember } = require("../controller/member_controller");
const router = app.Router();

router.get("/member", getMember)
router.get("/member/:id", getMemberById)
router.put("/member/:id", updateMember)
router.delete("/member/:id", deleteMember)
module.exports = router;
