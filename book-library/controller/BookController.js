const express = require('express');
const Book = require('../models/Book');
const { validationResult } = require('express-validator');

const get_books = (req, res, next) => {
    Book.find({}, function(err, data) {
        if (err) 
        res.json({
            success: false,
            data: err,
        });
        else
        res.json({
            success: true,
            data: data
        })
    })
}

const add_book = (req, res, next) => {
    const data = req.body;
    const errors = validationResult(req)
    if(errors.isEmpty){
        return res.status(400).json({
            success: false,
            errors: errors.errors
        })
    } else {
    Book.create(data, function (err, data) {
        if(err) res.json({
            success: false,
            data: err
        });
        else
        res.json({
            success: true,
            data: data
        })
    })}
}

const delete_books = (req, res, next) => {
    Book.findOneAndDelete({isbn: req.params.isbn})
        .then((data) => res.json(data))
        .catch(err => res.json({success: false, data: err}))
}

const update_book = (req, res, next) => {
    const data = req.body;
    Book.updateOne({isbn: req.params.isbn}, data, function (err, data) {
        if(err) res.json({
            success: false,
            data: err,
        });
        else
        res.json({
            success: true,
            data: data,
        });
    });
}

module.exports = {
    get_books,
    add_book,
    delete_books,
    update_book
}