const config = require("./config.js");
const create = require("./create.js");

window.profile_picture = function() {
    const reader = new FileReader();
    create.method(document.body);
    console.log(create);
    var image = new Image();
    var img_x_start, img_y_start, img_x_end, img_y_end, left_button, img_x = 0,
        img_y = 0;
    var ctx = create.canvas.getContext("2d");
    create.input.onchange = function(e) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function() {
            image.src = reader.result;
            ctx.drawImage(image, 0, 0, 1200, 900, 0, 0, 300, 150);
            create.canvas.onmousedown = function(e) {
                console.log(1);
                if (e.button == 0) {
                    img_x_start = e.layerX;
                    img_y_start = e.layerY;
                    left_button = 1;
                }
            }
            create.canvas.onmousemove = function(e) {
                if (left_button == 1) {
                    img_x_end = e.layerX;
                    img_y_end = e.layerY;
                    ctx.clearRect(0, 0, create.canvas.width, create.canvas.height);
                    ctx.drawImage(image, img_x + img_x_end - img_x_start, img_y + img_y_end - img_y_start, 300, 150);
                }
            }
            create.canvas.onmouseup = function(e) {
                if (e.button == 0) {
                    img_x = img_x + img_x_end - img_x_start;
                    img_y = img_y + img_y_end - img_y_start;
                    ctx.clearRect(0, 0, create.canvas.width, create.canvas.height);
                    ctx.drawImage(image, img_x, img_y, 300, 150);
                    left_button = 0;
                    console.log(create.canvas.toDataURL());
                }
            }
        }
    }
}