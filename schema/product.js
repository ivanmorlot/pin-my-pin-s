class ProductSchema {
    constructor(name, image, price, description, color, license, stock){
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
        this.color = color;
        this.license = license;
        this.stock = stock;
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