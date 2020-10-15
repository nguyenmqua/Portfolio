var express = require("express")
var router = express.Router()
var db = require("../models");
router.get("/", function(req,res){
    res.render("index")
})

router.get("/portfolio", function(req,res){
    res.render("portfolio")
})

router.get("/contact", function(req,res){
    res.render("contact")
})

router.post("/api/message", function(req,res){
    console.log(req.body)
    db.Contact.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    .then(function(data){
        console.log(data)
        // res.redirect(307, "/")
    })
    .catch(function(err) {
        console.log("error" + err)
      });
})

module.exports = router