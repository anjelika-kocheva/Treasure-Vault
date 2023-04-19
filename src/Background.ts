import { Container, Sprite } from "pixi.js";

export class Background extends Container {

	backgroundImage: Sprite;
	constructor(screenWidth: number, screenHeight: number, scaleDown: number){
		super();
		this.backgroundImage = Sprite.from('bg.png'); 
        // scaleDow of the background
		this.backgroundImage.scale.set(scaleDown);
		this.backgroundImage.anchor.set(0.5);
        // setting it to "the middle of the screen
		this.backgroundImage.x = screenWidth / 2;
		this.backgroundImage.y = screenHeight / 2;
		this.addChild(this.backgroundImage);
	}

}