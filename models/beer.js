const {Schema, model} = require('mongoose');

const beerSchema = new Schema({
    // id: Number,
    name: String, 
    style: String, 
    description: String, 
    abv: Number,
    ibu: Number,
    Volume: {
      val: Number, 
      unit: String
    },
    boil:{
      value: Number,
      unit: String, 
    },
    method:{
      mash: {
        temp: Number, 
        duration: Number,
      },  
      ferment: {
        temp: Number, 
        time: String
      }
    },
    ingredients: {
        malt: [
          {
            name: String,
            amount: {
              value: Number,
              unit: String
            }
          }
        ],
        hops: [
          {
            name: String,
            amount: {
              value: Number,
              unit: String
             },
             add: String,
             attribute: String
           },
        ],
        yeast: String
      },
    notes: [{type: Schema.Types.ObjectId, ref:'Log'}]
  });

const Beer = model('Beer', beerSchema);

module.exports = Beer;
  