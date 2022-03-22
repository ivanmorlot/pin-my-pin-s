const { Router } = require("express");
const { products } = require("../fixtures/products")

const productRouter = Router();

productRouter.get('/products',(request, response) => {
    response.status(200).json(products)
});


module.exports = productRouter;