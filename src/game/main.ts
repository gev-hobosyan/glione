// import { Boot } from "./scenes/Boot";
// import { GameOver } from "./scenes/GameOver";
import { Game as MainGame } from "./scenes/Game";
// import { MainMenu } from "./scenes/MainMenu";
import { AUTO, Game } from "phaser";
// import { Preloader } from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
	type: AUTO,
	width: 700,
	height: 525,
	parent: "game-container",
	backgroundColor: "#ffffff",
	scene: [MainGame],
};

const StartGame = (parent: string) => {
	return new Game({ ...config, parent });
};

export default StartGame;
