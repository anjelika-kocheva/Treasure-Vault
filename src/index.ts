import { SecretPassowrd } from './SecretPassowrd';
import { TimerApp } from './Timer';

let count = new TimerApp.Timer;
let time = setInterval(function(){
	count.countUp();
  }, 1000);

// Get secret password
let get = new SecretPassowrd.GetPass;
get.show();

function reset(){
	count.second = 0;
	console.clear();
	get = new SecretPassowrd.GetPass;
	get.show();
}

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {

	button.addEventListener('click', () => {
		let rotate: string = "0";

		// if clicked right direction
		if (get.copyOfPassword[0][1].match("counterclockwise") && button.getAttribute("id") == "counterclockwise") {
			rotate = "-60";
		} else if (!get.copyOfPassword[0][1].match("counterclockwise") && button.getAttribute("id") == "clockwise") {
			rotate = "+60";
		}
		else {
			console.log("start again");
			rotate = "0";
			reset();
		}

		// if rotation was correct -1
		if (rotate != '0') {
			get.copyOfPassword[0][0] -= 1
		};

		// if times == 0 , removes the completed array
		if (get.copyOfPassword[0][0] == 0) {
			get.copyOfPassword.splice(0, 1);
		}

		if (get.copyOfPassword.length == 0) {
			console.log("Yey you win");
			clearInterval(time);
			setTimeout(function() {
				reset();
				setInterval(function(){
					count.countUp();
				  }, 1000)
			}, 5000);
		}

	});
});
