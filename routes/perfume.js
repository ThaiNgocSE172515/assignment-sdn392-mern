const app = require("express");
const { getPerfume, getPerfumeById, createPerfume, updatePerfume, deletePerfume } = require("../controller/perfume_controller");
const { instroSpect } = require("../controller/auth_controller");
const router = app.Router();

router.get("/perfume", instroSpect, getPerfume)
router.get("/perfume/:id", getPerfumeById)
router.post("/perfume", createPerfume)
router.put("/perfume/:id", updatePerfume)
router.delete("/perfume/:id", deletePerfume)
module.exports = router;
