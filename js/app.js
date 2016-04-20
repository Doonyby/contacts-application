var contact = {
	firstName: document.getElementById('firstName').value,
	lastName: document.getElementById('lastName').value,
	phoneNumber: document.getElementById('phoneNumber').value,
	location: [address],
};

var address = {
	street: document.getElementById('street').value,
	city: document.getElementById('city').value,
	state: document.getElementById('state').value,
};


$(document).ready(function () {

	var nameLink = contact.firstName + " " + contact.lastName;
	$('#addButton').click(function () {
		console.log(contact.firstName);
		$('.contact-list').prepend(nameLink);
	});

	$(nameLink).click(function() {
		$('.contact-display').empty();
		$('.contact-display').append(contact);
	});
});