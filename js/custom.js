$(document).ready(function(){

	var firstName;
	var lastName;
	var street;
	var city;
	var state;
	var zip;
	var option;
	var email;


	//user click submit
	$("#submitButton").click(function(){
		//grabs first name
		firstName = $("#firstName").val();
		//grabs last name
		lastName = $("#lastName").val();
		//grabs street
		street = $("#street").val();
		//grabs city
		city = $("#city").val();
		//grabs state
		state = $("#state").val();
		//grabs zip
		zip = $("#zip").val();
		//grabs email address
		email = $("#email").val();
		//grab radio buttons
		$('input[name="options"]:checked').each( function() {
		   
		   console.log(this.value);
		   
		   option = this.value;
		});


		console.log("FIRST NAME: " + firstName);
		console.log("LAST NAME: " + lastName);
		console.log("STREET: " + street);
		console.log("CITY: " + city);
		console.log("STATE: " + state);
		console.log("ZIP: " + zip);
		console.log("EMAIL: " + email)
		console.log("SUBSCRIPTION: " + option);

		//shows alert if any fields are left empty
		//goes to payment page when all fields are filled in
		if(( firstName == "")||( lastName == "")||( street == "")||( city == "")||( state == "null")||( zip == "")||( email == "")){
			alert("PLEASE COMPLETE ALL FIELDS")
		} else {
			window.location.href = "payment.html";
		}


	});
	

});