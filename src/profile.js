//const config = require("./config.js");
const create = require("./create.js");


window.profile_picture = function() {

    create.method(document.body);

    var image = new Image();
    var image_1 = new Image();
    var img_x = 0,
        img_y = 0,
        img_width, img_height, profile_x, profile_y, clientX, clientY, profile_width, profile_height;

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
            } else {
                img_width = 400;
                img_height = 400 * image.height / image.width;
            }
            img_x = (400 - img_width) / 2;
            img_y = (400 - img_height) / 2;

            ctx.drawImage(image, img_x, img_y, img_width, img_height);

            create.profile_sys.appendChild(create.profile);
            profile_x = create.canvas.offsetLeft + (400 - create.profile.offsetWidth) / 2;
            profile_y = create.canvas.offsetTop + (400 - create.profile.offsetHeight) / 2;
            create.profile.style.top = profile_y;
            create.profile.style.left = profile_x;

            create.profile_sys.onmousedown = function(e) {
                clientX = e.clientX;
                clientY = e.clientY;
                if (e.button == 0 && e.target == create.profile) {
                    if (e.layerX <= 10 && e.layerY <= 10) {
                        create.profile_sys.onmousemove = function(e) {
                            if (e.button == 0 && e.buttons == 1) {
                                profile_width = create.profile.offsetWidth - (clientX - e.clientX);
                                profile_height = create.profile.offsetHeight - (clientY - e.clientY);
                                clientX = e.clientX;
                                clientY = e.clientY;
                                var size = profile_width <= profile_height ? profile_width : profile_height;
                                var position = profile_width <= profile_height ? clientX : clientY;
                                changeSize(size, position)
                            }
                        };
                        //create.profile_sys.onmouseup = changeSize;
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
                        create.profile_sys.onmousemove = moveProfile;
                        create.profile_sys.onmouseup = moveProfile;
                    }
                }
            };

            function changeSize(size, position) {
                console.log(e.target);
                create.profile.style.width = create.profile.style.height = size;
            }

            function moveProfile(e) {
                if (e.button == 0 && e.buttons == 1 && e.type == "mousemove") {

                    profile_y = profile_y + (e.clientY - clientY);
                    profile_x = profile_x + (e.clientX - clientX);

                    //check profile's position limit in canvas
                    if (profile_y >= create.canvas.offsetTop && profile_y <= create.canvas.offsetTop + create.canvas.offsetHeight - create.profile.offsetHeight) {
                        clientY = e.clientY;
                        create.profile.style.top = profile_y;
                    } else if (profile_y < create.canvas.offsetTop) {
                        profile_y = create.canvas.offsetTop;
                    } else if (profile_y > create.canvas.offsetTop + create.canvas.offsetHeight - create.profile.offsetHeight) {
                        profile_y = create.canvas.offsetTop + create.canvas.offsetHeight - create.profile.offsetHeight;
                    }

                    if (profile_x >= create.canvas.offsetLeft && profile_x <= create.canvas.offsetLeft + create.canvas.offsetWidth - create.profile.offsetWidth) {
                        clientX = e.clientX;
                        create.profile.style.left = profile_x;
                    } else if (profile_x < create.canvas.offsetLeft) {
                        profile_x = create.canvas.offsetLeft;
                    } else if (profile_x > create.canvas.offsetLeft + create.canvas.offsetWidth - create.profile.offsetWidth) {
                        profile_x = create.canvas.offsetLeft + create.canvas.offsetWidth - create.profile.offsetWidth;
                    }

                    //预览
                    showProfile();
                } else if (e.button == 0 && e.buttons == 0 && e.type == "mouseup") {
                    //create.profile.style.top = create.profile.offsetTop + (e.clientY - clientY);
                    //create.profile.style.left = create.profile.offsetLeft + (e.clientX - clientX);
                }
            }
        }
    }
}

function showProfile() {
    //canvas.toDataURL();
    var getimage = ctx.getImageData(create.profile.offsetLeft - create.canvas.offsetLeft, create.profile.offsetTop - create.canvas.offsetTop, create.profile.offsetWidth, create.profile.offsetHeight);
    ctx.putImageData(getimage, x, y);
}

module.exports = showProfile;