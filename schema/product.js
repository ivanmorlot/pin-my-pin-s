class ProductSchema {
    constructor(name, image, price, description){
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    }

    static async createSchema(database){
        const productsSchema = new ProductSchema();
        const createdProductSchema = database.createSchema(
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

        return createdProductSchema;
    }
}

module.exports = ProductSchema;