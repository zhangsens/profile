# profile-picture

> 截取头像图片

.imageData为返回图片base64格式

demo:

var profile = new profile_picture({
    ele:, //原图片位置
    class:
    ele_show, //头像位置
    class_show:
    input, //上传的input
    input_class:
    cWidth, //原图片画布宽
    cHeight, //原图片画布高
    iWidth, //头像画布宽
    iHeight, //头像画布高
    maxSize, //截取区域最大尺寸
    minSize //截取区域最小尺寸
});
profile.imageData即为图片数据

添加4个对图片的处理

黑白：profile.gray()
深色：profile.deep()
浅色：profile.light()
恢复原色调：profile.reset()

效果如下：

(https://github.com/zhangsens/profile/blob/master/img/20170627.jpg?raw=ture)
![img](https://github.com/zhangsens/profile/blob/master/img/20170627_2.jpg?raw=ture)
![img](https://github.com/zhangsens/profile/blob/master/img/20170627_3.jpg?raw=ture)
![img](https://github.com/zhangsens/profile/blob/master/img/20170627_4.jpg?raw=ture)

#后续功能

选区四角增加缩放选择区域额ui

图片可放大缩小，可在canvas内移动定位

暂不支持动图，动图需要怎么截取？？？

以后想到再加 (・ω< )★
