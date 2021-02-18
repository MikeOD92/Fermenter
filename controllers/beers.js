const Beer = require('../models/beer');
const express = require('express');
const beerRouter = express.Router();

//Create 
beerRouter.post('/', async(req,res)=>{
    try{
        const newBeer = await Beer.create(req.body);
        res
            .status(200)
            .json(newBeer)
    }catch(error){
        res.status(400).json(error)
    }
})

//index
beerRouter.get('/', async(req,res)=>{
    try{
        const foundBeers = await Beer.find({});
        res
            .status(200)
            .json(foundBeers)
    }catch(error){
        res.status(400).json(error)
    }
})
//Show
beerRouter.get('/:id', async(req,res) => {
    try{
        const foundBeer = await Beer.findById(req.params.id).populate('notes');
        res
            .status(200)
            .json(foundBeer)
    }catch(error){
        res.status(400).json(error)
    }
})
//Delete
beerRouter.delete('/:id', async(req,res)=>{
    try{
    const foundBeer = await Beer.findByIdAndDelete(req.params.id);
        res
            .status(200)
            .json(foundBeer)
    } catch(error){
        res.status(400).json(error)
    }
})
//Update
beerRouter.put('/:id', async (req,res)=>{
    try{
        const foundBeer = await Beer.findByIdAndUpdate(req.params.id, req.body, {new:true}).populate('notes');
            res
                .status(200)
                .json(foundBeer)
        } catch(error){
            res.status(400).json(error)
        }
})

module.exports = beerRouter;
