AFRAME.registerComponent("plane-rotation", {
	schema: {
        speedOfRotation: { type: "number", default: 0 },
		ascent: { type: "number", default: 0 },
        
	},
	init: function () {
		window.addEventListener("keydown", (e) => {
            this.data.speedOfRotation = this.el.getAttribute("rotation");
			this.data.ascent = this.el.getAttribute("position");
            
            var planeRotation = this.data.speedOfRotation;
            var planePosition = this.data.ascent;
			if (e.key === "ArrowRight") {
				if (planeRotation.x < 10) {
					planeRotation.x += 0.5;
					this.el.setAttribute("rotation", planeRotation);
				}
			}
			if (e.key === "ArrowLeft") {
				if (planeRotation.x > -10) {
					planeRotation.x -= 0.5;
					this.el.setAttribute("rotation", planeRotation);
				}
			}
			if (e.key === "ArrowUp") {
				if (planeRotation.z < 20) {
					planeRotation.z += 0.5;
					this.el.setAttribute("rotation", planeRotation);
                }
                if (planePosition.y < 2) {
                    planePosition.y += 0.01
                    this.el.setAttribute("position", planePosition)
                }
			}
			if (e.key === "ArrowDown") {
				if (planeRotation.z > -10) {
					planeRotation.z -= 0.5;
					this.el.setAttribute("rotation", planeRotation);
                }
                if (planePosition.y > -2) {
                    planePosition.y -= 0.01
                    this.el.setAttribute("position", planePosition)
                }
			}
		});
	},
});
