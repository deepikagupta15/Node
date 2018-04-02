const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
		city:{
			type:String,
			required:true,
		},
		state:{
			type:String,
			required:true,
		}
});

const EmployeeSchema = mongoose.Schema({
	empId: {
		type:Number,
		required:true
	},
	
	empName: {
		type:String,
		required:true
	},
	
	empSalary: {
		type:Number,
		required:true
	},
	empAddress : [AddressSchema]
});

// collection  name mapped to the Mongoose Schema, employees , Employee
var employees = mongoose.model('employees', EmployeeSchema);
module.exports = employees;
