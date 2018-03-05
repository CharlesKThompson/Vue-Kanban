let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.types.ObjectId
let SchemaName = "User"
let bcrypt = require("bcryptjs")
const SALT_FACTOR = 12

let schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    created: { type: Number, required: true, default: Date.now() }

})

module.exports = mongoose.model(schemaName, schema)