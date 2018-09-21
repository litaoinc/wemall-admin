import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId

const Schema = mongoose.Schema({
	types   : [{
		type: ObjectId, 
		ref : 'classify',
	}],
	name     : String,
    thumb    : String,
	price    : Number,
	stock	 : Number,
	spec     : Array,
	remark   : String,
	images   : Array,
	create_at: {
		type   : Date,
		default: Date.now(),
	},
	update_at: Date,
})

export default mongoose.model('goods', Schema)