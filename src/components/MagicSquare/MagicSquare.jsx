import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './MagicSquare.scss'

export default class MagicSquare extends Component {
    static defaultProps = {
        magic_arr: { style: 'style1', data: [{ txt: '', desc: '', icon: '', v_style: '', path: '', txt_style: '' }] }
    }
    constructor(props) {
        super(props)        
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
        //获取传入参数  
        let magic_arr = this.props.magic_arr
        let magic_data = magic_arr['data']
        let style = magic_arr['style']
  

        switch (style) {
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
                            
        var length = magic_data.length
        // var show_view = <View></View>
        //样式三中，元素左右调转
        if (style == 'style3') {
            for (let i = 0; i < length; i++) {
                if (i%2 == 1) {
                    magic_data[i].v_style += 'flex-flow: row-reverse;'
                } 
            }
        }

        //分成两行进行渲染，根据菜单数量进行自动排版
        var first_row = []
        var second_row = []
        
        if (length > 5) {
            for (let i = 0; i < length; i++) {
                if (i < 5) {
                    first_row[i] = magic_data[i];
                } else {
                    second_row[i - 5] = magic_data[i];
                }
            }
        } else {
            first_row = magic_data
        }
        var style1 = <View className='magic'>
                        <View className='magic-square'>
                            <View className='magic-square-first'>
                                {first_row.map((item, index) => {
                                    return (
                                        <View taroKey={index} className='magic-square-first-view'  onClick={this.goToPage.bind(this,item.path)}>
                                            <Image className='magic-square-view-img' src={item.icon}></Image>
                                            <Text className='magic-square-view-txt'>{item.txt}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                            <View className='magic-square-second'>
                                {second_row.map((item, index) => {
                                    return (
                                        <View taroKey={index} className='magic-square-second-view' onClick={this.goToPage.bind(this, item.path)}>
                                            <Image className='magic-square-view-img' src={item.icon}></Image>
                                            <Text className='magic-square-view-txt'>{item.txt}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </View>  

        var style2 = <View className='magic'>
                        <View className='magic-square'>
                        {magic_data.map((item, index) => {
                                return (
                                    <View taroKey={index} className='magic-square-view' onClick={this.goToPage.bind(this, item.path)}>
                                        <View className='magic-square-view-view' style={item.v_style}>                                            
                                            <View className='magic-square-view-view-txt' style={item.txt_style}>
                                                <Text className='magic-square-view-view-txt-title'>{item.txt}</Text>
                                                <Text className='magic-square-view-view-txt-desc'>{item.desc}</Text>
                                            </View>

                                            <View className='magic-square-view-view-img'>
                                                <Image className='magic-square-view-view-img-img' src={item.icon}></Image>
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
                first_col = magic_data[i];
            } else {
                second_col[i - 1] = magic_data[i];
            }
        }

        var style4 = <View className='magic'>
                        <View className='magic-square'>
                            <View>
                                <View className='magic-square-view' onClick={this.goToPage.bind(this, first_col.path)}>
                                    <View className='magic-square-view-view' style={first_col.v_style}>                                            
                                        <View className='magic-square-view-view-txt' style={first_col.txt_style}>
                                            <Text className='magic-square-view-view-txt-title'>{first_col.txt}</Text>
                                            <Text className='magic-square-view-view-txt-desc'>{first_col.desc}</Text>
                                        </View>

                                        <View className='magic-square-view-view-img'>
                                            <Image className='magic-square-view-view-img-img' src={first_col.icon}></Image>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                {second_col.map((item, index) => {
                                    return (
                                        <View taroKey={index} className='magic-square-secview' onClick={this.goToPage.bind(this, item.path)}>
                                            <View className='magic-square-secview-view' style={item.v_style}>                                            
                                                <View className='magic-square-secview-view-txt' style={item.txt_style}>
                                                    <Text className='magic-square-secview-view-txt-title'>{item.txt}</Text>
                                                    <Text className='magic-square-secview-view-txt-desc'>{item.desc}</Text>
                                                </View>

                                                <View className='magic-square-secview-view-img'>
                                                    <Image className='magic-square-secview-view-img-img' src={item.icon}></Image>
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

