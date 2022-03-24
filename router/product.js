const { Router } = require("express");

const productRouter = Router();

productRouter.get("/products", async (request, response) => {
    const products = await request.database.getAll("products");
    response
        .status(200)
        .json(products);
});

productRouter.get("/product/:id", (request, response, next) => {
    const { id } = request.params;
    request.database
        .get("products", id)
        .then((result) => response
                .status(200)
                .json(result))
        .catch(e => next(e));
});

productRouter.post("/products", (request, response, next) => {
    request.database
        .insertMany("products", request.body)
        .then(() => response
            .status(201)
            .json({
                content: "resources created successfully",
            }))
        .catch(e => next(e));
});

productRouter.put("/product/:id",(request, response, next) => {
    const { id } = request.params;
    request.database
        .update("products", id, request.body)
        .then(() => response
            .status(204)
            .json({
                content: "resource updated successfully",
            }))
        .catch(e => next(e));
});

productRouter.delete("/product/:id", (request, response, next) => {
    const { id } = request.params;
    request.database
        .delete("products", id)
        .then(() => response
            .status(200)
            .json({
                content: "resource deleted successfully",
            }))
        .catch(e => next(e))
});

module.exports = productRouter;
