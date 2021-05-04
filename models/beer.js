const {Schema, model} = require('mongoose');

const beerSchema = new Schema({
    name: String, 
    style: String, 
    description: String, 
    abv: Number,
    ibu: Number,

    volume: {
      value: Number, 
      unit: String
    },

    method:{  
      mash: {
        temp: Number, 
        duration: String,
      },    
      wort: String,
      
      ferment: {
        temp: Number, 
        time: String
      }
    },
    ingredients: {
        malt: [
          {
            name: String,
            value: Number,
            unit: String
          }
        ],
        hops: [
          {
            name: String,
            value: Number,
            unit: String,
            sched: String,
          },
        ],
        yeast: String
      },
    notes: [{type: Schema.Types.ObjectId, ref:'Log'}]
  });

const Beer = model('Beer', beerSchema);

module.exports = Beer;
  