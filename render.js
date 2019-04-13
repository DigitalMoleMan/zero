class Render {
	constructor(){
		this.canvas = document.createElement('canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		this.ctx = this.canvas.getContext('2d');

		document.body.insertBefore(this.canvas, null);
	}

	
}