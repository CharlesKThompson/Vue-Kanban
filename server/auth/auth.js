let router = require("express").Router()
let Users = require("../models/user")

router.post("/register", (req, res) => {
    Users.create(req.body)
        .then((user) => {
            req.session.uid = user._id
            req.session.save()
            user.password = null
            delete user.password
            res.send(user)
        })
        .catch(err => {
            res.send({ error: err })
        })
})