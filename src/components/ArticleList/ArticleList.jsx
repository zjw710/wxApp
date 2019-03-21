import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Image } from '@tarojs/components'
import { Api } from "../../utils/services";
import { AtLoadMore } from 'taro-ui'
import { TabNav } from "../TabNav/TabNav";
import './ArticleList.scss'

var C_PAGE = 1//当前页数
var PAGE_SIZE = 10//一页多少条数据
var HAS_MORE = true//是否还有更多数据
var SHOW_MORE = false//是否隐藏加载更多
var CAT = 0//分类,默认为全部
var IS_INIT = 0

export default class ArticleList extends Component {
    constructor(props){
        super(props)
        this.goToPage = this.goToPage.bind(this)
        this.changeTab = this.changeTab.bind(this)

        var article_arr = null
        var sel_tab = 0
        this.setState({
            sel_tab: sel_tab,
            article_arr: article_arr,
            load_status: 'more'
        })
    }
    componentWillMount() {               
    }

    componentDidMount() {                
        if (this.props.getChild) {
            this.props.getChild(this)//传递子组件对象给父组件
        }        
     }

    componentWillUnmount() { 
        IS_INIT = 0
    }

    componentDidShow() {         
        
    }

    componentDidHide() {
        // console.log("article componentDidHide:")
        IS_INIT = 0
     }
    /**
     * 上拉到底部触发事件
     */
    onReachBottom(){
        // console.log("onReachBottom")        
        
    }
    /**
     * 跳转页面
     * @param {跳转页面路径} path 
     */
    goToPage(path) {
        Taro.navigateTo({
            url: path
        })
    }
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
    /**
     * 初始化加载状态
     */
    initLoadSta() {
        C_PAGE = 1
        HAS_MORE = true
        SHOW_MORE = true
        this.setState({
            load_status: 'more'
        })
        IS_INIT = 1
    }
    /**
     * 加载更多数据
     */
    loadMore() {
        if (!HAS_MORE) {
            // console.log("已经没有更多数据了")
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
                    var article_arr = this.state.article_arr ? this.state.article_arr:[]
                    //如果是第一页，直接覆盖数据
                    if (C_PAGE == 1) {
                        article_arr = res['article_arr']                     
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
        //如果需要请求网络进行初始化，但未初始化，则初始化一次
        if (this.props.show_more && !IS_INIT) {
            this.initLoadSta()
            this.loadMore()   
        }
        //初始化参数        
        //title为空，则不显示标题；menus为空，则不显示分类菜单
        let init_article_arr = { style: 'style1', title: {desc:'',path:''}, menus: [] ,data: [{ title: '', desc: '', c_time: '', img: '', imgs: [], path: ''}]}
        let article_data = init_article_arr['data']
        let title = init_article_arr['title']

        let style = init_article_arr['style']
        let menus = init_article_arr['menus']

        let hid_title = true
        let show_tabnav = false  //是否隐藏分类菜单
        //获取传入参数
        if (this.props.article_arr) {
            let article_arr = this.props.article_arr    
            article_data = article_arr['data']
            style = article_arr['style']
            title = article_arr['title']
            menus = article_arr['menus']

        }else if (this.state.article_arr) {
            let article_arr = this.state.article_arr
            article_data = article_arr['data']
            style = article_arr['style']
            title = article_arr['title']
            menus = article_arr['menus']
        }  
        if (title && title['desc']) {
            hid_title = false
        }
        if (menus && menus.length>0) {
            show_tabnav = true
        }

        //对样式进行判断
        switch (style) {
            case 'style1':
                style = 'style1'
                break;
            case 'style2':
                style = 'style2'
                break;
            case 'style3':
                style = 'style3'
                break;
            case 'style4':
                style = 'style4'
                break;
            default:
                style = 'style1'
                break;
        }


        // var all_path = '/pages/index/index/article'
        var common_view = <View className='article-lists'>
                            {article_data.map((item, index) => {
                                return (
                                    <View taroKey={index} className='article-lists-item' onClick={this.goToPage.bind(this, item.path)}>
                                        <View className='article-lists-item-topimg'>
                                            <Image src={item.img}></Image>
                                        </View>
                                        <View className='article-lists-item-txt'>
                                            <Text className='article-lists-item-txt-title'>{item.title}</Text>
                                            <Text className='article-lists-item-txt-desc'>{item.desc}</Text>
                                            <Text className='article-lists-item-txt-time'>{item.c_time}</Text>
                                        </View>
                                        <View className='article-lists-item-img'>
                                            <Image src={item.img}></Image>
                                        </View>
                                        <View className='article-lists-item-imgs'>
                                            <Image src={item.imgs[0]}></Image>
                                            <Image src={item.imgs[2]}></Image>
                                            <Image src={item.imgs[2]}></Image>
                                        </View>

                                    </View>
                                )
                            })}
                        </View>

        var article_lists_style1 = <View className='article-slide' style={style != 'style4' ? 'display:none;' : ''}>
                                        <View className='article-slide-list'>
                                            {common_view}
                                        </View>
                                    </View>
        var article_lists_style2 = <View style={style == 'style4' ? 'display:none;' : ''}>{common_view}</View>

        var article_title = <View className='article-title' onClick={this.goToPage.bind(this, title['path'])} style={hid_title ? 'display:none;' : ''}>
                                <Text className='goods-title-desc'>{title['desc']}</Text>
                                <Text className='article-title-all'>查看全部</Text>
                            </View>        
        var article = <View className='article'>
                        {article_title}
                        {article_lists_style1}
                        {article_lists_style2}
                    </View>
        // var menu_list = ['全部', '行业资讯', '楼市动态', '新闻动态']
        return (
            <View className={style}>   
                {show_tabnav && <TabNav menu_list={menus} sel_tab={this.state.sel_tab} changeTab={(index) => { this.changeTab(index) }}></TabNav>}                
                {article}
                {SHOW_MORE && <AtLoadMore style="height:10px;" status={this.state.load_status} />}
                
            </View>

        )
    }
}

