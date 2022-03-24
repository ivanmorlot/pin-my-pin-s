const { products } = require("../fixtures");

const insertProductFixtures = async (req, res, next) => {
    const productsFromDb = await req.database.getAll('products');

    if (productsFromDb.length === 0) {
        req.database.insertMany('products', products);
        next();
    } else {
        next('route');
    };
}

module.exports = insertProductFixtures;