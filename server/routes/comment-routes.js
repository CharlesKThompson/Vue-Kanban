// var router = require("express").Router();
// var Comments = require("../models/comment");

// //Create a comment
// router.post("/comments", (req, res, next) => {
//     req.body.creatorId = req.session.uid

//     Comments.create(req.body)
//         .then(comment => {
//             res.send(comment)
//         })
//         .catch(next)
// })

// //Get a comment
// router.get("/comments/:commentid", (req, res, next) => {
//     Comments.findById(req.params.commentid)
//         .then(comment => {
//             return res.send(comment)
//         })
//         .catch(next)
// })

// //Put a comment
// router.put("/comments/:commentid", (req, res, next) => {
//     Comments.findByIdAndUpdate(req.params.commentid, req.body)
//         .then(comment => {
//             res.send({ message: "Successfully updated comment", data: comment })
//         })
//         .catch(next)
// })

// //Delete a comment
// router.delete("/comments/:commentid", (req, res, next) => {
//     Comments.findOneAndRemove({ creatorId: req.session.uid, _uid: req.params.commentid })
//         .then(comment => {
//             if (!Comments) {
//                 res.status(401).send({ error: "Not authorized to remove comment" })
//             } else {
//                 res.send({ message: "Successfully deleted comment" })
//             }
//         })
//         .catch(next)
// })
    


// module.exports = {router}