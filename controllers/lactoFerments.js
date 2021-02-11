const Lacto = require('../models/lacto-ferment');
const express = require('express');
const lactoRouter = express.Router();

//Create 
lactoRouter.post('/', async(req,res)=>{
    try{
        const newLacto = await Lacto.create(req.body);
        res
            .status(200)
            .json(newLacto)
    }catch(error){
        res.status(400).json(error)
    }
})

//index
lactoRouter.get('/', async(req,res)=>{
    try{
        const foundLacto = await Lacto.find({});
        res
            .status(200)
            .json(foundLacto)
    }catch(error){
        res.status(400).json(error)
    }
})
//Show
lactoRouter.get('/:id', async(req,res) => {
    try{
        const foundLacto = await Lacto.findById(req.params.id);
        res
            .status(200)
            .json(foundLacto)
    }catch(error){
        res.status(400).json(error)
    }
})
//Delete
lactoRouter.delete('/:id', async(req,res)=>{
    try{
    const foundLacto = await Lacto.findByIdAndDelete(req.params.id);
        res
            .status(200)
            .json(foundLacto)
    } catch(error){
        res.status(400).json(error)
    }
})
//Update
lactoRouter.put('/:id', async (req,res)=>{
    try{
        const foundLacto = await Lacto.findByIdAndUpdate(req.params.id, req.body, {new:true});
            res
                .status(200)
                .json(foundLacto)
        } catch(error){
            res.status(400).json(error)
        }
})

module.exports = lactoRouter;