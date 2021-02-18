const BrewLog = require('../models/brewLog.js');
const Beer = require('../models/beer');
const express = require('express');
const brewLogRouter = express.Router();

//Create
brewLogRouter.post('/', async (req,res)=>{
    try{
        const {title, notes, beerID} = req.body
        const newLog = await BrewLog.create({
            title,
            notes
        });
        const foundBeer = await Beer.findById(beerID);
        const beerNotes = foundBeer.notes
        const updateBeer = await Beer.findByIdAndUpdate(beerID,
            {notes: [...beerNotes, newLog._id]})

        res
            .status(200)
            .json(newLog)
    }catch(error){
        res.status(400).json(error)
    }
})


/// Index
brewLogRouter.get('/', async (req,res)=>{
    try{
        const foundLogs = await BrewLog.find({})
        res
            .status(200)
            .json(foundLogs)
    }catch(error){
        res.status(400).json(error)
    }
})

//Show

brewLogRouter.get('/:id', async(req,res)=>{
    try{
        const foundLog = await BrewLog.findById(req.params.id)
        res
            .status(200)
            .json(foundLog)
    } catch(error){
        res
            .status(400)
            .json(error)
    }
})

//Destoy

brewLogRouter.delete('/:id', async (req,res)=>{
    try{
        const foundLog = await BrewLog.findByIdAndDelete(req.params.id)
            res
                .status(200)
                .json(foundLog)
    }catch(error){
        res 
            .status(400)
            .json(error)
    }
})

//Update

brewLogRouter.put('/id', async (req,res)=>{
    try{
        const foundLog = await BrewLog.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res
            .status(200)
            .json(foundLog)
    }catch(error){
        res
            .status(400)
            .json(error)
    }
})

module.exports = brewLogRouter;