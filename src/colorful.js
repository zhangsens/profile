var colorful = {
    gray: function(imageData) {
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
            imageData.data[i] = imageData.data[i] + 100;
            imageData.data[i + 1] = imageData.data[i + 1] + 100;
            imageData.data[i + 2] = imageData.data[i + 2] + 100;
            imageData.data[i + 3] = 255;
        }
        return imageData;
    },
    deep: function(imageData) {
        for (var i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = imageData.data[i] - 100;
            imageData.data[i + 1] = imageData.data[i + 1] - 100;
            imageData.data[i + 2] = imageData.data[i + 2] - 100;
            imageData.data[i + 3] = 255;
        }
        return imageData;
    }
}

module.exports = colorful;