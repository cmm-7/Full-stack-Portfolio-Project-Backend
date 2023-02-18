const db = require("../db/dbConfig");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error) {
    return error;
  }
};

// ONE Product
const getProduct = async (id) => {
  try {
    const oneProduct = await db.oneOrNone("SELECT * FROM products WHERE id=$1", id); //$1 = think of string interperlation
    return oneProduct;
  } catch (error) {
    return error;
  }
};

// CREATE
const createProduct = async (product) => {
  const { name, price, description, type, img } = product;

  try {
    const newProduct = await db.oneOrNone(
      "INSERT INTO products (name, price, description, type, img) VALUES($1, $2, $3, $4, $5 ) RETURNING *",
      [name, price, description, type, img]
    );
    //     SELECT
    //    (name) AS new_name
    return newProduct;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//DELETE
const deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      id
    );
    return deletedProduct;
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateProduct = async (id, product) => {
  const { name, price, description, type, img } = product;
  try {
    const updatedProduct = await db.one(
      "UPDATE products SET name=$1, price=$2, description=$3, type=$4, img=$5, WHERE id=$6 RETURNING *",
      [name, price, description, type, img, id]
    );
    return updatedProduct;
  } catch (error) {
    return error;
  }
};

module.exports = {
    getAllProducts, getProduct, createProduct, deleteProduct, updateProduct
}