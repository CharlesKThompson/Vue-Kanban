var router = require("express").Router();
var Boards = require("../models/board");

//Creat a board
router.post("/api/boards/", (req, res, next) => {
    req.body.creatorId = req.session.uid

    Boards.create(req.body)
     .then(board => {
         res.send(board)
     })
     .catch(next)
})

//Get a board
router.get("/api/boards/:boardid", (req, res, next) => {
    Boards.findById(req.params.boardid)
    .then(board => {
        return res.send(board)
    })
    .catch(next)
})

//Put a board
router.put("/api/boards/:boardid", (req, res, next) => {
    Boards.findByIdAndUpdate(req.params.boardid, req.body)
        .then(board => {
            res.send({message: "Successfully updated post", data: board})
        })
        .catch(next)
    })

    //Delet a board
