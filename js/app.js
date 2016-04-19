var contact = {
	firstName: $('#firstName').val(),
	lastName: $('#lastName').val(),
	phoneNumber: $('#phoneNumber').val(),
	street: $('#street').val(),
	city: $('#city').val(),
	state: $('#state').val(),
}

$(document).ready(function () {

	var nameLink = contact.firstName + " " + contact.lastName;
	$('#addButton').click(function () {
		console.log(nameLink);
		$('.contact-list').prepend(nameLink);
	});

	$(nameLink).click(function() {
		$('.contact-display').append(contact);
	});
});