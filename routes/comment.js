const app = require("express");
const { createComment, updateComment } = require("../controller/comment_controller");
const router = app.Router();

router.post("/comment/:id", createComment)

module.exports = router;
