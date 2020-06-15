# my-project

## 项目设置
```
npm install
```
### 编译和热重新加载用于开发
```
npm run serve
```
### 编译和缩小用于生产
```
npm run build
```
### Lints和修复文件
```
npm run lint
```
### 定制配置
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue-cli 安装过程

#### 安装：

1.使用命令 npm install -g @vue/cli   或者

使用命令 cnpm install -g @vue/cli

但是这需要安装cnpm

使用命令 $ npm install -g cnpm --registry=https://registry.npm.taobao.org

参考地址：

淘宝NPM镜像：https://developer.aliyun.com/mirror/NPM?from=tnpm

vue CLI：https://cli.vuejs.org/

#### 创建一个项目：

1.使用命令 vue create my-project

#### 项目运行命令：

1.使用命令npm run serve（在项目的根目录下运行）

2.可以在项目的根目录下的package.json文件里插入

```
"scripts":{
  ...
  "start":"npm run serve"
}
```

![](D:\360MoveData\Users\Administrator\Desktop\HTML5大前端\Vue\my-project\1.png)

项目就能使用命令 npm start 运行

#### 打包生成dist文件夹

使用命令 npm rum build （在项目的根目录下运行）



#### 一、Vue项目创建

1、安装node.js环境（node -v 验证）
	  A -> B C -> D -> E 依赖的层级关系

2、安装vue脚手架（@vue/cli)
	脚手架是一个第三方库，需先安装才能使用
	-g 表示全局安装 global

3、使用脚手架来创建项目
	warn warning 警告,可不处理
	error 红色报错,是失败，一定要处理

4、vue.config.js 配置文件
	让我们的vue项目更加灵活、满足个性化的开发需求

5、npm的使用（用于安装第三方模块）
	npm install xxx -S  把包记录在dependencies这里
	npm install yyy -D  把包记录在devDependencies这里
	npm install 会根据根目录中的package.json文件中记录的第三方包来进行安装。
	npm install zzz -g  全局安装永久可用

6、cnpm的使用

​	把国外的服务器，切换至淘宝镜像源。
​	使用cnpm安装第三方模块，网速会更快。
​	npm install -g cnpm --registry=https://registry.npm.taobao.org

7、ESLInt

​    作用:用于规范代码风格
​    如果你的代码不满足规范，就会出现警告或报错。

8、devtools安装

​      git clone https://github.com/arcliang/Vue-Devtools-.git            	 打开谷歌浏览器：设置-扩展程序-加载已解压的拓展包              	重启一下浏览器

9、webpack

​	本地服务器，指向public目录

​	热更新：webpack实时监听代码的变化，并实时编译，页面自动更新

当npm start启动本地服务器后，webpack就会动态地把入口文件main.js编译压缩插入到index.html文件中去



#### 路由 vue-router

1、单页面应用程序（SPA）
	一切皆组件

2、vue-router的基础使用（让SPA开发更简单）
	 安装 cnpm install vue-router -S
	 在src/router.js文件，注册路由、创建路由实例并抛出
	 在入口文件main.js中引入路由实例并挂载
	 在App.js组件中，使用内置组件<router-view></router-view>容器来放置匹配成功的组件
	 使用<router-link></router-link>实现页面的跳转

