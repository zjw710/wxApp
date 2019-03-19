import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './action.scss'


import { DataForm } from "../../../components/DataForm/DataForm";
import { TabBar } from "../../../components/TabBar/TabBar";
import { ImageList } from "../../../components/ImageList/ImageList"; 
import { Slide } from "../../../components/Slide/Slide"; 


export default class Action extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    config: Config = {
        navigationBarTitleText: '发现'

    }


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var name = 'test'
        var current = 1
        var img_arr = [
            { title: '小户型二居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDgsOjgBSjUzamGBjDuBTi0BEBl.jpg', path: '/pages/index/other/other' },
            { title: '温馨三居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },            
        ] 
        var img_title = '-新房优选-'
        var img_arr1 = [            
            { title: '短租旅居没问题', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDzsOjgBSjUmOSHBDDuBTi0BEBl.jpg' },
            { title: '新房优惠任你选', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDLsOjgBSjByYC7BDDuBTi0BEBl.jpg' }
        ]   
        var img_title1 = '-二手精选-'
        var img_arr2 = [            
            { title: '温馨四居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
            { title: '短租旅居没问题', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDzsOjgBSjUmOSHBDDuBTi0BEBl.jpg' }
        ]  
        var img_title2 = '-自在租房-'   
        const slide_img_arr = [
            { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg', path: '/pages/index/other/other' }
        ]	
        var form_row_arr = [{ txt: '联系姓名' }, { txt: '联系电话' }, { txt: '联系地址' }, { txt: '咨询时间' }, { txt: '留言', type: 'rich' }]
        var form_title = '-买卖房屋登记-'
        return (
            <View className='index'>
                <Slide show_style={'style2'} slide_img_arr={slide_img_arr}></Slide>
                <ImageList show_style={'style1'} img_arr={img_arr} img_title={img_title}></ImageList>
                <ImageList show_style={'style1'} img_arr={img_arr1} img_title={img_title1}></ImageList>
                <ImageList show_style={'style1'} img_arr={img_arr2} img_title={img_title2}></ImageList>
                <DataForm form_row_arr={form_row_arr} form_title={form_title}></DataForm>                
                <TabBar current_tab={2}></TabBar>
            </View>
        )
    }
}

