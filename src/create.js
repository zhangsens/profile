const config = require("./config.js");

const create = {
    canvas_image: document.createElement("canvas"),
    canvas: document.createElement("canvas"),
    input: document.createElement("input"),
    profile: document.createElement("div"),
    profile_sys: document.createElement("div"),
    method: function(option) {
        var target = option.el || config.target;
        var stdin = option.el_stdin || config.target;
        var ele_show = option.ele_show || config.target;
        var exhibition = option.exhibition || config.exhibition
        stdin.appendChild(this.input);
        target.appendChild(this.profile_sys);
        if (exhibition) {
            ele_show.appendChild(this.canvas_image);
        }
        this.profile_sys.appendChild(this.canvas);
        this.canvas.width = option.cWidth || config.cWidth;
        this.canvas.height = option.cHeight || config.cHeight;
        this.profile.className = "profile";
        this.profile_sys.className = "profile_sys";
        this.canvas_image.className = "profile_pic";
        this.canvas_image.width = option.iWidth || config.iWidth;
        this.canvas_image.height = option.iHeight || config.iHeight;
        this.input.type = "file";
    }
}

module.exports = create;