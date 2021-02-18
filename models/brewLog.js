const {Schema, model} = require('mongoose');

const logSchema = new Schema({
    title: String, 
    notes: String,
},{
    timestamps: true
})

const Log = model('Log', logSchema);

module.exports = Log;