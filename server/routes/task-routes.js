var router = require("express").Router();
var Tasks = require("../models/task");

// //Create a task
// router.post("/tasks", (req, res, next) => {
//     req.body.creatorId = req.session.uid

//     Tasks.create(req.body)
//         .then(task => {
//             res.send(task)
//         })
//         .catch(next)
// })

// //Get a task
// router.get("/tasks/:taskid", (req, res, next) => {
//     Tasks.findById(req.params.taskid)
//         .then(task => {
//             return res.send(task)
//         })
//         .catch(next)
// })

// //Put a task
// router.put("/tasks/:taskid", (req, res, next) => {
//     Tasks.findByIdAndUpdate(req.params.taskid, req.body)
//         .then(task => {
//             res.send({ message: "Successfully updated task", data: task })
//         })
//         .catch(next)
// })

// //Delete a task
// router.delete("/tasks/:taskid", (req, res, next) => {
//     Tasks.findOneAndRemove({ creatorId: req.session.uid, _uid: req.params.taskid })
//         .then(task => {
//             if (!Tasks) {
//                 res.status(401).send({ error: "Not authorized to remove task" })
//             } else {
//                 res.send({ message: "Successfully deleted task" })
//             }
//         })
//         .catch(next)
// })
    


module.exports = {router}