var colorful = {
    gray: function(imageData) {
        //漫画效果 数组代表红绿蓝透明度
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = imageData.data[i];
            imageData.data[i + 1] = imageData.data[i];
            imageData.data[i + 2] = imageData.data[i];
            imageData.data[i + 3] = 255;
        }
        return imageData;
    },
    light: function(imageData) {
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = imageData.data[i] + 30;
            imageData.data[i + 1] = imageData.data[i + 1] + 30;
            imageData.data[i + 2] = imageData.data[i + 2] + 30;
            imageData.data[i + 3] = 255;
        }
        return imageData;
    },
    deep: function(imageData) {
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = imageData.data[i] - 30;
            imageData.data[i + 1] = imageData.data[i + 1] - 30;
            imageData.data[i + 2] = imageData.data[i + 2] - 30;
            imageData.data[i + 3] = 255;
        }
        return imageData;
    },

    opacity: function(value) {
        //0 < value < 1;
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i + 3] = 255 * value;
        }
        return imageData;
    }
}

module.exports = colorful;