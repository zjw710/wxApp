import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import './TabNavList.scss'
import { GoodsList } from "../GoodsList/GoodsList";
import { TabNav } from "../TabNav/TabNav";

/**
 * 该组件废弃，已经合并到GoodsList里去了
 */
export default class TabNavList extends Component {
    constructor(props) {

        super(props)
        this.changeTab = this.changeTab.bind(this)
        this.setState({
            sel_tab:0
        })
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    // 重新选择菜单
    changeTab(index){
        console.log('TabNavList changeTab:' + index)
        this.setState({
            sel_tab:index
        })
    }

    render() {
        var goods_list = null
        var sel_tab = this.state.sel_tab
        var goods_arr = this.props.goods_arr
        if (sel_tab == 0) {
            goods_list = <GoodsList show_style={'style2'} hid_title={true} goods_arr={goods_arr}></GoodsList>
        } else if (sel_tab == 1) {
            goods_list = <GoodsList show_style={'style3'} hid_title={true} goods_arr={goods_arr}></GoodsList>
        }else{
            goods_list = <GoodsList show_style={'style1'} hid_title={true} goods_arr={goods_arr}></GoodsList>
        }                

        var menu_list = ['菜单一', '菜单二', '菜单三', '菜单四']
        return (            
            <View className='tab-nav'>
                <View className='tab-nav-menu'>
                    <TabNav menu_list={menu_list} sel_tab={this.state.sel_tab} changeTab={(index)=>{this.changeTab(index)}}></TabNav>                     
                </View>
                <View className='nav-lists'>
                    {goods_list}
                </View>
            </View>
            

        )
    }
}

