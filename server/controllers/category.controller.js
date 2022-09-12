import { pool } from "../db.mysql.js";

//obtener listado de categorias
export const getCategorys = async (req, res)=>{
    try {
        const [result] = await pool.query(
          "SELECT * FROM category ORDER BY name ASC"
        );
        if (result.length === 0)
          return res.status(404).json({ message: "Category not found" });
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

