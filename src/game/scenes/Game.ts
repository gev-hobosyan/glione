import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class Game extends Scene {
	camera: Phaser.Cameras.Scene2D.Camera | undefined;
	background: Phaser.GameObjects.Image | undefined;
	gameText: Phaser.GameObjects.Text | undefined;

	constructor() {
		super("Game");
	}

	create() {
		// this.camera = this.cameras.main;
		// this.camera.setBackgroundColor(0x101010);

		// this.background = this.add.image(0, 0, "tiles");
		// this.background.setAlpha(0.5);
		//
		const map = this.make.tilemap({ key: "dungeon" });
		const tileset = map.addTilesetImage("dungeon", "tiles");

		map.createLayer("Ground", tileset!);
		map.createLayer("Walls_Bellow", tileset!);
		// const wallsLayer = map.createLayer("Walls_Collide", tileset!);

		// this.gameText = this.add
		// 	.text(300, 200, "Hello there traveler", {
		// 		fontFamily: "Arial Black",
		// 		fontSize: 38,
		// 		color: "#ffffff",
		// 		stroke: "#00ff00",
		// 		strokeThickness: 8,
		// 		align: "center",
		// 	})
		// 	.setOrigin(0.5)
		// 	.setDepth(100);

		EventBus.emit("current-scene-ready", this);
	}
}
