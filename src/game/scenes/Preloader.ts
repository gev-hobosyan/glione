import dungeonTiles from "../tiles/TileSet.png";

export default class Preloader extends Phaser.Scene {
	world: string | undefined;

	constructor() {
		super("preloader");
	}

	init(data: { world: string }) {
		console.log(data);
		this.world = data.world;

		console.log(dungeonTiles);
	}

	preload() {
		console.log(JSON.parse(this.world!));

		this.load.image("tiles", dungeonTiles);
		this.load.tilemapTiledJSON("dungeon", JSON.parse(this.world!));
	}

	create() {
		this.scene.start("Game");
	}
}
