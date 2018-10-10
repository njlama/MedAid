const name = document.querySelector("#name");
const nameLabel = document.querySelector("#nameLabel");

const email = document.querySelector("#email");
const emailLabel = document.querySelector("#emailLabel");

const subject = document.querySelector("#subject");
const subjectLabel = document.querySelector("#subjectLabel");

const message = document.querySelector("#message");
const messageLabel = document.querySelector("#messageLabel");

const sendMessage = document.querySelector("#sendMessage");

sendMessage.addEventListener("click", () => {

	if (name.value == "") {
		nameLabel.innerHTML = "Name: Required";
		nameLabel.style.color = "red";
	}

	if (email.value == "") {
		emailLabel.innerHTML = "Your Email: Required";
		emailLabel.style.color = "red";
	}

	if (subject.value == "") {
		subjectLabel.innerHTML = "Subject: Required";
		subjectLabel.style.color = "red";
	}

	if (message.value == "") {
		messageLabel.innerHTML = "Message: Required";
		messageLabel.style.color = "red";
	}

	if (name.value != "" && email.value != "" && subject.value != "" 
		&& message.value != "") {
		metAllRequirement.style.display = "none";

		let p = document.createElement("p");
		p.innerHTML = "Thank you! We have receive your message.";
		let thank = document.querySelector(".tyMessage");
		thank.appendChild(p);
	}
})