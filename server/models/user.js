let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "User"
let bcrypt = require("bcryptjs")
const SALT_FACTOR = 12

//var roles = ["public", "moderator", "admin"];

let schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    created: { type: Number, required: true, default: Date.now() }
    //role: { type: String, enum: roles }


})

schema.statics.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_FACTOR));
};

schema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

schema.methods.changeRole = function(newRole, uid) {
  if (roles.indexOf(newRole) <= roles.indexOf(this.user.role)) {
    this.user.role = newRole;
    this.save();
  }
};

module.exports = mongoose.model(schemaName, schema)