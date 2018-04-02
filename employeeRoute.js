const express = require('express');
const router = express.Router();

// getting access to Employee Schema
const Employee = require('./model/employee');
const Joi = require('joi'); // input validations

router.get('/', (req,res)=> {
	// mongodb method find({object})
	Employee.find(function(err,employees) {
		res.send(employees);
	})
});

router.get('/:state', (req,res) => {
	Employee.find({"empAddress.state":req.params.state}, function(err,employees){
			res.send(employees);
	});
});

router.post('/employee', (req,res) => {
	const Schema = {
		empId: Joi.number().required(),
		empName:Joi.string().min(5).max(50).required(),
		empSalary:Joi.number().required(),
		empAddress : {
			city:Joi.string().min(5).required(),
			state:Joi.string().min(5).required()
		}
	}
	const result = Joi.validate(req.body,Schema);
	if(result.error) {
		res.status(404).send(result.error);
		return;
	}
	
	// all data valid
	let newEmployee = new Employee({
		empId:req.body.empId,
		empName:req.body.empName,
		empSalary:req.body.empSalary,
		empAddress:[
			{
				city:req.body.empAddress.city,
				state:req.body.empAddress.state
			}
		]
	});
	// save() is the mongoose method to insert document in mongodb
	newEmployee.save((err,employee)=>{
		if(err) {
			res.status(404).send("Failed to add Employee to mongo!!");
		} else {
			res.send('Employee added successfully to Mongo!!');
		}
		
	});
});

router.delete('/:id',(req,res)=> {
	Employee.remove({empId:req.params.id}, function(err,result) {
		if(err) {
			res.status(404).send("Failed to delete Employee from mongo!!");
		} else {
			res.send('Employee deleted successfully from Mongo!!');
		}
	});
});

// update employee
router.route('/employee/:id').put(function (req, res) {
	
	const Schema = {
		empId:Joi.number().required(),
		empName:Joi.string().min(5).required(),
		empSalary:Joi.number().required(),
		empAddress :{
			city: Joi.string().min(5).required(),
			state: Joi.string().required()
		}
	}
	const result = Joi.validate(req.body,Schema);
	if(result.error) {
		res.status(404).send(result.error);
		return;
	}
	
    Employee.findOne({empId:req.params.id}, function (err, emp) {
        if (err) {
            res.send(err);
        }
        emp.empId = req.body.empId;
        emp.empName = req.body.empName;
        emp.empSalary = req.body.empSalary;
        emp.empAddress = [
			{
				city:req.body.empAddress.city,
				state:req.body.empAddress.state
			}
		]
					
        emp.save(function (err) {
            if(err) {
				res.status(404).send("Failed to update Employee to mongo!!");
			} else {
				res.send('Employee updated successfully to Mongo!!');
			}
        });

    });
});

module.exports = router;