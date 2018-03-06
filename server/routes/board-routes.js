var router = require("express").Router();
var Boards = require("../models/board");

//Create a board
router.post("/boards", (req, res, next) => {
    req.body.creatorId = req.session.uid

    Boards.create(req.body)
        .then(board => {
            res.send(board)
        })
        .catch(next)
})

//Get a board
router.get("/boards/:boardid", (req, res, next) => {
    Boards.findById(req.params.boardid)
        .then(board => {
            return res.send(board)
        })
        .catch(next)
})

//Put a board
router.put("/boards/:boardid", (req, res, next) => {
    Boards.findByIdAndUpdate(req.params.boardid, req.body)
        .then(board => {
            res.send({ message: "Successfully updated board", data: board })
        })
        .catch(next)
})

//Delete a board
router.delete("/boards/:boardid", (req, res, next) => {
    Boards.findOneAndRemove({ creatorId: req.session.uid, _uid: req.params.boardid })
        .then(board => {
            if (!Boards) {
                res.status(401).send({ error: "Not authorized to remove board" })
            } else {
                res.send({ message: "Successfully deleted board" })
            }
        })
        .catch(next)
})
    


module.exports = {router}