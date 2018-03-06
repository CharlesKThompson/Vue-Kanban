var router = require("express").Router();
var Boards = require("../models/board");

router.post("/api/boards/", (req, res, next) => {
    req.body.creatorId = req.session.uid

    Boards.create(req.body)
     .then(board => {
         res.send(board)
     })
     .catch(next)
})

router.get("/api/boards")