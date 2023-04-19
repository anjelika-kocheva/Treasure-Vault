import { Container, Sprite } from "pixi.js";

export class OpenDoor extends Container {
    openDoor: Sprite;
    openDoorShadow: Sprite;
    openDoorContainer: Container = new Container;

    constructor(scaleDown:number){
        super();

        // shadow
        this.openDoorShadow = Sprite.from("doorOpenShadow.png");
        this.openDoorShadow.scale.set(scaleDown);
        this.openDoorShadow.anchor.set(0.5);
        this.openDoorShadow.x = 15;
        this.openDoorShadow.y = 5;

        this.openDoor = Sprite.from("doorOpen.png");
		this.openDoor.scale.set(scaleDown);
		this.openDoor.anchor.set(0.5);
		this.openDoor.x = 0;
		this.openDoor.y = 0;

        this.openDoorContainer.addChild(this.openDoorShadow, this.openDoor);
		this.addChild(this.openDoorContainer);
    }
}

