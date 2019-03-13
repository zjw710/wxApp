import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './MagicSquare.scss'
import icon1 from "../../images/icon_01.png";
import icon2 from "../../images/icon_02.png";
import icon3 from "../../images/icon_03.png";
import icon4 from "../../images/icon_04.png";

import { AtIcon } from 'taro-ui'

export default class MagicSquare extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        const magic_lists = [
            { txt: '二手房', icon: icon1 }, 
            { txt: '新房', icon: icon2 }, 
            { txt: '租房', icon: icon3 }, 
            { txt: '卖房', icon: icon4 }, 
            { txt: '旅居', icon: icon1 }, 
            { txt: '找小区', icon: icon2 }, 
            { txt: '找顾问', icon: icon3 }, 
            { txt: '预约', icon: icon4 }, 
            { txt: '优选', icon: icon1 }, 
            { txt: '百科', icon: icon2 }]
        return (
            <View className='magic-square'>
                {magic_lists.map((item)=>{
                    return(
                        <View className='magic-square-view'>
                            <Image src={item.icon}></Image>
                            <Text>{item.txt}</Text>
                        </View>
                    )
                })}                               
            </View>
        )
    }
}

