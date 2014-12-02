var user_id;
var tos;
var froms;

//Logout 
$.ajax({
    url: urlString + "users/logout",
    type: "GET",
    dataType:"json",
    async: false,
    success: function(data, textStatus, jqXHR) {
      QUnitTesting("User logout", data.success === true);
    },
    error: function(jqXHR, textStatus, err) {
      QUnitTesting("User logout", false);
    }
});

//Login Dana
$.ajax({
    url: urlString + "users/login",
    type: "POST",
    dataType:"json",
    data: {
      username: "Dana",
      password:"18"
    },
    async: false,
    success: function(data, textStatus, jqXHR) {
      QUnitTesting("User successful login", data.success === true);
    },
    error: function(jqXHR, textStatus, err) {
      QUnitTesting("User login", false);
    }
});

// Get all the payments that the user owes 
$.ajax({
	url: urlString + "users/payments",
	type: "GET",
	dataType:"json",
	async: false,
	success: function(data, textStatus, jqXHR) {
		QUnitTesting("Getting User payments", data.content.length >= 1);
		tos = data.content.tos;
		froms = data.content.froms;
	},
	failure: function(jqXHR, textStatus, err) {
		QUnitTesting("Getting User payments", false);
	}
});

//Logout 
$.ajax({
    url: urlString + "users/logout",
    type: "GET",
    dataType:"json",
    async: false,
    success: function(data, textStatus, jqXHR) {
      QUnitTesting("User logout", data.success === true);
    },
    error: function(jqXHR, textStatus, err) {
      QUnitTesting("User logout", false);
    }
});

//Login Zulaa
$.ajax({
    url: urlString + "users/login",
    type: "POST",
    dataType:"json",
    data: {
      username: "Zulaa",
      password:"11"
    },
    async: false,
    success: function(data, textStatus, jqXHR) {
      QUnitTesting("User successful login", data.success === true);
    },
    error: function(jqXHR, textStatus, err) {
      QUnitTesting("User login", false);
    }
});

$.ajax({
	url: urlString + "paymentRequests/received/" + froms[0]._id,
	type: "GET",
	dataType:"json",
	async: false,
	success: function(data, textStatus, jqXHR) {
		QUnitTesting("Claim to have paid", data.success === true);
	},
	failure: function(jqXHR, textStatus, err) {
		QUnitTesting("Claim to have paid", false);
	}
});