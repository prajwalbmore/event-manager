const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref:'Event'},
    title : {type : String},
    description : {type : String},
    dateTime : {type : Date}
});

const Event = mongoose.model("Event",eventSchema);
module.exports = Event;


// {
//     "userId" :"",
//     "title":"Birthday Party",
//     "description":"75th Birthday of CEO",
//     "dateTime":"2024-7-25"
// }