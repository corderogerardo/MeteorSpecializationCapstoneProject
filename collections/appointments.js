Appoitments = new Mongo.Collection("appoitments");

Appoitments = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  email:{
    type: String,
    label: "Email",
    max: 200  	
  },
  address:{
    type: String,
    label: "Address",
    max: 200  	
  },
  phone:{
    type: String,
    label: "Phone",
    max: 10  	
  },
  city:{
    type: String,
    label: "City",
    max: 40  	
  },
  state:{
    type: String,
    label: "State",
    max: 40  	
  },
  zipcode:{
    type: String,
    label: "ZipCode",
    max: 10  	
  },
  date:{
    type: String,
    label: "Date",
  },
  userid:{
  	type: String, 
  }, 
  owner:{
  	type: String, 
  }, 
	motive:{
    type: String,
    label: "Motive",
    max:20
  },
 
});