// code sent to client and server
// which gets loaded before anything else (since it is in the lib folder)


Histories = new Mongo.Collection("histories");

// set up a schema controlling the allowable 
// structure of comment objects
