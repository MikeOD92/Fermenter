const {Schema, model}= require('mongoose');

const lactoFermentSchema = new Schema({
    // id:Number,
	name: String, 
	description: String, 
	volume:{
		value:Number,
		unit: String
	},
	method: {
		ferment:{
			temp: Number,
			duration: String
			}
		},
	ingredients: {
		main: [{
			name: String,
			amount: {
				value: Number,
				unit: String
					},
        }],
		salt: {
			amount:{
				value:Number,
				unit: String
				}
			},
		other: [{
			name: String,
			amount: {
				value: Number,
				unit: String
					},
		}],
    notes: [{type: Schema.Types.ObjectId, ref:'Log'}]
}

})

const LactoFerment = model('LactoFerment', lactoFermentSchema)

module.exports = LactoFerment;