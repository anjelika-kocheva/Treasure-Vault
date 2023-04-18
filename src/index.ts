import { SecretPassowrd } from './SecretPassowrd';
import { TimerApp } from './Timer';


let count = new TimerApp.Timer;
let time = setInterval(function(){
	count.countUp();
  }, 1000);


// Get secret password
let password = new SecretPassowrd(9, 1).fullCombination;

// make a copy (get value without reference)
let copyOfPassword: any[][] = JSON.parse(JSON.stringify(password));

console.log("Shhs the secret password is:");

copyOfPassword.forEach(element => {
	console.log(element.join(' '));
});

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {

	button.addEventListener('click', () => {
		let rotate: string = "0";

		// if clicked right direction
		if (copyOfPassword[0][1].match("counterclockwise") && button.getAttribute("id") == "counterclockwise") {
			rotate = "-60";
		} else if (!copyOfPassword[0][1].match("counterclockwise") && button.getAttribute("id") == "clockwise") {
			rotate = "+60";
		}
		else {
			console.log("start again");
			rotate = "0";
			copyOfPassword = JSON.parse(JSON.stringify(password));
			count.second = 0;
		}

		// if rotation was correct -1
		if (rotate != '0') {
			copyOfPassword[0][0] -= 1
		};

		// if times == 0 , removes the completed array
		if (copyOfPassword[0][0] == 0) {
			copyOfPassword.splice(0, 1);
		}

		if (copyOfPassword.length == 0) {
			console.log("Yey you win");
			clearInterval(time);
		}

	});
});
