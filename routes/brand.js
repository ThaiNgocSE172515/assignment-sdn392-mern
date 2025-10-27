const app = require("express");
const { getBrand, getBrandById, createBrand, updateBrand, deleteBrand } = require("../controller/brand_controller");

const router = app.Router();

router.get("/brand", getBrand)
router.get("/brand/:id", getBrandById)
router.post("/brand", createBrand)
router.put("/brand/:id", updateBrand)
router.delete("/brand/:id", deleteBrand)
module.exports = router;
