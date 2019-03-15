import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import { Slide } from "../../../components/Slide/Slide";
import { Search } from "../../../components/Search/Search";
import { MagicSquare } from "../../../components/MagicSquare/MagicSquare";
import { GoodsList } from "../../../components/GoodsList/GoodsList";
import { ImageList } from "../../../components/ImageList/ImageList";
import { ArticleList } from "../../../components/ArticleList/ArticleList";
import { TabBar } from "../../../components/TabBar/TabBar";

export default class Index extends Component {




  config: Config = {
    navigationBarTitleText: '首页'
    
  }
  

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  
  render () {
    return (
      <View className='index'>        
        <Search></Search>
        <Slide></Slide>
        <MagicSquare></MagicSquare>
        
        <ImageList show_style={'style1'}></ImageList>
        <GoodsList show_style={'style1'}></GoodsList>
        <ArticleList show_style={'style3'}></ArticleList>      
        <TabBar current_tab={0}></TabBar>
      </View>
    )
  }
}

