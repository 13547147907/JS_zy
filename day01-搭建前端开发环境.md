# 搭建前端开发环境

## 一、安装谷歌浏览器

在谷歌浏览器官网下载电脑操作系统对应的版本，并安装。

## 二、安装Node

在Node官网下载需要版本的安装包。

#### （一）安装步骤

##### 一）安装包下载完成后，双击“node-v6.9.2-x64.msi”，开始安装。

##### 点击【Next】

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160112609.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0Nzg3NTc5,size_16,color_FFFFFF,t_70#pic_center)


##### 二）勾选复选框，点击【Next】
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160141141.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0Nzg3NTc5,size_16,color_FFFFFF,t_70#pic_center)


##### 三）修改安装目录到其他磁盘，尽量不要安装到C盘。点击【Next】
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160247840.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0Nzg3NTc5,size_16,color_FFFFFF,t_70#pic_center)


##### 四）点击【Install】
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160321413.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0Nzg3NTc5,size_16,color_FFFFFF,t_70#pic_center)


##### 五）安装完后点击【Finish】完成安装
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160334729.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0Nzg3NTc5,size_16,color_FFFFFF,t_70#pic_center)


#### （二）检验一下是否安装成功

键盘按键【win+R】，输入cmd

输入node -v，显示node.js的版本号说明安装成功。

接着输入npm -v，显示npm版本号说明自带的npm也安装成功。

#### （三）环境配置

##### 一）若希望将全模块所在路径和缓存路径放在node.js安装的文件夹中，则在我安装的文件夹下创建两个文件夹【node_global】和【node_cache】


##### 二）两个空文件夹创建完后，打开cmd命令窗口，输入

```
npm config set prefix "E:\Node\install\node_global"
```

```
npm config set cache "E:\Node\install\node_cache"
```

##### 三）设置环境变量。

【此电脑】>【右键】>【属性】>【高级系统设置】>【高级】>【环境变量】。

进入环境变量，在系统变量中新建【NODE_PATH】，输入【E:\Node\install\node_global\node_modules】。

再将用户变量中的【path】修改为【E:\Node\install\node_global】击确定。

##### 四）测试

打开cmd命令窗口，输入【npm install express -g】。安装后可看到express模块安装在刚才配置的全局模块路径的文件夹中，还可以看到express安装的版本。

## 三、安装编辑器Visual Studio Code

到官方网站上下载需要版本的安装包，并安装。

## 四、安装分布式版本控制工具Git

#### （一）到官方网站上下载需要版本的安装包，并安装。

安装过程中将Git的默认编辑器改为Visual Studio Code
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160438282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0Nzg3NTc5,size_16,color_FFFFFF,t_70#pic_center)


安装完成后，在开始菜单里找到【Git Bash】，蹦出一个类似命令行窗口的东西，就说明Git安装成功
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160452604.png#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160524853.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0Nzg3NTc5,size_16,color_FFFFFF,t_70#pic_center)


#### （二）创建版本库

##### 一）选择一个合适的地方，创建一个空目录

用cd进入创建的空目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160549700.png#pic_center)


进入空目录后，输入pwd
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200925160601326.png#pic_center)


##### 二）通过【git init】命令把这个目录变成Git可以管理的仓库

## 五、安装Markdown文档编辑器Typora

到官方网站上下载需要版本的安装包，并安装。
