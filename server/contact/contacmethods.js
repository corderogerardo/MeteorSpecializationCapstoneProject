Meteor.methods({
 sendEmail: function (from,to, subject, text) {
	      Email.send({
	      from: from,
	      to: to,
	      subject: subject,
	      text: text,
	       headers: {"X-SMTPAPI": {
				      "filters": {
				        "templates": {
				          "settings": {
				            "enable": 1,
				            "template_id": "986cde3a-2d44-4710-b933-0b778a75af8a"
				          }
				        }
				      }
    				},
    				"Content-Type" : "text/html"
  			}	 
	    });
	  }
});