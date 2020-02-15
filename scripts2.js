//Krystyna Poremba 20719178

function draw () {
    var wrapper = document.getElementById("quiz-wrap");

    
      var qwrap = document.createElement("div"); // A div wrapper to hold this question and options

    // Attach submit button + event handler to the quiz wrapper
    var submitbutton = document.createElement("input");
    submitbutton.type = "submit";
	submitbutton.className = "button";
	submitbutton.value = "SUBMIT";
    wrapper.appendChild(submitbutton);
    wrapper.addEventListener("submit", submit);
  }

function submit (evt) {
    // Stop the form from submitting
    evt.preventDefault();
    evt.stopPropagation();

    // get all the selected options
    var textInput = document.querySelector("textarea").value;
	var question = document.getElementById("question").className;

    // Update and show the score
    var html = "<div>";
	console.log(question);
	if(question == "customers"){
		if (textInput.toLowerCase()=="SELECT CustomerID, CustomerName FROM Customers WHERE CustomerID IS 5;".toLowerCase()) {
		  html += "You Got it, good job!";
		} else {
		  html += "Nice Try! Make sure you're using the correct column and table names.";
		}
	}
	else if(question == "employees"){
		if (textInput.toLowerCase()=="SELECT EmployeeId, LastName, FirstName FROM employees WHERE EmployeeID IS 1 OR EmployeeID IS 2 ORDER BY FirstName;".toLowerCase()) {
		  html += "You Got it, good job!";
		} else {
		  html += "Nice Try! Make sure you're using the correct column and table names.";
		}	
			}
	else if (question == "orders"){
		if (textInput.toLowerCase()=="SELECT CustomerName, Country, OrderID FROM Customers LEFT JOIN Orders on Orders.CustomerID = Customers.CustomerID WHERE Country is \"Mexico\";".toLowerCase()) {
		  html += "You Got it, good job!";
		} else {
		  html += "Nice Try! Make sure you're using the correct column and table names.";
		}	
			}
	else if (question == "orderDetails"){
		if (textInput.toLowerCase()=="SELECT OrderDetailID, Orders.OrderID, Quantity, ShipperID FROM OrderDetails INNER JOIN Orders on OrderDetails.OrderID = Orders.OrderID WHERE ShipperID is 1;".toLowerCase()) {
		  html += "You Got it, good job!";
		} else {
		  html += "Nice Try! Make sure you're using the correct column and table names.";
		}	
			}
    html += "</div>";
    document.getElementById("message").innerHTML = html;
  }

window.addEventListener("load", draw);