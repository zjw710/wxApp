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

import { Api } from "../../../utils/services";

export default class User extends Component {

    config: Config = {
        navigationBarTitleText: '个人中心'

    }


    componentWillMount() {
        Api.get_center()
            .then(res=>{
                this.setState({
                    center_arr: res['center_arr'],         
                });
            })
     }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var current_tab = 3
        return (
            <View className='index'>
                <Center center_arr={this.state.center_arr} ></Center>                                
                <TabBar current_tab={current_tab}></TabBar>
            </View>
        )
    }
}

