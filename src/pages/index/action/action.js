import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Switch, Navigator } from '@tarojs/components'
import './action.scss'


import { DataForm } from "../../../components/DataForm/DataForm";
import { TabBar } from "../../../components/TabBar/TabBar";


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
        return (
            <View className='index'>
                <DataForm></DataForm>                
                <TabBar current_tab={2}></TabBar>
            </View>
        )
    }
}

