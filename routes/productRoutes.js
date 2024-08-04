const express = require("express");
const multer = require("multer");
const { authenticateUser } = require("../middlewares/authMiddleware");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsForAdmin,
} = require("../controllers/productController");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

// Apply authentication middleware to all routes
// router.use(authenticateUser);

router.post("/", upload.single("file"), createProduct);
router.get("/", getAllProducts);
router.get("/admin", getProductsForAdmin);
router.get("/:id", getProductById);
router.put("/:id", upload.single("file"), updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
