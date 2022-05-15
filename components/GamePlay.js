AFRAME.registerComponent("game-play", {
	schema: {
		id: { type: "string", default: "#ring1" },
	},
	isCollider: function (elementId) {
		const el = document.querySelector(elementId);
		el.addEventListener("collide", (e) => {
			if (elementId.includes("#ring")) {
				el.setAttribute("visible", false);
				this.updateScore();
				this.updateTarget();
			}

			if (elementId.includes("#bird")) {
				this.gameOver();
			}
		});
	},

	gameOver: function () {
		var planeEL = document.querySelector("#plane");
		var gameOverText = document.querySelector("#gameover");
		gameOverText.setAttribute("visible", true);
		planeEL.setAttribute("dynamic-body", { mass: 1 });
	},

	updateScore: function () {
		var scoreText = document.querySelector("#score");
		var count = scoreText.getAttribute("text").value;
		var currentScore = parseInt(count);
		currentScore += 50;
		scoreText.setAttribute("text", {
			value: currentScore,
		});
	},

	updateTarget: function () {
		var targetCount = document.querySelector("#target");
		var currentTarget = parseInt(targetCount.getAttribute("text").value);
		currentTarget--;
		targetCount.setAttribute("text", { value: currentTarget });
	},

	update: function () {
		this.isCollider(this.data.id);
	},

	init: function () {
		var duration = 5;
		const timerEl = document.querySelector("#timer");
		this.startTimer(duration, timerEl);
	},

	startTimer: function (duration, timerEl) {
		var minutes;
		var seconds;

		var timer = setInterval(countDown, 1000);

		function countDown() {
			if (duration >= 0) {
				minutes = parseInt(duration / 60);
				seconds = parseInt(duration % 60);

				if (minutes < 10) {
					minutes = "0" + minutes;
				}
				if (seconds < 10) {
					seconds = "0" + seconds;
				}

				timerEl.setAttribute("text", {
					value: minutes + ":" + seconds,
				});

				duration -= 1;
			} else {
                clearInterval(timer);
                this.gameOver()
			}
		}
	},
});
