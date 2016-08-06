Appoitments = new Mongo.Collection("appoitments");

Appoitments = new SimpleSchema({
  date:{
    type: String,
    label: "Date",
  },
  userid:{
  	type: String, 
  }, 
	motive:{
    type: String,
    label: "Motive",
    max:20
  },
});