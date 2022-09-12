import { pool } from "../db.mysql.js";

//listar productos
export const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM product ORDER BY name ASC"
    );
    if (result.length === 0)
      return res.status(200).json({ message: "Product not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//filtro por nombre de producto
export const getProductsByName = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM product WHERE name like '%" +
        req.params.name +
        "%' order by name asc"
    );

    if (result.length === 0)
      return res.status(200).json({ message: "Product not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//filtro de productos por categoria y orden por nombre asc
export const getProductByCategory = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM product WHERE category =" +
        req.params.category +
        " order by name"
    );

    if (result.length === 0)
      return res.status(200).json({ message: "Product not found by category" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//filtro de productos ordenados por precio
export const getProductsByOrderPrice = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM product order by price " + req.params.order + " "
    );

    if (result.length === 0)
      return res.status(200).json({ message: "Product not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//filtro de productos por categoria y orden asc
export const getProductsByOrderPriceCategory = async (req, res) => {
  const id = req.params.id;
  const order = req.params.order;
  try {
    const [result] = await pool.query(
      "SELECT * FROM product where category= " +
        id +
        "  order by price " +
        order
    );

    if (result.length === 0)
      return res.status(200).json({ message: "Product not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//filtro por nombre de producto y ordenados por precio
export const getProductsByNamePrice = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM product WHERE name like '%" +
        req.params.name +
        "%' order by price " +
        req.params.order
    );

    if (result.length === 0)
      return res.status(200).json({ message: "Product not found" });

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
