const mongoose = require('mongoose');
const { Schema } = mongoose;

// create a schema for register form

const userSchema = new Schema(
	{
		Firstname:{
			type: String,
			required: true,
		},
		Lastname:{
			type: String,
			required: true,
		},
		Email:{
			type: Schema.Types.Mixed,
			required: true,
		},
		Phonenumber:{
			type: Number,
			maxLength: 11
		},
		Gender:{
			type: String,
			enum: [`Male`, `Female`, `Others`]
		},
		DOB:{
			type: Date,
		},
		Address:{
			type: String,
			maxLength: 50,
			required: true,
		},
		City:{
			type: String,
			maxlength: 20,
			required: true,
		},
		State:{
			type: String,
			maxLength: 30,
			required: true,
		},
		Country:{
			type: String,
			maxLength: 30,
			required: true,
		},
		Password:{
			type: Schema.Types.Mixed,
			required: true,
			maxLength: 20
		},
		ConfirmPassword:{
			type: Schema.Types.Mixed,
			required: true,
			maxLength: 20
		},
	},
	{
		timestamps: true,
	}
)

//Create Model
const User= mongoose.model('User', userSchema);

//Export Model
module.exports = User;