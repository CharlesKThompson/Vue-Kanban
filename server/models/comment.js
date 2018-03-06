let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "Comment"

let schema = new Schema({
    comment: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() },
    creatorId: { type: ObjectId, ref: 'User', required: true},
    taskId: {type: ObjectId, ref: 'Task', required: true },
    listId: {type: ObjectId, ref: 'List', required: true },
    boardId: {type: ObjectId, ref: 'Board', required: true}
    //add collaborator later on
})



module.exports = mongoose.model(schemaName, schema)