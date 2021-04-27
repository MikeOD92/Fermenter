const {Schema, model}= require('mongoose');

const lactoFermentSchema = new Schema({
	name: String, 
	description: String, 
	volume:{
		value:Number,
		unit: String
	},
	ferment:{
		temp: Number,
		duration: String
	},
	ingredients: {
		main: [{
			name: String,
			value: Number,
			unit: String
					},
        ],
		salt: {
				value:Number,
				unit: String
				},
		other: [{
			name: String,
			value: Number,
			unit: String
					},
		]},
    	notes: [{type: Schema.Types.ObjectId, ref:'Log'}]
})

const LactoFerment = model('LactoFerment', lactoFermentSchema)

module.exports = LactoFerment;