export class SecretPassowrd {

	public fullCombination: any[][] = [[],[],[]];

	constructor(max: number, min: number){
		for(let i = 0 ; i < 3 ; ++i){
			let direction: string = Math.random() > 0.5 ? "clockwise" : "counterclockwise";
			let times = Math.floor(Math.random() * (max - min + 1)) + min;
			this.fullCombination[i].push(times, direction);
		}
	}
}
