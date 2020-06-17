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

3、路由的三个问题
	1）安装与配置：设计路径和组件配置关系（一一对应关系）
	2）和路径url匹配成功和组件，放在哪里进行展示？（router-view容器）
	3）如何改变url？（router-link声明式路由，编程式路由）
4、路由的基础知识
 	1）命名视图：给router-view组件命名。
	2）路由别名：给路由匹配关系取个小名，使用alias属性。
	3）命名路由：给路由匹配关系取个名字，使用name属性。
	4）重定向：从一个路径自动跳转到另一个路径，使用redirect属性。
	5）两种路由模式：History模式 vs. Hash模式，前者部署至服务器会报404.
	6）编程式导航：this.$router.push() / replace()。
	7）通配符：在定义一一对应的路由匹配关系时，path中可以使用 * 来匹配任意字符。
	8）动态路由：`{path:'/detail/:id', component: Detail}`，在Detail组件中可以使用`this.$route.params.id`来接收参数。
	9）路由传参：`{path:'/detail/:id', component: Detail, props:true}`props选项来接收参数。
	10）嵌套路由：<router-view>组件可以进行多级嵌套，譬如`/find/good`这样的多级路由。
	11）路由懒加载：一种性能优化方案，让组件可以在路由匹配成功时按需加载。
	12）路由守卫：对路由匹配行为进行拦截，全局守卫使用`router.beforeEach()`，局部守卫使用`beforeRouteEach()`，常常用于实现登录权限拦截功能。


