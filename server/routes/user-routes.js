//THIS ROUTE IS PART OF STRETCH GOALS, PART OF IMPLEMENTING COLLABORATIVE USERS
let router = require("express").Router()
let Users = require("../models/user")
let Boards = require("../models/board")

router.post("/users", (req, res, next) => {
    console.log("posting user")
   Users.find({username: req.body})
       .then(user => {
           if (user){
               return res.send(user)
           } else {
               return res.status(404).send({error: "user not found!"})
           }
       })
       .catch(next)
   Users.create(req.body)
       .then(user => {
           res.send(user);
       })
       .catch(next);
});
module.exports = { router }

