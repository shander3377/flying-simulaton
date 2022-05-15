// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
	init: function () {
		for (var i = 1; i <= 20; i++) {
			//id
			var id = `ring${i}`;

			//position variables
			var posX = Math.random() * 3000 + -1000;
			var posY = Math.random() * 2 + -1;
			var posZ = Math.random() * 3000 + -1000;

			var position = { x: posX, y: posY, z: posZ };

			//call the function
			this.createRings(id, position);
		}
	},

	createRings: function (id, position) {
		var terrainEl = document.querySelector("#terrain");

		var ringEl = document.createElement("a-entity");

		ringEl.setAttribute("id", id);
		ringEl.setAttribute("position", position);

		ringEl.setAttribute("material", "color", "#ff9100");
		ringEl.setAttribute("game-play", { id: `#${id}` });
		ringEl.setAttribute("geometry", { primitive: "torus", radius: 8 });
		ringEl.setAttribute("static-body", { shape: "sphere", sphereRadius: 2 });
		terrainEl.appendChild(ringEl);
	},
});
AFRAME.registerComponent("flying-birds", {
	init: function () {
		for (var i = 1; i <= 20; i++) {
			var id = `bird${i}`;
			var posx = Math.floor(Math.random() * 3000 + -1000);
			var posy = Math.floor(Math.random() * 2 + -1);

			var posz = Math.floor(Math.random() * 3000 + -1000);
			var position = { x: posx, y: posy, z: posz };
			this.flyingBirds(id, position);
		}
	},

	flyingBirds: (id, position) => {
		var terrainEl = document.querySelector("#terrain");
		var birdEL = document.createElement("a-entity");
		birdEL.setAttribute("id", id);
		birdEL.setAttribute("position", position);
		birdEL.setAttribute("gltf-model", "assets/models/flying_bird/scene.gltf");
		birdEL.setAttribute("static-body", { shape: "box", halfExtents: "2 2 2"});
		birdEL.setAttribute("game-play", { id: `#${id}` });

		birdEL.setAttribute("scale", { x: 500, y: 500, z: 500 });
		birdEL.setAttribute("animation-mixer", {});
		terrainEl.appendChild(birdEL);
	},
});
