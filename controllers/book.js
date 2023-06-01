const express = require('express');
const router = express.Router();
const Book = require('../models/bookSchema');

// //GET /books
exports.books =  async (req, res) =>{
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({error: "internal server error"});
    }
};

//get //books/:id
exports.booksByID = async (req, res) =>{
    try {
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(404).json({error:"Book not found"});
        }
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
};

//POST /books
exports.booksPost = async (req, res) =>{
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book)
    } catch (error) {
        res.status(400).json({error:"invalid data"});
    }
};


//PUT /books/:id
exports.updateBook = async (req, res) =>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!book){
            return res.status(404).json({error: "Book not found"});
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({error: "Invaild data"});
    }
};


exports.deleteBook = async  (req, res) =>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({error: "Book Not found"});
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
};
