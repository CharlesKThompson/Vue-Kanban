let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "List"

let schema = new Schema({
    title: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() },
    creatorId: { type: ObjectId, ref: 'User', required: true},
    boardId: {type: ObjectId, ref: 'Board', required: true }
    //add collaborator later on
})



module.exports = mongoose.model(schemaName, schema)