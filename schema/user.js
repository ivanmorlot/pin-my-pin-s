class UserSchema {
    constructor(name, role, email, mdp, address){
        this.name = name;
        this.email = email;
        this.mdp = mdp;
        this.address = address;
        this.role = role;
    }

    static async createSchema(database){
        const usersSchema = new UserSchema();
        return database.createSchema("users", {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        required: Object.keys(usersSchema)
                    }
                }
            })
    }
}

module.exports = UserSchema