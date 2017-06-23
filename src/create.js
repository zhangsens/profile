const create = {
    target: document.body,
    canvas_image: document.createElement("canvas"),
    canvas: document.createElement("canvas"),
    input: document.createElement("input"),
    method: function(ele) {
        this.target = ele || this.target;
        this.target.appendChild(this.canvas_image);
        this.target.appendChild(this.canvas);
        this.input.type = "file";
        this.target.appendChild(this.input);
    }
}
module.exports = create;