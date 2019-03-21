import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView } from '@tarojs/components'
import './GoodsList.scss'
import { AtLoadMore } from 'taro-ui'
import { TabNav } from "../TabNav/TabNav";
import { Api } from "../../utils/services";

var C_PAGE = 1//当前页数
var PAGE_SIZE = 10//一页多少条数据
var HAS_MORE = true//是否还有更多数据
var SHOW_MORE = false//是否隐藏加载更多
var CAT = 0//分类,默认为全部
var IS_INIT = 0

export default class GoodsList extends Component {
    constructor(props) {
        // console.log('constructor')
        super(props)
        this.goToPage = this.goToPage.bind(this)
        this.changeTab = this.changeTab.bind(this)
        // var goods_arr = null
        var sel_tab = 0
        this.setState({
            sel_tab: sel_tab,
            // goods_arr: goods_arr,
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
        // console.log('componentWillUnmount')
        IS_INIT = 0
    }

    componentDidShow() {         
    }

    componentDidHide() { 
        // console.log('componentDidHide')
        IS_INIT = 0
    }
    
    /**
     * 上拉到底部触发事件
     */
    onReachBottom() {
        // console.log("onReachBottom")

    }
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
        return Api.get_goods(C_PAGE, CAT)
            .then(res => {
                if (!res) {
                    return
                }
                // console.log()
                var goods_data_new = res['goods_arr']['data']
                if (goods_data_new) {
                    var goods_arr = this.state.goods_arr ? this.state.goods_arr : []
                    //如果是第一页，直接覆盖数据
                    if (C_PAGE == 1) {
                        goods_arr = res['goods_arr']
                    } else {
                        var goods_data = goods_arr['data']
                        goods_data.push.apply(goods_data, goods_data_new)
                        goods_arr['data'] = goods_data
                    }

                    this.setState({
                        goods_arr: goods_arr
                    })

                    if (goods_data_new.length < PAGE_SIZE) {
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
        // console.log('this.state.goods_arr:')
        // console.log(this.state.goods_arr)
        //如果需要请求网络进行初始化，但未初始化，则初始化一次
        if (this.props.show_more && !IS_INIT) {
            this.initLoadSta()
            this.loadMore()
        }
        //初始化参数
        let init_goods_arr = { style: 'style1', title: { desc: '', path: '' }, menus: [],data: [{ title: '', desc: '', img: '', price: '', sale: '', remain: '', path: '' }]}
        let goods_data = init_goods_arr['data']
        
        let title = init_goods_arr['title']
        let style = init_goods_arr['style']
        let menus = init_goods_arr['menus']

        let hid_title = true
        let show_tabnav = false  //是否隐藏分类菜单

        //获取传入参数
        if (this.props.goods_arr) {
            let goods_arr = this.props.goods_arr
            goods_data = goods_arr['data']
            style = goods_arr['style']
            title = goods_arr['title']
            menus = goods_arr['menus']
        } else if (this.state.goods_arr) {
            let goods_arr = this.state.goods_arr
            goods_data = goods_arr['data']
            style = goods_arr['style']
            title = goods_arr['title']
            menus = goods_arr['menus']
        }   
        // console.log("goods_data:")
        // console.log(goods_data)
        if (title && title['desc']) {
            hid_title = false
        }
        if (menus && menus.length > 0) {
            show_tabnav = true
        }

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
            // [
            // { title: '刚需优选小户型,长租-告别宿舍生活从此更舒适', desc: '4口之家小户型，优惠新房任你选,4口之家小户型，优惠新房任你选', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '200万元', sale: '29套', remain:'86套'},
            // { title: '长租-告别宿舍生活从此更舒适', desc: '度假式居住环境帮你减压', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', price: '100万', sale: '2000套', remain: '86套' },
            // { title: '刚需优选小户型', desc: '4口之家小户型，优惠新房任你选1', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '100万', sale: '20套', remain: '86套' },]

        var common_view = <View className='goods-lists'>
                            {goods_data.map((item,index) => {
                                return (
                                    <View taroKey={index} className='goods-lists-item' onClick={this.goToPage.bind(this, item.path)}>
                                        <Image src={item.img}></Image>
                                        <View className='goods-lists-item-desc'>
                                            <Text className='goods-lists-item-desc-title'>{item.title}</Text>
                                            <Text className='goods-lists-item-desc-desc'>{item.desc}</Text>
                                            <Text className='goods-lists-item-desc-price'>价格:￥{item.price}</Text>
                                            <View className='goods-lists-item-desc-txt'>
                                                <Text>已预约:{item.sale}</Text>
                                                <Text>剩:{item.remain}</Text>
                                                <Button>立即预约</Button>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </View> 
        //滑块样式                        
        var g_list_style1 = <View className='goods-slide' style={style != 'style3' ? 'display:none;' : ''}>
                                    <View className="goods-slide-list">
                                        {common_view}
                                    </View>
                                </View> 

        var g_list_style2 = <View style={style == 'style3' ? 'display:none;' : ''}>{common_view}</View>             
        var goods_title = <View className='goods-title' onClick={this.goToPage.bind(this, title['path'])}  style={hid_title ? 'display:none;' : ''}>
                                <Text className='goods-title-desc'>{title['desc']}</Text>
                                <Text className='goods-title-all'>查看全部</Text>
                            </View>                  
        const goods = <View className='goods'>
                        {goods_title}
                        {g_list_style1} 
                        {g_list_style2} 
                    </View>  
        return (
            <View className={style}>      
                {show_tabnav && <TabNav menu_list={menus} sel_tab={this.state.sel_tab} changeTab={(index) => { this.changeTab(index) }}></TabNav>}                          
                {goods}                
                {SHOW_MORE && <AtLoadMore style="height:10px;" status={this.state.load_status} />}
            </View>                        
        )
    }
}