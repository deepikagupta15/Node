const express = require('express');
const router = express.Router(); // Router Object : appln to create 
//different routes that map to the HTTP URL patterns

const Joi = require('joi'); // Validation f/w 

var Customers = [
	{"custId":1001,"custName":"Jack","custPhone":4567890123},
	{"custId":1002,"custName":"Aadel","custPhone":8989123456},
	{"custId":1003,"custName":"Jessica","custPhone":9076543214},
	{"custId":1004,"custName":"Sebastian","custPhone":6734567890},
	{"custId":1005,"custName":"Apeksha","custPhone":4567890123},
]
router.get('/', (req,res) => {
	res.send(Customers);
});

router.get('/customers/:id', (req,res) => {
	
	var custObject = Customers.filter( c => {
			
		if(c.custId == req.params.id){
			return true;
		}
	});
	
	if(custObject.length==1) {
		res.send(custObject[0]);
	} else {
		res.status(404).send("No customer with id found");
	}
});

router.post('/customers', (req,res) => {
	// structure of object , describes the rules against which  the request body should get validated. 
	const Schema = {
		custId:Joi.number().required(),
		custName:Joi.string().min(5).required(),
		custPhone:Joi.number().required()
	}
	const result = Joi.validate(req.body,Schema);
	if(result.error){
		res.status(404).send(result.error);
		return;
	}
	
	Customers.push({
		custId:req.body.custId,
		custName: req.body.custName,
		custPhone: req.body.custPhone
	});
	res.send("Customer added!!!");
});

router.put('/customers/:id', (req,res) => {
	flag = false;
	const Schema = {
		custId:Joi.number().required(),
		custName:Joi.string().min(5).required(),
		custPhone:Joi.number().required()
	}
	const result = Joi.validate(req.body,Schema); // request body against the Schema
	if(result.error){
		res.status(404).send(result.error);
		return;
	}
	
	for(i=0;i<Customers.length;i++) {
		if(Customers[i].custId==req.params.id) {
			Customers[i].custId = req.body.custId,
			Customers[i].custName = req.body.custName,
			Customers[i].custPhone = req.body.custPhone
			flag = true;
			break;
		}
	}
	if(flag==false) {
		res.status(404).send("No customer with id found");
	} else {
		res.send("Customer Updated!!!");
	}
}) ;

router.delete('/customers/:id', (req,res) => {
	var custObj = -1;
	for(i=0;i<Customers.length;i++){
		if(Customers[i].custId == req.params.id){
			custObj = i;
		}
	}
	if(custObj === -1) { 
		res.status(404).send("No customer with id found");
	}else {
		Customers.splice(custObj,1);
	}
});
module.exports = router;