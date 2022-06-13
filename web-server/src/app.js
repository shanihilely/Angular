const path = require("path")
const express = require("express")
const hbs = require("hbs")

console.log(__dirname)
console.log(path.join(__dirname, "../public"))

const app = express()

//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewPath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

//setup hab=ndlebars engine and view location
app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get("", (req, res) => {
    res.render("index", {
        title: "weather app",
        name:"shani"
    })
})


app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name:"shani"
    })
})


app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help Me",
        name:"shani"
    })
})

app.get("/weather", (req, res) => {
    res.send({
        forcast:  "hot",
        location:"haifa"
    })
})


app.listen(3000, () => {
    console.log("server is up on port 3000.")
})