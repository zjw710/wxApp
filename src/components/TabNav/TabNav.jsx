import Taro, { Component } from '@tarojs/taro'
import { View, Input,Text } from '@tarojs/components'
import './TabNav.scss'

export default class TabNav extends Component {
    static defaultProps = {
        menu_list: [],
        sel_tab:0
    }
    constructor(props) {
        super(props)
        var sel_tab = this.props.sel_tab
        this.setState({
            sel_tab: sel_tab
        })
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    // 重新选择菜单
    changeTab(index) {
        this.props.changeTab(index)
        this.setState({
            sel_tab: index
        })
    }

    render() {
        var menu_list = this.props.menu_list
        return (
            <View className='nav'>
                <View className='nav-tab'>
                    {menu_list.map((item, index) => {
                        return (
                            <View taroKey={index} onClick={this.changeTab.bind(this,index)}
                                className={this.state.sel_tab == index ? "nav-tab-item checked" : "nav-tab-item"} >
                                <Text>{item}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>            

        )
    }
}

//