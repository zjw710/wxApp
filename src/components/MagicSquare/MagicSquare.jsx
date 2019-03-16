import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './MagicSquare.scss'
import icon1 from "../../images/icon_01.png";
import icon2 from "../../images/icon_02.png";
import icon3 from "../../images/icon_03.png";
import icon4 from "../../images/icon_04.png";

import { AtIcon } from 'taro-ui'

export default class MagicSquare extends Component {

    constructor(props) {
        super(props)
        var style = 'style1'

        //支持三种样式
        switch (this.props.show_style) {
            case 'style1':
                style = 'style1'
                break;
            case 'style2':
                style = 'style2'
                break;
            case 'style3':
                style = 'style3'
                break;
            default:
                style = 'style1'
                break;
        }
        this.setState({
            style: style,//样式，支持style1，style2,style3
        })
    }
    componentWillMount() {
  
     }

    componentDidMount() {

     }

    componentWillUnmount() {

     }

    componentDidShow() {

     }

    componentDidHide() {

     }

    render() {
        var style = 'style2'
        
        const magic_lists = [
            { txt: '二手房',desc:'最新二手房', icon: icon1, style:'background-color: rgb(247, 103, 167); background-image: none;' }, 
            { txt: '新房', desc: '最新新房', icon: icon2, style:'background-color: rgb(252, 145, 112); background-image: none;' }, 
            // { txt: '租房', icon: icon3, style:'background-color: rgb(247, 193, 20); background-image: none;' }, 
            // { txt: '卖房', icon: icon4, style:'background-color: rgb(184, 210, 0); background-image: none;' }, 
            // { txt: '旅居', icon: icon1 }, 
            // { txt: '找小区', icon: icon2 }, 
            // { txt: '找顾问', icon: icon3 }, 
            // { txt: '预约', icon: icon4 }, 
            { txt: '优选', desc: '丰富资讯', icon: icon1 }, 
            { txt: '百科', desc: '最全百科', icon: icon2 }]
        // var show_view = <View></View>

        if (style == 'style1') {
            //分成两行进行渲染，根据菜单数量进行自动排版
            var first_row = []
            var second_row = []
            var length = magic_lists.length
            if (length > 5) {
                for (let i = 0; i < length; i++) {
                    if (i < 5) {
                        first_row[i] = magic_lists[i];
                    } else {
                        second_row[i - 5] = magic_lists[i];
                    }
                }
            } else {
                first_row = magic_lists
            }
            var show_view = <View className='magic'>
                            <View className='magic-square'>
                                <View className='magic-square-first'>
                                    {first_row.map((item, index) => {
                                        return (
                                            <View taroKey={index} className='magic-square-first-view'>
                                                <Image src={item.icon}></Image>
                                                <Text>{item.txt}</Text>
                                            </View>
                                        )
                                    })}
                                </View>
                                <View className='magic-square-second'>
                                    {second_row.map((item, index) => {
                                        return (
                                            <View taroKey={index} className='magic-square-second-view'>
                                                <Image src={item.icon}></Image>
                                                <Text>{item.txt}</Text>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>
                        </View>  
        } else {
            var show_view = <View className='magic'>
                            <View className='magic-square'>
                            {magic_lists.map((item, index) => {
                                    return (
                                        <View taroKey={index} className='magic-square-view'>
                                            <View className='magic-square-view-view' style={item.style}>
                                                <View className='magic-square-view-view-txt'>
                                                    <Text className='magic-square-view-view-txt-title'>{item.txt}</Text>
                                                    <Text className='magic-square-view-view-txt-desc'>{item.desc}</Text>
                                                </View>

                                                <View className='magic-square-view-view-img'>
                                                    <Image src={item.icon}></Image>
                                                </View>
                                            </View>


                                        </View>
                                    )
                                })}
                            </View>
                        </View>
        }
        
        return (
            <View className={style}>
                {show_view}
            </View>
            
            
        )
    }
}

