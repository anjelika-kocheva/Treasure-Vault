export module SecretPassowrd {

	export class CreatePass {
		public fullCombination: any[] = [[], [], []];

		constructor(max: number, min: number) {
			for (let i = 0; i < 3; ++i) {
				let direction: string = Math.random() > 0.5 ? "clockwise" : "counterclockwise";
				let times = Math.floor(Math.random() * (max - min + 1)) + min;
				this.fullCombination[i].push(times, direction);
			}
		}
	}

	export class GetPass {
		public password = new SecretPassowrd.CreatePass(9, 1).fullCombination;
		// make a copy (get value without reference)
		public copyOfPassword: any[] = [...this.password];

		show() {
			console.log("Shhs the secret password is:");

			this.copyOfPassword.forEach(element => {
				console.log(element.join(' '));
			});
		}
	}
}
