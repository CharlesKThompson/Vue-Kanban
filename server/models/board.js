let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.Schema.ObjectId
let SchemaName = "Board"

let schema = new Schema({
    title: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() },
    creatorId: { type: ObjectId, ref: models.user.name, required: true}
    //add collaborator later on
})



module.exports = mongoose.model(schemaName, schema)