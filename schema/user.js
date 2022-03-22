class UserSchema {
    constructor(name, role, email, mdp, address){
        this.name = name;
        this.email = email;
        this.mdp = mdp;
        this.address = address;
        this.role = role;
    }

    static async createSchema(database){
        if(this.database) return
        const usersSchema = new UserSchema();
        const createdUsersSchema = database.createSchema("users",{
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: Object.keys(usersSchema)
                }
            }
        })
        this.database = database;
        return createdUsersSchema
    }
}

module.exports = UserSchema