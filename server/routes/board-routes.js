var router = require("express").Router();
var Boards = require("../models/board");
var Lists = require("../models/list")
var Tasks = require("../models/task")
var Comments = require("../models/comment") 

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

//Get all boards
router.get("/boards", (req, res, next) => {
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
    

//Create a list
router.post("/boards/:boardid/lists", (req, res, next) => {
    req.body.creatorId = req.session.uid

    Lists.create(req.body)
        .then(list => {
            res.send(list)
        })
        .catch(next)
})

//Get a list
router.get("/boards/:boardid/lists/:listid", (req, res, next) => {
    Lists.findById(req.params.listid)
        .then(list => {
            return res.send(list)
        })
        .catch(next)
})

//Put a list
router.put("/boards/:boardid/lists/:listid", (req, res, next) => {
    Lists.findByIdAndUpdate(req.params.listid, req.body)
        .then(list => {
            res.send({ message: "Successfully updated list", data: list })
        })
        .catch(next)
})

//Delete a list
router.delete("/boards/:boardid/lists/:listid", (req, res, next) => {
    Lists.findOneAndRemove({ creatorId: req.session.uid, _uid: req.params.listid })
        .then(list => {
            if (!Lists) {
                res.status(401).send({ error: "Not authorized to remove list" })
            } else {
                res.send({ message: "Successfully deleted list" })
            }
        })
        .catch(next)
})

//Create a task
router.post("/boards/:boardid/lists/:listid/tasks", (req, res, next) => {
    req.body.creatorId = req.session.uid

    Tasks.create(req.body)
        .then(task => {
            res.send(task)
        })
        .catch(next)
})

//Get a task
router.get("/boards/:boardid/lists/:listid/tasks/:taskid", (req, res, next) => {
    Tasks.findById(req.params.taskid)
        .then(task => {
            return res.send(task)
        })
        .catch(next)
})

//Put a task
router.put("/boards/:boardid/lists/:listid/tasks/:taskid", (req, res, next) => {
    Tasks.findByIdAndUpdate(req.params.taskid, req.body)
        .then(task => {
            res.send({ message: "Successfully updated task", data: task })
        })
        .catch(next)
})

//Delete a task
router.delete("/boards/:boardid/lists/:listid/tasks/:taskid", (req, res, next) => {
    Tasks.findOneAndRemove({ creatorId: req.session.uid, _uid: req.params.taskid })
        .then(task => {
            if (!Tasks) {
                res.status(401).send({ error: "Not authorized to remove task" })
            } else {
                res.send({ message: "Successfully deleted task" })
            }
        })
        .catch(next)
})

//Create a comment
router.post("/boards/:boardid/lists/:listid/task/:taskid/comments", (req, res, next) => {
    req.body.creatorId = req.session.uid

    Comments.create(req.body)
        .then(comment => {
            res.send(comment)
        })
        .catch(next)
})

//Get a comment
router.get("/boards/:boardid/lists/:listid/tasks/:taskid/comments/:commentid", (req, res, next) => {
    Comments.findById(req.params.commentid)
        .then(comment => {
            return res.send(comment)
        })
        .catch(next)
})

//Put a comment
router.put("/boards/:boardid/lists/:listid/tasks/:taskid/comments/:commentid", (req, res, next) => {
    Comments.findByIdAndUpdate(req.params.commentid, req.body)
        .then(comment => {
            res.send({ message: "Successfully updated comment", data: comment })
        })
        .catch(next)
})

//Delete a comment
router.delete("/boards/:boardid/lists/:listid/taks/:taskid/comments/:commentid", (req, res, next) => {
    Comments.findOneAndRemove({ creatorId: req.session.uid, _uid: req.params.commentid })
        .then(comment => {
            if (!Comments) {
                res.status(401).send({ error: "Not authorized to remove comment" })
            } else {
                res.send({ message: "Successfully deleted comment" })
            }
        })
        .catch(next)
})

module.exports = {router}