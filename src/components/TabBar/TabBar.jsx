import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
// import './TabBar.scss'
import { AtTabBar } from 'taro-ui'

export default class TabBar extends Component {

    constructor(props) {
        
        super(...arguments)     
        this.state = {
            current: 0
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(value,e) {
        console.log('value:')
        console.log(e)
        
        value = 1
        this.setState({
            current: value
        })
        switch (value) {
            case 0:
                Taro.redirectTo({
                    url: `/pages/index/index`
                })
                break;
            case 1:
                Taro.redirectTo({
                    url: `/pages/index/find`
                })
                break;
            case 2:
                Taro.redirectTo({
                    url: `/pages/index/action`
                })
                break;
            case 3:
                Taro.redirectTo({
                    url: `/pages/index/user`
                })
                break;
            default:
                break;
        }
    }
    componentWillMount() {
        console.log('componentWillMount')
     }

    componentDidMount() {
        console.log('componentDidMount')
     }

    componentWillUnmount() { 
        console.log('componentWillUnmount')
    }

    componentDidShow() {
        console.log(this.props)
        this.setState({
            current: this.props.current_tab
        })
     }

    componentDidHide() {
        console.log('componentDidHide')
     }

    render() {
        // var name = this.props.name
        var current = this.props.current_tab
        return (
            <View className='tab-bar'>
                <View style='height:50px;'></View>
                <AtTabBar fixed tabList={[
                    { index:0,title: '首页', iconType: 'home' },
                    { index: 1, title: '发现', iconType: 'message' },
                    { index: 2,title: '看房', iconType: 'folder' },
                    { index: 3,title: '我的', iconType: 'user' }
                ]}
                    data-myid={10086}
                    onClick={this.handleClick.bind(this)}
                    current={this.state.current}
                />
            </View> 

        )
    }
}

