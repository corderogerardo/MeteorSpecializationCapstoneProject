Template.contact.events({
	"submit .js-save-contact-form":function(event){
		event.preventDefault();
		const fromemail = $("#email").val();
		const subjectcontact = $("#subject").val();
		const message = $("#message").val();
			Meteor.call('sendEmail',
				            fromemail,
				             'cordero.gerard@gmail.com, ',
				            'From ClinicalME '+subjectcontact,
				           message);
				$('.js-save-contact-form').trigger('reset');
				$('#modal-contact').modal('hide');
	}
});
