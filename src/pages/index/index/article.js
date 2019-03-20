import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.scss'

import { ArticleList } from "../../../components/ArticleList/ArticleList";
import { TabNav } from "../../../components/TabNav/TabNav";
import { Api } from "../../../utils/services";
import { AtLoadMore } from 'taro-ui'

var C_PAGE = 1//当前页数
var PAGE_SIZE = 10//一页多少条数据
var HAS_MORE = true//是否显示加载控件
var CAT = 1//分类

export default class Article extends Component {

    constructor(props) {

        super(props)
        this.changeTab = this.changeTab.bind(this)

        var sel_tab = 0
        if (this.props.sel_tab) {
            sel_tab = this.props.sel_tab
        }
        var article_arr = {
            style: 'style1',
            data: [
                {
                    title: '', path: '', desc: '', c_time: '', img: '',imgs: []
                },                
            ]
        }
        this.setState({
            sel_tab: sel_tab,
            article_arr: article_arr,
            load_status:'more'
        })

    }
    config: Config = {
        navigationBarTitleText: '文章列表'

    }
    componentWillMount() { 
        console.log("componentWillMount")  
        this.initLoadSta()
        this.loadMore()
    }
    /**
     * 初始化加载状态
     */
    initLoadSta(){
        C_PAGE = 1
        HAS_MORE = true
        this.setState({
            load_status: 'more'
        })
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }    
    /**
     * 切换菜单
     * @param {菜单索引} index 
     */
    changeTab(index) {
        this.initLoadSta()
        this.setState({
            sel_tab: index
        })
        CAT = index
        this.loadMore()

    }
    onReachBottom(){
        console.log("onReachBottom")        
        this.loadMore()
    }
    /**
     * 加载更多数据
     */
    loadMore(){
        if (!HAS_MORE) {
            console.log("已经没有更多数据了")
            return
        }
        this.setState({
            load_status: 'loading'
        })
        return Api.get_article(C_PAGE, CAT)
            .then(res => {
                if (!res) {
                    return
                }
                var article_data_new = res['article_arr']['data']
                if (article_data_new) {
                    var article_arr = this.state.article_arr
                    //如果是第一页，直接覆盖数据
                    if (C_PAGE == 1) {
                        article_arr['data'] = article_data_new
                    } else {
                        var article_data = article_arr['data']
                        article_data.push.apply(article_data, article_data_new)
                        article_arr['data'] = article_data
                    }

                    this.setState({
                        article_arr: article_arr
                    })

                    if (article_data_new.length < PAGE_SIZE) {
                        HAS_MORE = true
                        this.setState({
                            load_status: 'loading'
                        })
                    }
                    C_PAGE++

                } else {
                    HAS_MORE = false
                    this.setState({
                        load_status: 'noMore'
                    })
                }


            })
    }
    render() {
        var menu_list = ['全部', '行业资讯', '楼市动态', '新闻动态']
        var article_arr = this.state.article_arr
        return (
            <View className='index'>
                <TabNav menu_list={menu_list}  sel_tab={this.state.sel_tab} changeTab={(index) => { this.changeTab(index) }}></TabNav>
                <ArticleList article_arr={article_arr}></ArticleList>

                <AtLoadMore style="height:10px;" status={this.state.load_status}/>
            </View>
        )
    }
}

