const create = require("./create.js");
const colorful = require("./colorful.js")


window.profile_picture = function(option) {

    const body = document.body;

    create.method(option.ele);

    var image = new Image();
    var image_d = new Image();
    var canvas = document.createElement("canvas");
    var maxSize = option.maxSize || config.max_size;
    var minSize = option.minSize || config.min_size;
    var img_x = 0,
        img_y = 0,
        img_width, img_height, profile_x, profile_y, clientX, clientY, profile_width, profile_height, profile_position_left, profile_position_top;

    const reader = new FileReader();
    const ctx = create.canvas.getContext("2d");
    const ctx_1 = create.canvas_image.getContext("2d");
    const dctx = canvas.getContext("2d");

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

            profile_picture.prototype.imageData = profileData();

            create.profile_sys.onmousedown = function(e) {

                clientX = e.clientX;
                clientY = e.clientY;
                profile_width = create.profile.offsetWidth;
                profile_height = create.profile.offsetHeight;
                profile_x = create.profile.offsetLeft;
                profile_y = create.profile.offsetTop;

                if (e.button == 0 && e.target == create.profile) {

                    if (e.layerX <= 10 && e.layerY <= 10) {

                        create.profile_sys.onmousemove = function(e) {
                            if (e.button == 0 && e.buttons == 1) {
                                var width = profile_width + (clientX - e.clientX);
                                var height = profile_height + (clientY - e.clientY);
                                changeSize(width, height, 1);
                            }
                        };

                    } else if (e.layerX <= 10 && e.layerY >= create.profile.offsetHeight - 10) {

                        create.profile_sys.onmousemove = function(e) {
                            if (e.button == 0 && e.buttons == 1) {
                                var width = profile_width + (clientX - e.clientX);
                                var height = profile_height - (clientY - e.clientY);
                                changeSize(width, height, 2);
                            }
                        };

                    } else if (e.layerX >= create.profile.offsetWidth - 10 && e.layerY <= 10) {

                        create.profile_sys.onmousemove = function(e) {
                            if (e.button == 0 && e.buttons == 1) {
                                var width = profile_width - (clientX - e.clientX);
                                var height = profile_height + (clientY - e.clientY);
                                changeSize(width, height, 3);
                            }
                        };

                    } else if (e.layerX >= create.profile.offsetWidth - 10 && e.layerY >= create.profile.offsetHeight - 10) {

                        create.profile_sys.onmousemove = function(e) {
                            if (e.button == 0 && e.buttons == 1) {
                                var width = profile_width - (clientX - e.clientX);
                                var height = profile_height - (clientY - e.clientY);
                                changeSize(width, height, 4);
                            }
                        };

                    } else {

                        create.profile_sys.onmousemove = moveProfile;

                    }
                }

                body.onmouseup = function() {
                    profile_width = create.profile.offsetWidth;
                    profile_height = create.profile.offsetHeight;
                    profile_x = create.profile.offsetLeft;
                    profile_y = create.profile.offsetTop;
                };
            };

            function changeSize(width, height, type) {

                var size = width >= height ? height : width;

                if (size < min_size) {
                    size = min_size;
                } else if (size > max_size) {
                    size = max_size;
                }
                var position = size - profile_width;

                if (type == 1 &&
                    profile_x - position > create.canvas.offsetLeft &&
                    profile_y - position > create.canvas.offsetTop) {

                    create.profile.style.width = create.profile.style.height = size;
                    create.profile.style.left = profile_x - position;
                    create.profile.style.top = profile_y - position;

                } else if (type == 2 &&
                    profile_x - position > create.canvas.offsetLeft &&
                    profile_y + size < create.canvas.offsetTop + create.canvas.offsetHeight) {

                    create.profile.style.width = create.profile.style.height = size;
                    create.profile.style.left = profile_x - position;
                    create.profile.style.top = profile_y;

                } else if (type == 3 &&
                    profile_x + size < create.canvas.offsetLeft + create.canvas.offsetWidth &&
                    profile_y - position > create.canvas.offsetTop) {

                    create.profile.style.width = create.profile.style.height = size;
                    create.profile.style.left = profile_x;
                    create.profile.style.top = profile_y - position;

                } else if (type == 4 &&
                    profile_x + size < create.canvas.offsetLeft + create.canvas.offsetWidth &&
                    profile_y + size < create.canvas.offsetTop + create.canvas.offsetHeight) {

                    create.profile.style.width = create.profile.style.height = size;
                    create.profile.style.left = profile_x;
                    create.profile.style.top = profile_y;

                }

                profile_picture.prototype.imageData = profileData();
            }

            function moveProfile(e) {
                if (e.button == 0 && e.buttons == 1 && e.type == "mousemove") {

                    profile_y = profile_y + (e.clientY - clientY);
                    profile_x = profile_x + (e.clientX - clientX);

                    //check profile's position limit in canvas
                    if (profile_y >= create.canvas.offsetTop && profile_y <= create.canvas.offsetTop + create.canvas.offsetHeight - create.profile.offsetHeight) {
                        clientY = e.clientY;
                    } else if (profile_y < create.canvas.offsetTop) {
                        profile_y = create.canvas.offsetTop;
                    } else if (profile_y > create.canvas.offsetTop + create.canvas.offsetHeight - create.profile.offsetHeight) {
                        profile_y = create.canvas.offsetTop + create.canvas.offsetHeight - create.profile.offsetHeight;
                    }

                    if (profile_x >= create.canvas.offsetLeft && profile_x <= create.canvas.offsetLeft + create.canvas.offsetWidth - create.profile.offsetWidth) {
                        clientX = e.clientX;
                    } else if (profile_x < create.canvas.offsetLeft) {
                        profile_x = create.canvas.offsetLeft;
                    } else if (profile_x > create.canvas.offsetLeft + create.canvas.offsetWidth - create.profile.offsetWidth) {
                        profile_x = create.canvas.offsetLeft + create.canvas.offsetWidth - create.profile.offsetWidth;
                    }

                    create.profile.style.top = profile_y;
                    create.profile.style.left = profile_x;

                    //预览
                    profile_picture.prototype.imageData = profileData();
                } else if (e.button == 0 && e.buttons == 0 && e.type == "mouseup") {}
            }

            function profileData() {

                var getimage = ctx.getImageData(create.profile.offsetLeft - create.canvas.offsetLeft, create.profile.offsetTop - create.canvas.offsetTop, create.profile.offsetWidth, create.profile.offsetHeight);

                for (var i = 0; i < getimage.data.length; i += 4) {
                    //黑白处理
                    getimage.data[i] = getimage.data[i];
                    getimage.data[i + 1] = getimage.data[i + 1];
                    getimage.data[i + 2] = getimage.data[i + 2];
                    getimage.data[i + 3] = 255;
                }

                ctx_1.putImageData(getimage, 0, 0);

                //size
                canvas.width = create.profile.offsetWidth;
                canvas.height = create.profile.offsetHeight;
                dctx.putImageData(getimage, 0, 0);
                image_d.src = canvas.toDataURL();
                ctx_1.drawImage(image_d, 0, 0, 100, 100);
                return create.canvas_image.toDataURL();
            }
        }
    }
}

profile_picture.prototype.imageData = undefined;

module.exports = profile_picture;