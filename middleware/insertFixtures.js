const { products } = require("../fixtures");

const insertFixtures = async (req, res, next) => {
    const productsFromDb = await req.database.getAll('products');
    if (productsFromDb.length === 0) {
        req.database.insertMany('products', products);
        next();
    } else {
        next('route');
    }
}

module.exports = insertFixtures;