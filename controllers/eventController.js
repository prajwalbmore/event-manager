const { default: mongoose } = require('mongoose');
const Event = require('../models/eventModel');

    async function addEvent(req,res){

        try {
            const newEvent = new Event(req.body);
            const result = await newEvent.save();
            res.status(200).send({message :"Event added successfully",task : result});
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async function getAllEvent(req,res){
        try {
            result = await Event.find({},{__v:0});
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }


    async function updateEvent(req,res){
        try {
            const event = await Event.findByIdAndUpdate(req.params.id,req.body,{new : true});
            if (!Event) {
                res.status(400).send({message : 'Event not found'});
            }
            res.status(200).send({message : 'Event Updated',event});
        } catch (error) {
            res.status(500).send(error);
        }
    }



    async function deleteEvent(req,res){
        const id = req.params.id;
        try {
            const event = await Event.findByIdAndDelete(id);
            if(!event){
                res.status(400).send({message : 'Event not found'});
            }
            res.status(200).send({message : 'Event Deleted',event});
        } catch (error) { 
            res.status(500).send(error);
        }
    } 
 

    module.exports = {
        addEvent,
        getAllEvent,
        updateEvent,
        deleteEvent
    }