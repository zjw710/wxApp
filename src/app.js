import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.scss'

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/find',
      'pages/index/index'
      

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: './images/home.png',
        selectedIconPath: './images/home-active.png'
      }, {
        pagePath: "pages/index/find",
        text: "发现",
        iconPath: "./images/find.png",
        selectedIconPath: "./images/find-active.png"
      }, {
        pagePath: "pages/index/index",
        text: "看房",
        iconPath: "./images/action.png",
        selectedIconPath: "./images/action-active.png"
      }, {
        pagePath: "pages/index/index",
        text: "我的",
        iconPath: "./images/user.png",
        selectedIconPath: "./images/user-active.png"
      }],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white'
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
