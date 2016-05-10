Meteor.startup(function () {
	/*credentials*/
	process.env.MAIL_URL = 'smtp://clincalme:clinical-mail.123@smtp.sendgrid.net:587';
});