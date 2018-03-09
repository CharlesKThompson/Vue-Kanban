var express = require("express")
var bp = require("body-parser")
var cors = require("cors")
require("./db/mlab-config");

var server = express()
var port = process.env.PORT || 3000;

var authRoutes = require("./auth/auth")
var session = require("./auth/session")

var userRoutes = require("./routes/user-routes")
var boardRoutes = require("./routes/board-routes") //come back to this

var whitelist = ['http://localhost:8080', 'https://kanbanception.herokuapp.com/'];
var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

server.use(cors(corsOptions));
server.use(session)
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))
server.use(express.static(__dirname + "/../public/dist"))

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