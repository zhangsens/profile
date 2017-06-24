//const config = require("./config.js");
const create = require("./create.js");


window.profile_picture = function() {

    create.method(document.body);
    //console.log(create);

    var image = new Image();
    var image_1 = new Image();
    var img_x_start, img_y_start, img_x_end, img_y_end, left_button, img_x = 0,
        img_y = 0,
        img_width, img_height, profile_x, profile_y;

    const reader = new FileReader();
    const ctx = create.canvas.getContext("2d");
    const ctx_1 = create.canvas_image.getContext("2d");

    create.input.onchange = function(e) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function() {
            image.src = reader.result;

            //picture is center in canvas
            if (image.width / image.height) {
                img_width = 400 * image.width / image.height;
                img_height = 400;
                profile_x = profile_y = 150;
                img_x = (400 - img_width) / 2;
                img_y = (400 - img_height) / 2;
            } else {
                img_width = 400;
                img_height = 400 * image.height / image.width;
                profile_x = profile_y = 150;
                img_x = (400 - img_width) / 2;
                img_y = (400 - img_height) / 2;
            }

            ctx.drawImage(image, img_x, img_y, img_width, img_height);

            create.profile_sys.appendChild(create.profile);
            create.profile.style.top = create.canvas.offsetTop + profile_x;
            create.profile.style.left = create.canvas.offsetLeft + profile_y;
            //create.profile.style.width = create.profile.style.height = img_height;

            create.profile_sys.onmousedown = function(e) {
                console.log(e);
                if (e.button == 0 && e.target == create.profile) {
                    img_x_start = e.layerX;
                    img_y_start = e.layerY;
                    left_button = 1;
                    console.log(img_x_start, 1);
                    console.log(img_y_start, 2);
                    if (e.layerX <= 10 && e.layerY <= 10) {
                        create.profile_sys.onmousemove = changeSize;
                        create.profile_sys.onmouseup = changeSize;
                    } else if (e.layerX <= 10 && e.layerY >= create.profile.offsetHeight - 10) {
                        create.profile_sys.onmousemove = changeSize;
                        create.profile_sys.onmouseup = changeSize;
                    } else if (e.layerX >= create.profile.offsetWidth - 10 && e.layerY <= 10) {
                        create.profile_sys.onmousemove = changeSize;
                        create.profile_sys.onmouseup = changeSize;
                    } else if (e.layerX >= create.profile.offsetWidth - 10 && e.layerY >= create.profile.offsetHeight - 10) {
                        create.profile_sys.onmousemove = changeSize;
                        create.profile_sys.onmouseup = changeSize;
                    } else {
                        create.profile_sys.onblur = function() { console.log("blur") };
                        create.profile_sys.onfocus = function() { console.log("focus") };
                        create.profile_sys.onmousemove = moveProfile;
                        create.profile_sys.onmouseup = moveProfile;
                    }
                }
            };
            // create.profile_sys.onmousemove = function(e) {
            //     if (e.button == 0 && e.target == create.profile) {
            // img_x_end = e.layerX;
            // img_y_end = e.layerY;
            // console.log(img_x_end);
            // console.log(img_y_end);
            // ctx.clearRect(0, 0, create.canvas.width, create.canvas.height);
            // ctx.drawImage(image, img_x + img_x_end - img_x_start, img_y + img_y_end - img_y_start, 300, 150);
            //     }
            // }
            // create.profile_sys.onmouseup = function(e) {
            //     if (e.button == 0) {
            // img_x = img_x + img_x_end - img_x_start;
            // img_y = img_y + img_y_end - img_y_start;
            // console.log(img_x);
            // console.log(img_y);
            // ctx.clearRect(0, 0, create.canvas.width, create.canvas.height);
            // ctx.drawImage(image, img_x, img_y, 300, 150);
            // left_button = 0;
            // image_1.src = create.canvas.toDataURL();
            // ctx_1.drawImage(image_1, 0, 0, 300, 150);
            //     }
            // }

            function changeSize(e) {
                console.log(e.target);
                console.log("size");
            }

            function moveProfile(e) {
                if (e.button == 0 && e.buttons == 1 && e.type == "mousemove") {
                    create.profile.style.top = e.clientY - create.profile.offsetHeight / 2;
                    create.profile.style.left = e.clientX - create.profile.offsetWidth / 2;
                } else if (e.button == 0 && e.buttons == 0 && e.type == "mouseup") {
                    create.profile.style.top = e.clientY - create.profile.offsetHeight / 2;
                    create.profile.style.left = e.clientX - create.profile.offsetWidth / 2;
                }
            }
        }
    }
}