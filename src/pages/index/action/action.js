import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './action.scss'


import { DataForm } from "../../../components/DataForm/DataForm";
import { TabBar } from "../../../components/TabBar/TabBar";
import { ImageList } from "../../../components/ImageList/ImageList"; 
import { Slide } from "../../../components/Slide/Slide"; 
import { Api } from "../../../utils/services";

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
    componentWillMount() { 
        Api.get_action()
            .then(res => {
                // console.log('get_home：') 
                // console.log(res)
                this.setState({
                    imgs_arr: res['imgs_arr'],
                    imgs_arr1: res['imgs_arr'],
                    imgs_arr2: res['imgs_arr'],
                });
            })
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        let current_tab = 2

        //初始化图片列表数据
        let imgs_arr = null
        if (this.state.imgs_arr) {
            imgs_arr = this.state.imgs_arr
        }
       
        const slide_img_arr = {
                                style: 'style1',
                                data:[
                                        { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg', path: '/pages/index/other/other' }
                                    ]	
                                }
        let form_row_arr = [{ txt: '联系姓名' }, { txt: '联系电话' }, { txt: '联系地址' }, { txt: '咨询时间' }, { txt: '留言', type: 'rich' }]
        let form_title = '-买卖房屋登记-'
        return (
            <View className='index'>
                <Slide slide_img_arr={slide_img_arr}></Slide>
                <ImageList img_arr={imgs_arr}></ImageList>
                <ImageList img_arr={imgs_arr}></ImageList>
                <ImageList img_arr={imgs_arr}></ImageList>
                <DataForm form_row_arr={form_row_arr} form_title={form_title}></DataForm>                
                <TabBar current_tab={current_tab}></TabBar>
            </View>
        )
    }
}

