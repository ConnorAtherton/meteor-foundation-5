if (Meteor.isClient) {
  $(document).ready(function () {
		// Enable FastClick
		if(typeof FastClick !== 'undefined') {
		  FastClick.attach(document.body);
		}
		$(document).foundation(function (response) {
			console.log(response.errors);
		});
	});
}