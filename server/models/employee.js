
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");



const employeeSchema = new mongoose.Schema({
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
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhotoURL: {
    type: String,
  },
  URL1: {
    type: String,
  },
  URL2: {
    type: String,
  },
  URL3: {
    type: String,
  },
  URL4: {
    type: String,
  },
  URL5: {
    type: String,
  },
  URL6: {
    type: String,
  },
  URL7: {
    type: String,
  },
  URL8: {
    type: String,
  },
  URL9: {
    type: String,
  },
  appraisalStatus: {
    type: Boolean,
    default: false, // Default value is false, change it accordingly
  },
});

employeeSchema.methods.generateAuthToken = function () {
  	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
  		// expiresIn: "7d",
     
  	});	
    	
    	// console.log(token);

  	return token;
    
  };


const Employee = mongoose.model('employee', employeeSchema);

module.exports = {Employee};
