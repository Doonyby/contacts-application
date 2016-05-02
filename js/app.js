var contacts = [];
var numPhoneNumbers = 1;
var numAddresses = 1;

var Contact = function(firstName, lastName, phoneNumbers, addresses) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumbers = phoneNumbers;
	this.addresses = addresses;
};

$(document).ready(function () {

	function getPhoneNumbers() {
		var phoneNumbers = [];
		for (var i=0; i<numPhoneNumbers; i++) {
			var id = "#phoneNumber" + i;
			phoneNumbers.push($(id).val());			
		}
		return phoneNumbers;
	}

	function getAddresses() {
		var addresses = [];
		var address = {};
		var id = "";
		for (var i=0; i<numAddresses; i++) {
			id = "#street" + i;
			address.street = $(id).val();	
			id = "#city" + i;
			address.city = $(id).val();	
			id = "#state" + i;
			address.state = $(id).val();		
			addresses.push(address);
		}	
		return addresses;
	}

	$('#addPhone').click(function () {
		var el = '<h3>Additional Phone Number</h3><input type="text" class="form-control" placeholder="" id="phoneNumber' 
		+ numPhoneNumbers + '"required>';
		$('#phone-div').append(el);
		numPhoneNumbers++;
	})

 	
	$('#addAddress').click(function() {
		var el = '<h3>Additional Address</h3><h3>Street</h3><input type="text" class="form-control" placeholder="" id="street'
		 + numAddresses + '"><h3>City</h3><input type="text" class="form-control" placeholder="" id="city' + numAddresses
		  + '"><h3>State</h3><input type="text" class="form-control" placeholder="" id="state' + numAddresses + '">';
		$('#address-div').append(el);
		numAddresses++;
	});

	$(document).on("click", ".nameList", function() {
		var contactNum = parseInt(($(this).find('span').text()));
		
		var contactInfo= contacts[contactNum].firstName + " " + contacts[contactNum].lastName;
		$('.contact-display').empty();
		$('.contact-display').append(contactInfo);

		for (var k = 0; k< contacts[contactNum].phoneNumbers.length; k++) {
			var totalPhone = contacts[contactNum].phoneNumbers[k];
			if (k === 0) {
				$('.phone-display').append("Phone: " + totalPhone);
			}
			else {
				$('.phone-display').append('<br>' + "Alternate Phone: " + totalPhone);
			}
		};

		for (var j = 0; j < contacts[contactNum].addresses.length; j++) {
			console.log(j);
			var totalAddress = contacts[contactNum].addresses[j];
			console.log(contacts[contactNum].addresses[j]);
			if (j === 0) {
				$('.address-display').append("Address: " + '<br>' + "Street: "
			 + contacts[contactNum].addresses[j].street + "<br>" + "City: " + contacts[contactNum].addresses[j].city
			  + "<br>" + "State: " + contacts[contactNum].addresses[j].state);
			}
			else {
				$('.address-display').append('<br>' + "Alternate Address: " + '<br>' + "Street: "
			 + contacts[contactNum].addresses[j].street + "<br>" + "City: " + contacts[contactNum].addresses[j].city
			  + "<br>" + "State: " + contacts[contactNum].addresses[j].state);
			}
		};
	
	});


	$('#addContact').submit(function(event) {
		event.preventDefault();
		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();	
		var phoneNumbers = getPhoneNumbers(); 
		var addresses = getAddresses();					
		var newContact = new Contact(firstName, lastName, phoneNumbers, addresses);
		contacts.push(newContact);
		$('.contact-list').empty();
		$('#addContact').find('input[type=text]').val('');
		for (var i = 0; i < contacts.length; i++) {
			var contactTitle = '<a><li class= "nameList"><span class="hidden">' + i + '</span>' + contacts[i].firstName + " " + contacts[i].lastName + '</li></a>';
			$('.contact-list').append(contactTitle);
		};
		
	});


});