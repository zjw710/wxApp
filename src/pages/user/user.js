import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './user.scss'
import TabBar from "../../components/TabBar/TabBar";
import Center from "../../components/Center/Center";


import { Api } from "../../utils/services";

export default class User extends Component {

    config: Config = {
        navigationBarTitleText: '个人中心'

    }


    componentWillMount() {
        Api.get_center()
            .then(res=>{
                this.setState({
                    center_arr: res['center'],         
                });
            })
     }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var current_tab = 3
        //初始化个人中心数据
        var center_arr = []
        if (this.state.center_arr) {
            center_arr = this.state.center_arr
        }
        let CenterCom = center_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <Center center_arr={item} ></Center> 
                </View>

            )
        })
        return (
            <View className='index'>
                {CenterCom}                              
                <TabBar current_tab={current_tab}></TabBar>
            </View>
        )
    }
}

