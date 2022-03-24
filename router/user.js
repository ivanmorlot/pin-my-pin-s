const { Router } = require("express");

const userRouter = Router();

userRouter.get("/users", async (request, response) => {
    const users = await request.database.getAll("users");
    response
        .status(200)
        .json(users);
});

userRouter.get("/user/:id", (request, response, next) => {
    const { id } = request.params;
    request.database
        .get("users", id)
        .then((result) => response
                .status(200)
                .json(result))
        .catch(e => next(e));
});

userRouter.post("/users", (request, response, next) => {
    request.database
        .insertMany("users", request.body)
        .then(() => response
            .status(201)
            .json({
                content: "user created successfully"
            }))
        .catch(e => next(e));
});

userRouter.put("/user/:id",(request, response, next) => {
    const { id } = request.params;
    request.database
        .update("users", id, request.body)
        .then(() => response
            .status(204)
            .json({
                content: "user updated successfully"
            }))
        .catch(e => next(e));
});

userRouter.delete("/user/:id", (request, response, next) => {
    const { id } = request.params;
    request.database
        .delete("users", id)
        .then(() => response
            .status(200)
            .json({
                content: "user deleted successfully"
            }))
        .catch(e => next(e))
});

module.exports = userRouter;