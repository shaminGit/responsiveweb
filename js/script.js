function validateNumber(value) {
// Validate the number
// if (!isNumber(value))
alert("Please enter a number.");
}
function validateZIPCode(value) {
// Validate the ZIP code
// if (!isZIPCode(value))
alert("Please enter a ZIP code in the form XXXXX.");
}
function calcPrice() {
var maxPrice = document.getElementById("income").value * 4;
alert("You can afford a house that costs up to $" + maxPrice + ".");
}
function findHouses(form) {
var bedrooms = document.getElementById("bedrooms").value;
var zipCode = document.getElementById("zip").value;
// Display a list of matching houses from the server
form.submit();
}
