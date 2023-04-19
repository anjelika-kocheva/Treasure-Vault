import { Container, Sprite } from "pixi.js";

export class Door extends Container {

	door: Sprite;
	handleContainer: Container = new Container();
	handle: Sprite;
	handleShadow: Sprite;

	constructor(scaleDown: number) {
		super();

		// door
		this.door = Sprite.from("door.png");
		this.door.scale.set(scaleDown);
		this.door.anchor.set(0.46, 0.5);
		this.door.x = 0;
		this.door.y = 0;
		this.addChild(this.door);

		// shadow
		this.handleShadow = Sprite.from("handleShadow.png");
		this.handleShadow.scale.set(scaleDown);
		this.handleShadow.anchor.set(0.5);
		this.handleShadow.x = 3;
		this.handleShadow.y = 3;

		// handle
		this.handle = Sprite.from("handle.png");
		this.handle.scale.set(scaleDown);
		this.handle.anchor.set(0.53, 0.5);
		this.handle.x = 0;
		this.handle.y = 0;


		this.handleContainer.addChild(this.handleShadow, this.handle);

		this.handleContainer.pivot.set(0.5);
		this.handleContainer.pivot.x = this.handle.anchor.x;
		this.handleContainer.pivot.y = this.handle.anchor.y;
		this.handleContainer.eventMode = "dynamic";
		this.addChild(this.handleContainer);

	}
}