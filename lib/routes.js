Router.configure({
	layoutTemplate:'layout',
	fastRender:true
});
Router.route('/', {
	template: 'home',
	fastRender:true
    });
Router.route('/about', {
	template: 'about',
	fastRender:true
   });
Router.route('/services', {
	template: 'services',
	fastRender:true
    });
Router.route('/contact', {
	template: 'contact',
	fastRender:true
   });
Router.route('/appointments', {
	template: 'appointments',
	fastRender:true
   });
Router.route('/mydashboard', {
	template: 'mydashboard',
	fastRender:true
   });