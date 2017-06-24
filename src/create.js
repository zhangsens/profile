const create = {
    target: document.body,
    canvas_image: document.createElement("canvas"),
    canvas: document.createElement("canvas"),
    input: document.createElement("input"),
    profile: document.createElement("div"),
    profile_sys: document.createElement("div"),
    method: function(option) {
        this.target = option.el || this.target;
        this.target.appendChild(this.canvas_image);
        this.target.appendChild(this.profile_sys);
        this.target.appendChild(this.input);
        this.profile_sys.appendChild(this.canvas);
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.profile.className = "profile";
        this.canvas_image.className = "profile_pic";
        this.input.type = "file";
    }
}

module.exports = create;