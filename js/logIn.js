var haguwa = {
	email: "aakar@gmail.com", 
	password: "baucha"
};


const emailLog = document.querySelector("#emailLog");
const emailLabelLog = document.querySelector("#emailLabelLog");
const passwordLog = document.querySelector("#passwordLog");
const passwordLabelLog = document.querySelector("#passwordLabelLog");

const logIn = document.querySelector("#logIn");


logIn.addEventListener("click", () => {

	if (emailLog.value == "") {
		emailLabelLog.innerHTML = "Email: Required";
		emailLabelLog.style.color = "red";
	}

	if (passwordLog.value == "") {
		passwordLabelLog.innerHTML = "Password: Required";
		passwordLabelLog.style.color = "red";
	}

	if (emailLog.value != "" && passwordLog.value != "") {
		if (emailLog.value == haguwa.email && passwordLog.value == haguwa.password){
			location.href = "home.html";
		} else {
			console.log("incorrect password or email.");
		}
		
	}

})

