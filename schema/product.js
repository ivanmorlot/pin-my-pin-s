class ProductSchema {
    constructor(name, image, price, description){
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    }

    static async createSchema(database){
        const productsSchema = new ProductSchema();
        return database.createSchema(
            "products",
            {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        required: Object.keys(productsSchema),
                    }
                }
            }
        );
    }
}

module.exports = ProductSchema;