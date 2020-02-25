# 搞快点商城(移动端)

使用vant(有赞)UI组件库的SPA单页面商城应用

# 项目截图

<img src="./md_files/screen1.png" width="40%">
<img src="./md_files/2020-02-25 12.56.50 (2).png" width="40%">
<img src="./md_files/2020-02-25 12.56.50 (3).png" width="40%">
<img src="./md_files/2020-02-25 12.56.50 (4).png" width="40%">

# 功能列表
- 首页
- 购物车
- 订单
- 个人中心
- 登录页面
- 商品详情
- 完整的下单支付流程
- 待补充 : 完整的收获地址选择流程

# 项目结构

```
│  .browserslistrc
│  .eslintrc.js
│  .gitignore
│  babel.config.js
│  OPTIMIZE.md
│  package-lock.json
│  package.json                 
│  postcss.config.js
│  PROCESS.md
│  README.md
│  tsconfig.json
│  vue.config.js                // cli配置文件
│  yarn.lock
│      
├─public
│      favicon.ico
│      index.html               // html template
│      
└─src
    │  App.vue                  // 根组件
    │  main.ts                  // 项目入口文件
    │  shims-tsx.d.ts
    │  shims-vue.d.ts
    │  
    ├─api                       // 接口文件存放目录
    │      cart.ts              
    │      home.ts              
    │      
    ├─assets                    // 静态资源目录
    │  │  logo.png
    │  │  
    │  ├─images   
    │  │      weichat.png
    │  │      zhifubao.png
    │  │      _20200224114153.jpg
    │  │      
    │  └─scss
    │          app.scss
    │          global.scss
    │          reset.scss
    │          
    ├─components                // 组件存放目录
    │  │  HelloWorld.vue
    │  │  util.ts
    │  │  
    │  ├─BackToTop
    │  │      index.vue
    │  │      
    │  ├─CartHeader
    │  │      index.vue
    │  │      
    │  ├─CartItem
    │  │      index.vue
    │  │      
    │  ├─CartList
    │  │      index.vue
    │  │      
    │  ├─EntityItem
    │  │      index.vue
    │  │      
    │  ├─OnReachBottom
    │  │      index.vue
    │  │      
    │  ├─Order
    │  │      index.vue
    │  │      
    │  ├─OrderItem
    │  │      index.vue
    │  │      
    │  ├─Specs
    │  │      SpecsGroup.js
    │  │      SpecsGroup.scss
    │  │      SpecsItem.vue
    │  │      
    │  └─Spinner
    │          index.vue
    │          
    ├─mock                      // mock目录 仅限开发环境使用
    │  │  index.ts
    │  │  util.ts
    │  │  
    │  └─servies
    │          cart.ts
    │          home.ts
    │          product.ts
    │          
    ├─router                    // 路由文件存放目录
    │      index.ts 
    │      
    ├─store                     // store状态机存放目录
    │  │  index.ts
    │  │  
    │  └─modules
    │          cart.ts
    │          home.ts
    │          
    ├─types
    │      index.ts
    │      
    ├─utils                     // 项目工具文件目录
    │      asyncLoader.ts
    │      EventEmitter.ts
    │      request.ts
    │      util.ts
    │      
    └─views                     // 视图组件目录
        │  Layout.vue
        │  
        ├─About
        │      index.vue
        │      
        ├─Cart
        │      index.vue
        │      
        ├─Detail
        │      index.vue
        │      
        ├─Home
        │      index.vue
        │      
        ├─Login
        │      index.vue
        │      
        ├─My
        │      index.vue
        │      
        ├─Order
        │      index.vue
        │      
        └─Submit
                ConfirmOrder.vue
                SubmitOrder.vue
                SuccessPurchase.vue
```

# 相关库与插件

- Vue + Vuex + Vue-Router + Sass
- yy-axios (本人使用typescript重构的axios)
- vant
- typescript
- postcss-to-viewport (使用vw 作为适配单位)