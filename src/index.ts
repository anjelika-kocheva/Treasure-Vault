import * as PIXI from 'pixi.js'

// containers
import { Background } from './Background'
import { Door } from "./Door"
import { OpenDoor } from './OpenDoor';

// logic
import { SecretPassowrd } from './SecretPassowrd';
import { TimerApp } from './Timer';

// gsap
import { gsap } from "gsap";
import { PixiPlugin } from 'gsap/PixiPlugin';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new PIXI.Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	resizeTo: window
});

const mainContainer = new PIXI.Container();
app.stage.addChild(mainContainer);

const scaleDown = app.screen.width / 5995;

const background: Background = new Background(app.screen.width, app.screen.height, scaleDown);
mainContainer.addChild(background);

const fullClosedDoor = new Door(scaleDown);

mainContainer.addChild(fullClosedDoor);

fullClosedDoor.x = app.screen.width / 2;
fullClosedDoor.y = app.screen.height / 2; 

const fullOpenDoor = new OpenDoor(scaleDown);

mainContainer.addChild(fullOpenDoor);

fullOpenDoor.x = app.screen.width/ 1.35;
fullOpenDoor.y = app.screen.height / 2; 
fullOpenDoor.visible = false;

let count = new TimerApp.Timer;
let time = setInterval(function(){
	count.countUp();
  }, 1000);

// Get secret password
let get = new SecretPassowrd.GetPass;
get.show();

let rotation: any = "0";

function reset(){
	count.second = 0;
	console.clear();
	get = new SecretPassowrd.GetPass;
	get.show();
	rotation = 2000;
	rotateHandle(fullClosedDoor.handleContainer, rotation, 2);
	rotation = '0';		
}

function rotateHandle(container: PIXI.Container, rotateValue: number, animationTime: number){
	gsap.to(container, {
		pixi: {rotation: "+=" + rotateValue},
		duration: animationTime
	})
}

function win(){
	clearInterval(time);
	fullOpenDoor.visible = true;
	fullClosedDoor.visible = false;
	
	setTimeout(function() {
		reset();
		fullOpenDoor.visible = false;
		fullClosedDoor.visible = true;
		setInterval(function(){
			count.countUp();
		}, 1000)
	}, 5000);
}

function clickHandle(e: PIXI.FederatedMouseEvent): void {

	
	if (get.copyOfPassword[0][1].match("counterclockwise") && e.globalX < fullClosedDoor.x) {
		rotation = "-60";
	}else if (!get.copyOfPassword[0][1].match("counterclockwise") && e.globalX > fullClosedDoor.x) {
		rotation = "+60";
	} else {
			reset();
	}
	// if rotation was correct -1
	if (rotation != '0') {
		get.copyOfPassword[0][0] -= 1
	};

	// if times == 0 , removes the completed array
	if (get.copyOfPassword[0][0] == 0) {
		get.copyOfPassword.splice(0, 1);
	}

	if (get.copyOfPassword.length == 0) {;
		win();
	}

	rotateHandle(fullClosedDoor.handleContainer,rotation, 0.2);
}

fullClosedDoor.handleContainer.on("click", clickHandle, fullClosedDoor);
