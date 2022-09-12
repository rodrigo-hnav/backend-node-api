import { Router } from "express";
import { getProducts,
    getProductsByName,
    getProductByCategory,
    getProductsByOrderPrice,
    getProductsByOrderPriceCategory,
    getProductsByNamePrice,
 } from "../controllers/products.controllers.js";
import {getCategorys} from "../controllers/category.controller.js";


const router = Router()

router.get('/products', getProducts)

router.get('/productsbyname/:name', getProductsByName)

router.get('/productbycategory/:category', getProductByCategory)

router.get('/productbyorderprice/:order', getProductsByOrderPrice)

router.get('/productbyorderpricecategory/:id&:order', getProductsByOrderPriceCategory)

router.get('/productsbynamepriceorder/:name&:order', getProductsByNamePrice)

router.get('/categorys', getCategorys)

export default router;


