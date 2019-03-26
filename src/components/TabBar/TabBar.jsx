import Taro, { Component } from '@tarojs/taro'
import { View, Image,Text } from '@tarojs/components'
import './TabBar.scss'

import home from "../../images/home.png";
import home_active from "../../images/home-active.png";
import find from "../../images/find.png";
import find_active from "../../images/find-active.png";
import action from "../../images/action.png";
import action_active from "../../images/action-active.png";
import user from "../../images/user.png";
import user_active from "../../images/user-active.png";

export default class TabBar extends Component {
    static defaultProps = {
        current_tab: 0
    }
    constructor(props) {
        super(props)
    }
    handleClick(value) {
        switch (value) {
            case 0:
                Taro.redirectTo({
                    url: `/pages/index/index`
                })
                break;
            case 1:
                Taro.redirectTo({
                    url: `/pages/find/find`
                })
                break;
            case 2:
                Taro.redirectTo({
                    url: `/pages/action/action`
                })
                break;
            case 3:
                Taro.redirectTo({
                    url: `/pages/user/user`
                })
                break;
            default:
                break;
        }
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

    render() {
        let menu_arr = [{ title: '首页', icon: home,icon_a:home_active }, { title: '发现', icon: find,icon_a:find_active }, { title: '看房', icon: action,icon_a:action_active }, { title: '我的', icon: user,icon_a:user_active}]
        return (
            <View className='tab-bar'>
                {menu_arr.map((item, index) => {
                    return (
                        <View taroKey={index} className='tab-bar-item' onClick={this.handleClick.bind(this,index)}>
                            <Image className="tab-bar-item-img" src={item.icon} style={index == this.props.current_tab ?'display:none;':''}></Image>
                            <Image className="tab-bar-item-img" src={item.icon_a} style={index == this.props.current_tab ? '' : 'display:none;'}></Image>
                            <Text>{item.title}</Text>
                        </View>

                    )
                })}                
            </View> 

        )
    }
}

