const express = require("express");
const products = express.Router();
const { getAllProducts, getProduct, createProduct, deleteProduct, updateProduct} = require("../queries/products");

// INDEX
products.get("/", async (req, res) => {
    const allProducts = await getAllProducts();
    // console.log(allProducts);
    res.status(200).json(allProducts);
  });
  
  // SHOW
  products.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await getProduct(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
  // CREATE
  products.post("/", async (req, res) => {
    // console.log(req.body)
    if (!req.body.img) {
      req.body.img = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    try {
      const product = await createProduct(req.body);
      res.json(product);
    } catch (error) {
      // console.log(error);
      res.status(400).json({ error });
    }
  });
  
  //DELETE
  products.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct.id) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json("Product not found");
    }
  });
  
  //UPDATE
  products.put("/:id", async (req, res) => {
    const { id } = req.params;
  
    if (!req.body.img) {
      req.body.img =
        "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    
    const updatedProduct = await updateProduct(id, req.body);
    res.status(200).json(updatedProduct);
  });
  
  module.exports = products;