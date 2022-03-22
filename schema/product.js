class ProductSchema {
    constructor(name, image, price, description){
        this.name = name;
        this.name = image;
        this.price = price;
        this.description = description;
    }

    static async createSchema(database){
        if(this.database) return
        const productsSchema = new ProductSchema();
        const createdProductSchema = database.createSchema("users",{
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: Object.keys(productsSchema)
                }
            }
        })
        this.database = database;
        return createdProductSchema;
    }
}

module.exports = ProductSchema;