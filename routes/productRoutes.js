const express = require("express");
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);
productRoutes.get("/:productId", getProductById);

productRoutes.post("/", createProduct);
productRoutes.put('/:productId', updateProduct);
productRoutes.delete('/:productId', deleteProduct);

module.exports = productRoutes;