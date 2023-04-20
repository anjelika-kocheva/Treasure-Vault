import { Container, Sprite } from "pixi.js";

export class Blink extends Container {
    blink: Sprite;

    constructor(scaleDown:number, x: number, y: number){
        super();

        this.blink = Sprite.from("blink.png");
        this.blink.scale.set(scaleDown);
        this.blink.anchor.set(0.5);
        this.position.set(x,y);
		this.addChild(this.blink);
    }
}
