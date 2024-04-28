const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({

	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String },
	name: {
		type: String,
		required: true,
	},
	college: {
		type: String,
		required: true,
	},
	department: {
		type: String,
		required: false,
	},
	mobile: {
		type: String,
		required: true,
	},
	profilePhotoURL: {
		type: String,
	},
});


adminSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY1, {
		// expiresIn: "7d",
	});
	return token;
};

const Admin = mongoose.model("admin", adminSchema);



module.exports = { Admin };




