const firstName = document.querySelector("#firstName");
const firstLabel = document.querySelector("#firstLabel");

const lastName = document.querySelector("#lastName");
const lastLabel = document.querySelector("#lastLabel");

const email = document.querySelector("#email");
const emailLabel = document.querySelector("#emailLabel");

const password = document.querySelector("#password");
const passwordLabel = document.querySelector("#passwordLabel");

const confirmPassword = document.querySelector("#confirmPassword");
const confirmLabel = document.querySelector("#confirmLabel");


const signUp = document.querySelector("#signUpEnd");

signUp.addEventListener("click", () => {
	if (firstName.value == "") {
		firstLabel.innerHTML = "First Name: Required";
		firstLabel.style.color = "red";
	}

	if (lastName.value == "") {
		lastLabel.innerHTML = "Last Name: Required";
		lastLabel.style.color = "red";
	}
	if (email.value == "") {
		emailLabel.innerHTML = "Email : Required";
		emailLabel.style.color = "red";
	}
	if (password.value == "") {
		passwordLabel.innerHTML = "Password : Required";
		passwordLabel.style.color = "red";
	}

	if (confirmPassword.value == "") {
		confirmLabel.innerHTML = "Confirm Password: Required";
		confirmLabel.style.color = "red";
	} 

	
	if (firstName.value != "" && lastName.value != "" && email.value != "" && password.value != ""
		 && confirmPassword.value != "") {


		if (password.value != confirmPassword.value){
			confirmLabel.innerHTML = "Confirm Password : must match";
			confirmLabel.style.color = "red";
		} else {
			document.getElementById("metAllRequirement").style.display = "none";

			var h = document.createElement("h3");
			var thankYou = document.querySelector(".thankYou");
			h.textContent = "Thank you for creating an account! Now log-in";
			thankYou.appendChild(h);

			var logIn = document.createElement("a");
			logIn.textContent = "Log-In";
			logIn.href = "logInMedBridge.html";
			logIn.className = "btn btn-primary btnSeccion";
			logIn.id = "logIn";
			thankYou.appendChild(logIn);
		}
	}
})
















