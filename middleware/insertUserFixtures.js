const { users } = require("../fixtures");

const insertUserFixtures = async (req, res, next) => {
    const usersFromDb = await req.database.getAll('users');

    if (usersFromDb.length === 0) {
        req.database.insertMany('users', users);
        next();
    } else {
        next('route');
    };
}

module.exports = insertUserFixtures;