// var router = require("express").Router();
// var Lists = require("../models/list");

// //Create a list
// router.post("/lists", (req, res, next) => {
//     req.body.creatorId = req.session.uid

//     Lists.create(req.body)
//         .then(list => {
//             res.send(list)
//         })
//         .catch(next)
// })

// //Get a list
// router.get("/lists/:listid", (req, res, next) => {
//     Lists.findById(req.params.listid)
//         .then(list => {
//             return res.send(list)
//         })
//         .catch(next)
// })

// //Put a list
// router.put("/lists/:listid", (req, res, next) => {
//     Lists.findByIdAndUpdate(req.params.listid, req.body)
//         .then(list => {
//             res.send({ message: "Successfully updated list", data: list })
//         })
//         .catch(next)
// })

// //Delete a list
// router.delete("/lists/:listid", (req, res, next) => {
//     Lists.findOneAndRemove({ creatorId: req.session.uid, _uid: req.params.listid })
//         .then(list => {
//             if (!Lists) {
//                 res.status(401).send({ error: "Not authorized to remove list" })
//             } else {
//                 res.send({ message: "Successfully deleted list" })
//             }
//         })
//         .catch(next)
// })
    


// module.exports = {router}