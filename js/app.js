const clientId = '';
const clientSecret = '';

$(document).ready(function() {
    $.ajax({
    	type: "POST",
        url: "https://cors-anywhere.herokuapp.com/https://checkout-sandbox.getbread.com/bread.js",
        data: {}
    });
});

//window.opener.postMessage("https://checkout-sandbox.getbread.com");

function getBread() {
	$.ajax({
  	  type: "REST",
	  url: "https://cors-anywhere.herokuapp.com/https://checkout-sandbox.getbread.com/oauth2/token",
	  data: {},
	});
}


var opts = {
  buttonId: 'bread-checkout-btn',
  actAsLabel: false,
  asLowAs: true,
  items: [
  {
    name:'Couch',
    price:100,
    sku:'COUCH123',
    imageUrl:'http://www.gnscl.com/couch-pics/couch-pics-stunning-design-19-1000-images-about-diy-couch-slipcovers-on-pinterest/',
    detailUrl:'[REPLACEMEWITHAREALURL]', 
    quantity: 1,
  }],
  shippingOptions: [
	{
	  "cost": 1000,
	  "type": "Standard",
	  "typeId": "std"
	},
	{
	  "cost": 2000,
	  "type": "Overnight",
	  "typeId": "ovn"
	}
  ],
  calculateTax: function(shippingContact, callback) {
  	if (shippingContact.includes("NY")) {
  		return 0.05;
  	} else {
  		return 0;
  	}
  },
  onCustomerClose: function(err, custData) {
	  if (err !== null) {
	    console.error("An error occurred getting customer close data.");
	    return;
	  }
	  var customerEmail = custData.email;
	  var qualState     = custData.state;
	  switch (qualState) {
	    case 'PREQUALIFIED':
	      console.log(customerEmail + " was prequalified for financing.");
	    break;
	    case 'PARTIALLY_PREQUALIFIED':
	      console.log(customerEmail + " was partially prequalified for financing.");
	    break;
	    case 'NOT_PREQUALIFIED':
	      console.log(customerEmail + " was not prequalified for financing.");
	    break;
	    case 'ABANDONED':
	      if (customerEmail === undefined || customerEmail === null) {
	        console.log("Unknown customer abandoned their prequalification attempt.");
	      } else {
	        console.log(customerEmail + " abandoned their prequalification attempt.");
	      }
	    break;
	  }
	}
};
bread.checkout(opts);

