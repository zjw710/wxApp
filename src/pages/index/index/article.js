import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.scss'

import { ArticleList } from "../../../components/ArticleList/ArticleList";
import { TabNav } from "../../../components/TabNav/TabNav";

export default class Article extends Component {

    constructor(props) {

        super(props)
        this.changeTab = this.changeTab.bind(this)

        var sel_tab = 0
        if (this.props.sel_tab) {
            sel_tab = this.props.sel_tab
        }
        this.setState({
            sel_tab: sel_tab
        })

    }
    config: Config = {
        navigationBarTitleText: '文章列表'

    }


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    // 重新选择菜单
    changeTab(index) {
        this.setState({
            sel_tab: index
        })
    }
    render() {
        var menu_list = ['全部', '行业资讯', '楼市动态', '新闻动态']
        return (
            <View className='index'>
                <TabNav menu_list={menu_list}  sel_tab={this.state.sel_tab} changeTab={(index) => { this.changeTab(index) }}></TabNav>
                <ArticleList hid_title={true} show_style={'style1'}></ArticleList>
            </View>
        )
    }
}

