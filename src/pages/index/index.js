import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import { Slide } from "../../components/Slide/Slide";
import { Search } from "../../components/Search/Search";
import { MagicSquare } from "../../components/MagicSquare/MagicSquare";
import { GoodsList } from "../../components/GoodsList/GoodsList";
import { ImageList } from "../../components/ImageList/ImageList";
import { ArticleList } from "../../components/ArticleList/ArticleList";
import { TabBar } from "../../components/TabBar/TabBar";

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  config: Config = {
    navigationBarTitleText: '首页'
    
  }
  

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    var name = 'test'
    var current = 0
    return (
      <View className='index'>        
        <Search name={name}></Search>
        <Slide></Slide>
        <MagicSquare></MagicSquare>
        
        <ImageList></ImageList>
        <GoodsList></GoodsList>
        <ArticleList></ArticleList>      
                
      </View>
    )
  }
}

