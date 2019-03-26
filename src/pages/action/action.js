import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './action.scss'
import TabBar from "../../components/TabBar/TabBar";
import { Api } from "../../utils/services";
import BaseComponent from "../../components/BaseComponent/BaseComponent";

export default class Action extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    config: Config = {
        navigationBarTitleText: '看房'

    }
    constructor(props) {
        super(props)
    }
    componentWillMount() { 
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    onReachBottom() {
        console.log("Action onReachBottom.")
        Taro.loadMore()
    }

    render() {
        let current_tab = 2
        return (
            <View className='index'>                
                <BaseComponent loadFun={() => Api.get_action()}></BaseComponent>
                <TabBar current_tab={current_tab}></TabBar>
            </View>
        )
    }
}

