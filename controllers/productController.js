const ProductModel = require("../models/Products");

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, category, price, quantity } = req.body;
    const image = req.file;

    if (!name || !description || !category || !price || !quantity || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new ProductModel({
      name,
      description,
      category,
      price,
      quantity,
      image: image.buffer,
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Failed to create product", error });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category, price, quantity } = req.body;
    const image = req.file;

    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = name;
    product.description = description;
    product.category = category;
    product.price = price;
    product.quantity = quantity;

    if (image) {
      product.image = image.buffer;
    }

    await product.save();
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    const productsWithBase64Images = products.map((product) => {
      let base64Image = null;
      if (product.image && Buffer.isBuffer(product.image)) {
        base64Image = `data:image/jpeg;base64,${product.image.toString(
          "base64"
        )}`;
      }
      return {
        ...product.toObject(),
        image: base64Image,
      };
    });

    res.json(productsWithBase64Images);
  } catch (error) {
    res.status(500).json({ message: "Failed to get products", error });
  }
};

// Get product by Id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let base64Image = null;
    if (product.image && Buffer.isBuffer(product.image)) {
      base64Image = `data:image/jpeg;base64,${product.image.toString(
        "base64"
      )}`;
    }

    res.json({
      ...product.toObject(),
      image: base64Image,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to get product", error });
  }
};

// Get all product for admin dashboard
const getProductsForAdmin = async (req, res) => {
  try {
    const products = await ProductModel.find(
      {},
      "name price category quantity"
    );
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch products for admin", error });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsForAdmin,
};
