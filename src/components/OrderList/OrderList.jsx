import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import './OrderList.scss'
import { TabNav } from "../TabNav/TabNav";

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
        this.goToPage = this.goToPage.bind(this)

    }
    // 重新选择菜单
    changeTab(index) {        
        this.setState({
            sel_tab: index
        })
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    goToPage(path) {
        Taro.navigateTo({
            url: path
        })
    }

    render() {
        // var menu_list = ['全部', '待支付', '已支付', '已完成', '已取消']
        var order_list = {order:1,menu:['全部', '待支付', '已支付', '已完成', '已取消'],style:'style1',data:[
            {
                order_no:'201903151025',sta:2,sta_desc:'已支付',goods_list:[
                    { src: 'https://img10.360buyimg.com/n7/jfs/t1/24714/24/8640/124174/5c77ab53E9e515e2e/8b1aa5d1fc7a5e23.jpg', g_name: '小米手机', g_desc:'小米8屏幕指纹版 6GB+128GB 黑色 全网通4G 双卡双待 全面屏拍照游戏智能',o_price:10.00,price:8.00},                
                ], path: '/pages/index/other/other'
            },
            {
                order_no: '201903151025', sta: 1, sta_desc: '未支付', goods_list: [
                    { src: 'https://img10.360buyimg.com/n7/jfs/t1/8112/20/10485/366920/5c2336deEab272fe3/12b58de5020ca1a1.jpg', g_name: '苹果手机', g_desc: '【春季福利重磅来袭！】iPhone7128GB低至3499元！iPhone7Plus128GB内存4399元抢！经典7系列全面开抢！', o_price: 10.00, price: 8.00 },
                    { src: 'https://img14.360buyimg.com/n7/jfs/t1/6425/40/3887/217009/5bd716e9E4886d5d8/b3da975f4047ded3.jpg', g_name: '华为手机', g_desc: '【直降100元，领券立减100，送耳机】屏幕指纹解锁手机，前置拍照美颜！评价晒单有机会得2000京豆，推荐购买送豪礼！查看更多优惠', o_price: 10.00, price: 8.00 }
                ]
            },
            {
                order_no: '201903151025', sta: 3, sta_desc: '已完成', goods_list: [
                    { src: 'https://img13.360buyimg.com/n7/jfs/t27112/273/1423275096/265013/d92b3181/5be3cb5bN334c8048.jpg', g_name: '一加6T全速旗舰手机', g_desc: '购机立享白条3期免息！一加6T全速旗舰，轻快流畅，光感屏幕指纹，手持城市夜景！一加品牌更多精彩猛戳查看！', o_price: 10.00, price: 8.00 }
                ]
            },
            {
                order_no: '201903151025', sta: 4, sta_desc: '已取消', goods_list: [
                    { src: 'https://img14.360buyimg.com/n7/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg', g_name: '小米8', g_desc: '小米8屏幕指纹版 6GB+128GB 黑色 全网通4G 双卡双待 全面屏拍照游戏智能', o_price: 10.00, price: 8.00 }
                ]
            }
        ]}
        let order_data = order_list.data
        let menu_list = order_list.menu

        return (
            <View className='order'>
                <View>
                    <TabNav menu_list={menu_list} sel_tab={this.state.sel_tab} changeTab={(index) => { this.changeTab(index) }}></TabNav>                     
                </View>
                <View className='order-list'>
                    {order_data.map((item,index)=>{
                        return(
                            <View taroKey={index} className='order-list-item' onClick={this.goToPage.bind(this, item.path)}>
                                <View className='order-list-item-title'>
                                    <Text>订单号:{item.order_no}</Text>
                                    <Text className='order-list-item-title-sta'>{item.sta_desc}</Text>
                                </View>
                                <View className='order-list-item-goods'>
                                    {item.goods_list.map((g_item,g_index)=>{
                                        return(
                                            <View taroKey={g_index} className='order-list-item-goods-item'>
                                                <View className='order-list-item-goods-item-img'>
                                                    <Image src={g_item.src}></Image>
                                                </View>
                                                
                                                <View className='order-list-item-goods-item-desc'>
                                                    <Text className='order-list-item-goods-item-desc-name'>{g_item.g_name}</Text>
                                                    <Text className='order-list-item-goods-item-desc-desc'>{g_item.g_desc}</Text>
                                                    <View>
                                                        <Text className='order-list-item-goods-item-desc-price'>￥{g_item.o_price}</Text>
                                                        <Text>￥{g_item.price}</Text>
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
            </View>

        )
    }
}

