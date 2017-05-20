const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
var db = require('./models/db');



var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/contact');

app.get('/contact',function(req,res){
    
    db.find({},function(err,data){
        if(err) return console.log(err);
        if(!data) return res.json({"messege": "No data"});
       res.json(data);
    });

});

app.get('/contact/:id',function(req,res){
    var id = req.params.id;
    db.find({"_id": id},function(err,data){
        if(err) return console.log(err);
        if(!data) return res.json({"messege": "No data"});
        return res.json(data);
    });

});

app.post('/contact',function(req,res){
    var data = new db(req.body);
    data.save(function(err){
        if(err) return console.log(err);
    });
    res.end();
});

app.delete('/contact/:id',function(req,res){
    var id = req.params.id;
    db.remove({"_id": id},function(err){
        if(err) return console.log(err);
    });
    res.end();
});

app.post('/contact/:id',function(req,res){
    var id = req.params.id;
    console.log(id);
    db.update({ _id: id },{$set:{name: req.body.name , email: req.body.email, num: req.body.num}},function(err){
        if(err) return console.log(err);
    });
    res.end();
});


app.listen(port,function(err){
    if(err) return console.log(err);
    console.log("we working at  " + port);
});



