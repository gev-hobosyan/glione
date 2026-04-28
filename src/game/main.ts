import { Game as MainGame } from "./scenes/Game";
import { AUTO, Game } from "phaser";
import Preloader from "./scenes/Preloader";

const config: Phaser.Types.Core.GameConfig = {
	type: AUTO,
	width: 512,
	height: 512,
	parent: "game-container",
	backgroundColor: "#ffffff",
	scene: [Preloader, MainGame],
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0, x: 0 },
		},
	},
	pixelArt: true,
};

const StartGame = (parent: string) => {
	return new Game({ ...config, parent });
};

export default StartGame;
