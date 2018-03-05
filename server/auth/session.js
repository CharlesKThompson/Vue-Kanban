let session = require("express-session")
let mongoStore = require("connect-mongodb-session")(expressSession)

let store = new mongoStore({
    uri:'mongodb://test:test@ds012538.mlab.com:12538/vue-kanban',
    collection: "Sessions"
})

store.on("error", function(err) {
    console.log(err)
})

module.exports = session({
    secret: "Stale Twizzlers Suck!", 
    cookie: {
        maxAge: 1000*60*60*24*7*36 //36 week session
    },
    store:store,
    resave: true,
    saveUninitialized: true
})