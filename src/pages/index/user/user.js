import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Switch, Navigator } from '@tarojs/components'
import './user.scss'
import { OrderList } from "../../../components/OrderList/OrderList";
import { TabBar } from "../../../components/TabBar/TabBar";
import { Center } from "../../../components/Center/Center";
import { BaseComponent } from "../../../components/BaseComponent/BaseComponent";
import icon1 from "../../../images/icon_01.png";
import icon2 from "../../../images/icon_02.png";
import icon3 from "../../../images/icon_03.png";
import icon4 from "../../../images/icon_04.png";

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

        var order_sta_arr = [{ desc: '未支付', src: icon1, path: '/pages/index/other/order?type=1' }, { desc: '已支付', src: icon2, path: '/pages/index/other/order?type=2' }, { desc: '已完成', src: icon3, path: '/pages/index/other/order?type=3' }, { desc: '已取消', src: icon4, path: '/pages/index/other/order?type=4' }]
        var center_title_arr = [{ desc: '我的订单', src: icon1, path: '/pages/index/other/order' }, { desc: '我的购物车', src: icon2, path: '/pages/index/other/order' }, { desc: '我的资料', src: icon3, path: '/pages/index/other/order' }, { desc: '关于我们', src: icon4, path: '/pages/index/other/order' }]	

        return (
            <View className='index'>

                <Center order_sta_arr={order_sta_arr} center_title_arr={center_title_arr} ></Center>                
                
                <TabBar current_tab={3}></TabBar>
            </View>
        )
    }
}

