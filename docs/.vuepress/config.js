module.exports = {
  title: '大圣编程路线图',
  description: '学编程的最佳实践.',
  bundler:'@vuepress/bundler-vite',
  themeConfig:{
    navbar:[
      {
        text:'常用工具',
        children:[
          {text:"正则表达式",link:"https://any86.github.io/any-rule/"},
          {text:"mdnice",link:"https://mdnice.com/"},
        ]
      },
      {
        text:'摸鱼必备',
        children:[
          {text:"在线街机",link:"https://play.wo1wan.com/"},
          {text:"在线看大熊猫",link:"http://live.ipanda.com/xmcd/"},
          {text:"知乎",link:"https://www.zhihu.com/people/woniuppp"},
          {text:"B站",link:"https://space.bilibili.com/26995758"}
        ]
      },
      {
        text:'Github',
        link:"https://github.com/shengxinjing/it-roadmap"
      },
    ],
    sidebar:[
      {
        text:'HTML+CSS',
        link:'/fe/css.html',
      },{
        text:'Javascript',
        link:'/fe/Javascript.html',
      },{
        text:'实战开发',
        link:'/fe/project.html',
      },{
        text:'面试',
        link:'/fe/interview.html',
      },{
        text:'折腾自己的服务器',
        link:'/fe/server.html',
      },{
        text:'Vue',
        link:'/fe/vue.html',
      },{
        text:'React',
        link:'/fe/react.html',
      },{
        text:'框架设计理念',
        link:'/fe/framework.html',
      },{
        text:'Typescript',
        link:'/fe/typescript.html',
      },{
        text:'Node',
        link:'/fe/node.html',
      },{
        text:'工程化',
        link:'/fe/fis.html',
      },{
        text:'软技能',
        link:'/it/soft.html',
      },{
        text:'小程序',
        link:'/fe/miniapp.html',
      // },{
      //   text:'测试',
      //   link:'/fe/test.html',
      },{
        text:'计算机网络',
        link:'/it/internet.html',
      },{
        text:'算法和数据结构',
        link:'/it/algorithm.html',
      },{
        text:'项目实战',
        link:'/fe/arch.html',
      },{
        text:'浏览器原理',
        link:'/fe/browser.html',
      },{
        text:'App开发',
        link:'/fe/app.html',
      },{
        text:'热门技术',
        link:'/fe/hot',
      },
    ]
  }
}