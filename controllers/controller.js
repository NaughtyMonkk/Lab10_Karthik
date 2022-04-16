const model = require("../models/model");

exports.getbooks = (req, res, next) => {
    model.find({}, (error, model) => {
        if (error) next(error);
        
        req.data = model;
        console.log(req.data); 
        res.render("home", { books: req.data });
    });
};

exports.getbook = (req, res, next) => {
    let number = req.params.number;
   
    model.find({number: number}, (error, model) => {
        console.log(number);

        if (error) next(error);
        req.data = model;
        console.log(req.data);
        res.render(number, { books: req.data });
    });
};