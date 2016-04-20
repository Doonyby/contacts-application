var contacts = [];

var Contact = function(firstName, lastName, phoneNumber, street) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.address = [];
};

// var address = {
// 	street: document.getElementById('street').value,
// 	city: document.getElementById('city').value,
// 	state: document.getElementById('state').value,
// };


$(document).ready(function () {

	// var nameLink = contact.firstName + " " + contact.lastName;
	// $('#addButton').click(function () {
	// 	console.log(contact.firstName);
	// 	$('.contact-list').prepend(nameLink);
	// });

	// $(nameLink).click(function() {
	// 	$('.contact-display').empty();
	// 	$('.contact-display').append(contact);
	// });
	
	
	// $('#addphone').click(function() {
	// 	var plusPhone = '<input type="text" class="form-control" placeholder="" id="phoneNumber">';
	// 	console.log(plusPhone);
	// 	$('#phone-div').append(plusPhone);
	// });

	$('#addContact').submit(function(event) {
		event.preventDefault();
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var phoneNumber = $('#phoneNumber').val();
		var street = $('#street').val();						
		var newContact = new Contact(firstName, lastName, phoneNumber, street);
		contacts.push(newContact);
	})
	//$('#addAddress').click(function() {
		//var plusAddress =  ;
		//$('#address-div').append(plusAddress);	
	//});
});