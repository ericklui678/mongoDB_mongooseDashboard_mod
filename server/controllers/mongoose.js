var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

module.exports = {
    index: function (req, res){
        Mongoose.find(function(err, data){
            if(err) {console.log(err);}
            res.render('index', {mongooses: data})
        }).sort({'createdAt': -1})
    },
    new: function (req, res){
        res.render('new');
    },
    show: function (req, res){
        Mongoose.find({_id: req.params.id}, function (err, mongooses){
            res.render('info', {mongooses: mongooses[0]});
        })
    },
    edit: function (req, res){
        res.render('edit', {id: req.params.id})
    },
    create: function (req, res){
        Mongoose.create(req.body, function (err, data){
            if(err) {console.log(err);}
            res.redirect('/');
        })
    },
    update: function (req, res){
        Mongoose.update({_id: req.params.id}, req.body, function (err, data){
            if(err) {console.log(err);}
            res.redirect('/');
        })
    },
    remove: function (req, res){
        Mongoose.remove({_id: req.params.id}, function (err, data){
            res.redirect('/');
        })
    },
}
