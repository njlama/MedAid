const subscribe = document.querySelector("#subscribeJS");

const formName = document.querySelector("#name");

const labelName = document.querySelector("#labelName");

const formEmail = document.querySelector("#email");

const labelEmail = document.querySelector("#labelEmail");

const formCard = document.querySelector("#card");

const labelCard = document.querySelector("#labelCard");

const formZip = document.querySelector("#zip");

const labelZip = document.querySelector("#labelZip");

const formCvv = document.querySelector("#cvv");

const labelCvv = document.querySelector("#labelCvv");

subscribe.addEventListener("click", () => {
	
	if (formName.value == ""){
		labelName.innerHTML = "Name: is required";
		labelName.style.color = "red";
	}

	if (formEmail.value == ""){
		labelEmail.innerHTML = "E-mail: required";
		labelEmail.style.color = "red";

	}

	if (formCard.value == ""){
		labelCard.innerHTML = "Card Number: is required";
		labelCard.style.color = "red";
	} else {

		if (!formCard.value.match(/^[0-9]+$/)){
			labelCard.innerHTML = "Card Number: Required numbers only!";
			labelCard.style.color = "red";
		}
	}

	if (formZip.value == ""){
		labelZip.innerHTML = "Zip Code: number is required";
		labelZip.style.color = "red";
	} else {
		if (formZip.value.length != 5){
			labelZip.innerHTML = "Zip Code: required 5 digits";
			labelZip.style.color = "red";
		} else {
			if (!formZip.value.match(/^[0-9]+$/)){
				labelZip.innerHTML = "Zip Code: required 5 numbers!";
				labelZip.style.color = "red";
			}
		}
	}

	if (formCvv.value == ""){
		labelCvv.innerHTML = "CVV: number is required";
		labelCvv.style.color = "red";
	} else {
		if (formCvv.value.length != 3){
			labelCvv.innerHTML = "CVV: required 3 digits";
			labelCvv.style.color = "red";
		} else {
			if (!formCvv.value.match(/^[0-9]+$/)){
				labelCvv.innerHTML = "CVV: required 3 numbers!";
				labelCvv.style.color = "red";
			}
		}
	}



})

