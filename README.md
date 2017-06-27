# profile-picture

> 截取头像图片

.imageData为返回图片base64格式

demo:

var profile = new profile_picture({
    ele: document.body
});
profile.imageData即为图片数据

添加4个对图片的处理

黑白：profile.gray()
深色：profile.deep()
浅色：profile.light()
恢复原色调：profile.reset()
效果如下：
![img](https://github.com/zhangsens/profile/blob/master/img/20170627.jpg?raw=ture)
![img](https://github.com/zhangsens/profile/blob/master/img/20170627_2.jpg?raw=ture)

#后续功能
增加可自定义的属性

选区四角增加缩放选择区域额ui

图片放入canvas的合适位置
以后想到再加 (・ω< )★
