import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import './OrderList.scss'
import  TabNav  from "../TabNav/TabNav";
import { Api } from "../../utils/services";
import { Common } from "../../utils/common";
import LoadMore  from "../LoadMore/LoadMore";

export default class OrderList extends Component {
    static defaultProps = {
        sel_tab: 0
    }
    constructor(props) {

        super(props)
        this.changeTab = this.changeTab.bind(this)

        var sel_tab = this.props.sel_tab
        this.setState({
            sel_tab: sel_tab
        })
        this.C_PAGE = 1//当前页数
        this.PAGE_SIZE = 10//一页多少条数据
        this.HAS_MORE = true//是否还有更多数据
        this.SHOW_MORE = false//是否隐藏加载更多
        this.CAT = sel_tab//分类,默认为全部
        this.IS_INIT = 0   
        this.goToPage = this.goToPage.bind(this)

    }
    // 重新选择菜单
    changeTab(index) {        
        this.initLoadSta()
        this.setState({
            sel_tab: index
        })
        this.CAT = index
        console.log("index:")
        console.log(index)
        this.loadMore()
    }
    /**
     * 初始化加载状态
     */
    initLoadSta() {
        this.C_PAGE = 1
        this.HAS_MORE = true
        this.SHOW_MORE = true
        this.setState({
            load_status: 'more'
        })
        this.IS_INIT = 1
    }
        /**
     * 加载更多数据
     */
    loadMore() {
        Common.loadMore(this, (page, cat) => Api.get_order(page, cat), 'order_arr')
    }
    componentWillMount() {
        this.initLoadSta()
        this.loadMore()  
    }

    componentDidMount() { 
        if (this.props.getChild) {
            this.props.getChild(this)//传递子组件对象给父组件
        } 
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    goToPage(path) {
        Taro.navigateTo({
            url: path
        })
    }

    render() {
        //如果需要请求网络进行初始化，但未初始化，则初始化一次
        // if (this.props.show_more && !this.IS_INIT) {
             
        // }         

        // var menu_list = ['全部', '待支付', '已支付', '已完成', '已取消']
        var order_list = {order:1,menus:[],style:'style1',data:[]}        
        let order_data = order_list.data
        let menus = order_list.menus
        let style = 'style1'

        if (this.state.data_arr) {
            let order_arr = this.state.data_arr

            console.log("order_arr:")
            console.log(order_arr)
            order_data = order_arr['data']
            style = order_arr['style']
            menus = order_arr['menus']
        } 

        return (
            <View className='order'>
                <View>
                    <TabNav menu_list={menus} sel_tab={this.state.sel_tab} changeTab={(index) => { this.changeTab(index) }}></TabNav>                     
                </View>
                <View className='order-list'>
                    {order_data.map((item,index)=>{
                        return(
                            <View taroKey={index} className='order-list-item' onClick={this.goToPage.bind(this, item.path)}>
                                <View className='order-list-item-title'>
                                    <Text className='order-list-item-title-txt'>订单号:{item.order_no}</Text>
                                    <Text className='order-list-item-title-sta'>{item.sta_desc}</Text>
                                </View>
                                <View className='order-list-item-goods'>
                                    {item.goods_list.map((g_item,g_index)=>{
                                        return(
                                            <View taroKey={g_index} className='order-list-item-goods-item'>
                                                <View className='order-list-item-goods-item-img'>
                                                    <Image className='order-list-item-goods-item-img-img' src={g_item.src}></Image>
                                                </View>
                                                
                                                <View className='order-list-item-goods-item-desc'>
                                                    <Text className='order-list-item-goods-item-desc-name'>{g_item.g_name}</Text>
                                                    <Text className='order-list-item-goods-item-desc-desc'>{g_item.g_desc}</Text>
                                                    <View className='order-list-item-goods-item-desc-view'>
                                                        <Text className='order-list-item-goods-item-desc-view-price'>￥{g_item.o_price}</Text>
                                                        <Text className='order-list-item-goods-item-desc-view-txt'>￥{g_item.price}</Text>
                                                    </View>

                                                </View>
                                            </View>
                                        )                                                                                
                                    })}
                                </View>
                            </View>
                        )
                    })}
                </View>
                {this.SHOW_MORE && <LoadMore status={this.state.load_status} />}
            </View>

        )
    }
}

