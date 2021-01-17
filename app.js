//jshint conversion
//day-1: sunday  day-2: monday   day-5: friday

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));


app.get("/", (req, res) => {

    let today = new Date();

    let  options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };


    let day = today.toLocaleDateString("en-US", options);

    

    res.render("list", {
        kindofDay: day,
        newListItems: items
    });

});

app.post("/", (req, res) => {
    var item = req.body.newItem;
    console.log(item);

    items.push(item);
    
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is working");
});