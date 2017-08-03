
var x = document.getElementById("form_sample");

var createform = document.createElement('form'); // Create New Element form
	createform.setAttribute("action", "");        // Setting action Attribute on form
	createform.setAttribute("method", "post");  // Setting method Attribute on form
	x.appendChild(createform);

var heading = document.createElement('h1'); // Heading of form
	heading.innerHTML = "Particulars Form";  
	createform.appendChild(heading);

var line = document.createElement('hr');  //giving horizontal row after heading
	createform.appendChild(line);

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for name field
	namelabel.innerHTML = "Name : ";            // Set Field Labels
	createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create input field for name
	inputelement.setAttribute("type", "text");  
	inputelement.setAttribute("name", "dname");
	inputelement.setAttribute("id", "nameID");
	createform.appendChild(inputelement);

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);


var emaillabel = document.createElement('label');  //Create Label for email field
	emaillabel.innerHTML = "Email : ";
	createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create input field for email
	emailelement.setAttribute("type", "text");
	emailelement.setAttribute("name", "demail");
	createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
	createform.appendChild(emailbreak);

// Append Textarea
var messagelabel = document.createElement('label'); 
	messagelabel.innerHTML = "Mobile Number : ";
	createform.appendChild(messagelabel);

var texareaelement = document.createElement('input'); 
	texareaelement.setAttribute("type", "text");
	texareaelement.setAttribute("name", "dmessage");
	createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
	createform.appendChild(messagebreak);


/*
// create a checkbox
var checkboxelement = document.createElement("input");
	checkboxelement.type = "checkbox";
	checkboxelement.name = "check"
	checkboxelement.id = "checkbox1";
	createform.appendChild(checkboxelement);

var checklabel = document.createElement('label')
	label.htmlFor = "checktextID";
	createforms.appendChild(document.createTextNode('hihih'));
	createform.appendChild(checklabel);

var checkboxbreak = document.createElement('br');
	createform.appendChild(checkboxbreak);
*/
// Append Submit Button
var submitelement = document.createElement('input'); 
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "SUBMIT");
	createform.appendChild(submitelement);
	// create a onClick function that stores all input data into a CSV file.
	// only works on WINDOWS
	submitelement.onclick = function WriteToFile() {
		// window.alert(texareaelement.value);
		var dataArr = [inputelement.value, emailelement.value, texareaelement.value];
		var csv = dataArr.toString();
		var downloadLink = document.createElement("a");
		var blob = new Blob(["\ufeff", csv]);
		var url = URL.createObjectURL(blob);
		downloadLink.href = url;
		downloadLink.download = "UserData.csv";

		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	};