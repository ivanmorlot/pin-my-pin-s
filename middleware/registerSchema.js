const { UserSchema, ProductSchema } = require("../schema");

const registerSchemas = (req, res, next) => {
    Promise
        .all([
            UserSchema.createSchema(req.database),
            ProductSchema.createSchema(req.database),
        ])
        .then(() => {
            next();
        })
        .catch(error => {
            next(error);
        });
}

module.exports = registerSchemas;