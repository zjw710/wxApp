import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Switch, Navigator } from '@tarojs/components'
import './user.scss'
import { OrderList } from "../../../components/OrderList/OrderList";
import { TabBar } from "../../../components/TabBar/TabBar";
import { Center } from "../../../components/Center/Center";


export default class User extends Component {

    config: Config = {
        navigationBarTitleText: '个人中心'

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

                <Center></Center>                
                <TabBar current_tab={3}></TabBar>
            </View>
        )
    }
}

