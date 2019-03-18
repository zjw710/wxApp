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

        //支持样式
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
            case 'style4':
                style = 'style4'
                break;                
            default:
                style = 'style1'
                break;
        }
        this.setState({
            style: style,//样式，支持style1，style2,style3
        })
        this.goToPage = this.goToPage.bind(this)
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
    goToPage(path){
        Taro.navigateTo({
            url: path
        })
    }

    render() {
        var style = this.state.style
        
        const magic_lists = [
            { txt: '二手房',desc:'最新二手房', icon: icon1, v_style:'background-color: rgb(247, 193, 20);',path:'/pages/index/other/other' }, //,txt_style:'background-color: rgb(247, 103, 167);'
            { txt: '新房', desc: '最新新房', icon: icon2, v_style:'background-color: rgb(184, 210, 0);' }, //,txt_style:'background-color: rgb(252, 145, 112);' 
            // { txt: '租房', icon: icon3, v_style:'background-color: rgb(247, 193, 20); background-image: none;' }, 
            // { txt: '卖房', icon: icon4, v_style:'background-color: rgb(184, 210, 0); background-image: none;' }, 
            // { txt: '旅居', icon: icon1 }, 
            // { txt: '找小区', icon: icon2 }, 
            // { txt: '找顾问', icon: icon3 }, 
            // { txt: '预约', icon: icon4 }, 
            { txt: '优选', desc: '丰富资讯', icon: icon1,v_style:'background-color: rgb(184, 210, 0);',txt_style:'background-color: rgb(184, 210, 0);'  }, 
            { txt: '百科', desc: '最全百科', icon: icon2,v_style: '',txt_style:'' }]
        var length = magic_lists.length
        // var show_view = <View></View>
        //样式三中，元素间隔左右调转
        if (style == 'style3') {
            for (let i = 0; i < length; i++) {
                if (i%2 == 1) {
                    magic_lists[i].v_style += 'flex-flow: row-reverse;'
                } 
            }
        }

        //分成两行进行渲染，根据菜单数量进行自动排版
        var first_row = []
        var second_row = []
        
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
        var style1 = <View className='magic'>
                        <View className='magic-square'>
                            <View className='magic-square-first'>
                                {first_row.map((item, index) => {
                                    return (
                                        <View taroKey={index} className='magic-square-first-view'  onClick={this.goToPage.bind(this,item.path)}>
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

        var style2 = <View className='magic'>
                        <View className='magic-square'>
                        {magic_lists.map((item, index) => {
                                return (
                                    <View taroKey={index} className='magic-square-view'>
                                        <View className='magic-square-view-view' style={item.v_style}>                                            
                                            <View className='magic-square-view-view-txt' style={item.txt_style}>
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
        //该展示方式只支持三个元素，因为取数组的前三个元素
        var first_col = {}
        var second_col = []
        for (let i = 0; i < length; i++) {
            if(i>2){
                break;
            }
            if (i == 0) {
                first_col = magic_lists[i];
            } else {
                second_col[i-1] = magic_lists[i];
            }
        }

        var style4 = <View className='magic'>
                        <View className='magic-square'>
                            <View>
                                <View taroKey={index} className='magic-square-view'>
                                    <View className='magic-square-view-view' style={first_col.v_style}>                                            
                                        <View className='magic-square-view-view-txt' style={first_col.txt_style}>
                                            <Text className='magic-square-view-view-txt-title'>{first_col.txt}</Text>
                                            <Text className='magic-square-view-view-txt-desc'>{first_col.desc}</Text>
                                        </View>

                                        <View className='magic-square-view-view-img'>
                                            <Image src={first_col.icon}></Image>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                {second_col.map((item, index) => {
                                    return (
                                    <View taroKey={index} className='magic-square-secview'>
                                        <View className='magic-square-secview-view' style={item.v_style}>                                            
                                            <View className='magic-square-secview-view-txt' style={item.txt_style}>
                                                <Text className='magic-square-secview-view-txt-title'>{item.txt}</Text>
                                                <Text className='magic-square-secview-view-txt-desc'>{item.desc}</Text>
                                            </View>

                                            <View className='magic-square-secview-view-img'>
                                                <Image src={item.icon}></Image>
                                            </View>
                                        </View>
                                    </View>                                                                       
                                    )
                                })}
                            </View>
                        
                        </View>
                    </View>
        
        return (
            <View>
                <View className='style1' style={style != 'style1' ? 'display:none;' : ''}>
                    {style1}
                </View>
                <View className='style2' style={style != 'style2' ? 'display:none;' : ''}>
                    {style2}
                </View>   
                <View className='style3' style={style != 'style3' ? 'display:none;' : ''}>
                    {style2}
                </View>    
                <View className='style4' style={style != 'style4' ? 'display:none;' : ''}>
                    {style4}
                </View>            
            </View>
            
            
        )
    }
}

