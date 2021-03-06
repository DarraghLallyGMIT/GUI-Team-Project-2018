// Retrieve account data from local storage
var accounts = JSON.parse(localStorage["accountsArr"]);
// Retrieve local storage data for username
var customerName = sessionStorage.getItem("accountName"); 
//global variables
var arrayPosFound;

for (var i = 0; i < accounts.length; i++)
{
	var client = accounts[i].clientId;
	var name = accounts[i].username;
	var address1 = accounts[i].addressLine1;
	var address2 = accounts[i].addressLine2;
	var address3 = accounts[i].addressLine3;
	var emailContact = accounts[i].email;
	var phoneContact = accounts[i].phone;
	var passWord = accounts[i].pssword;
	
	if (customerName == name)
	{	
		arrayPosFound = i;
		//use DOM to output the JSON objects to the page
		document.getElementById("userName").placeholder = name;
		document.getElementById("pass1").placeholder = "******";
		document.getElementById("pass2").placeholder = "******";
		document.getElementById("userPhone").placeholder = phoneContact;
		document.getElementById("userEmail").placeholder = emailContact;
		document.getElementById("userAddress1").placeholder = address1;
		document.getElementById("userAddress2").placeholder = address2;
		document.getElementById("userAddress3").placeholder = address3;
		
	}// if
}// inner for 
	
//On click 'Phones Dept' - send data to local
document.getElementById("deptPhone").onclick = function()
{	
	//send search
	localStorage.setItem("searchDepartment", "Phone");
}

//On click 'Laptops Dept' - send data to local
document.getElementById("deptLaptop").onclick = function()
{	
	//send search
	localStorage.setItem("searchDepartment", "Laptop");
}

//On click 'TV Dept' - send data to local
document.getElementById("deptTV").onclick = function()
{	
	//send search
	localStorage.setItem("searchDepartment", "TV");
}

//On click 'Drone Dept' - send data to local
document.getElementById("deptDrone").onclick = function()
{	
	//send search
	localStorage.setItem("searchDepartment", "Drone");
}
	
//On click 'search' - send input text to local
document.getElementById("searchBtn").onclick = function()
{	
	//get the user name from the text box
	var searchValue = document.getElementById("searchBarText").value;
	
	//send search
	localStorage.setItem("searchBar", searchValue);
}

//If account is active display holders name
var found = sessionStorage.getItem("loginActive");

if (found == 1)
{
	var name = sessionStorage.getItem("accountName");
	document.getElementById("nameTag").innerHTML = "Hello, " + name;
}

//On click 'Logout' - send data to local
document.getElementById("logOut").onclick = function()
{	
	// clear session storage and reload page
	sessionStorage.clear();
	//refresh page
	location.reload();
}

//run script when submit button is pressed
document.getElementById("regBtn").onclick = function()
{
	//get the user details from the signup form
	var name = document.getElementById("userName").value;
	var phone = document.getElementById("userPhone").value;
	var email = document.getElementById("userEmail").value;
	var address1 = document.getElementById("userAddress1").value;
	var address2 = document.getElementById("userAddress2").value;
	var address3 = document.getElementById("userAddress3").value;
	var password = document.getElementById("pass1").value;
	
	if(name.length > 1  && password.length >= 1)
	{
		//use current client Number
		var clientNumber = client;
		
		//build object and with the user details
		var updatedAccount = 
		{
			"clientId" : clientNumber,
			"username" : name, 
			"pssword" : password,
			"addressLine1" : address1,
			"addressLine2" : address2,
			"addressLine3" : address3,
			"email" : email,
			"phone" : phone
		};
		
		// Removes the position element of accounts array
		accounts.splice(arrayPosFound, 1, updatedAccount);
		//send account arrays to local storage
		localStorage["accountsArr"] = JSON.stringify(accounts);
		//reset login name on Nav Bar
		sessionStorage.setItem("accountName", name);
		localStorage.setItem("newAccount", 1);
	}
}
