var express = require("express")
var bp = require("body-parser")
var cors = require("cors")
require("./db/mlab-config");

var server = express()
var port = 3000

var authRoutes = require("./auth/auth")
var session = require("./auth/session")

var userRoutes = require("./routes/user-routes")
var boardRoutes = require("./routes/board-routes") //come back to this
server.use(cors())
server.use(session)
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))
server.use(authRoutes)

server.use("/api", userRoutes.router)
server.use("/api", boardRoutes.router)

server.use('*', (err, req, res, next) => {
    res.status(400).send(err)
})
console.log("hello")
server.listen(port, () => {
    console.log('Server is running on:', port)
})