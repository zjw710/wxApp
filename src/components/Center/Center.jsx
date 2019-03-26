import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './Center.scss'
import header from '../../images/header.png'

export default class Center extends Component {
    static defaultProps = {
        center_arr: { order_sta:{path:'',status: [{ desc: '', src: '', path: '' }]}, titles: [{ desc: '', src: '', path: '' }] }//data: [{ txt: '', type: '' }]
    }
    constructor(props) {
        super(props)
        this.goToPage = this.goToPage.bind(this)

    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    goToPage(path){
        Taro.navigateTo({
            url: path
        })
    }

    render() {
        var user_info = { src: header,name:'Tigo007'}

        let center_arr = this.props.center_arr
        let order_sta_arr = center_arr.order_sta.status      
        let center_title_arr = center_arr.titles
        let all_path = center_arr.order_sta.path
        
        // [{ desc: '未支付', src: icon_01, path: '/pages/index/user/order?type=1' }, { desc: '已支付', src: icon_02, path: '/pages/index/user/order?type=2' }, { desc: '已完成', src: icon_03, path: '/pages/index/user/order?type=3' }, { desc: '已取消', src: icon_04, path: '/pages/index/user/order?type=4'}]
        // var other_list = [{ desc: '我的订单', src: icon_01, path: '/pages/index/user/order' }, { desc: '我的购物车', src: icon_02, path: '/pages/index/user/order' }, { desc: '我的资料', src: icon_03, path: '/pages/index/user/order' }, { desc: '关于我们', src: icon_04, path: '/pages/index/user/order' }]   
        return (
            <View className='center'>
                <View className='center-header'>   
                    <View className='center-header-img'>
                        <Image className='center-header-img-img' src={user_info.src}></Image>
                    </View>                                     
                    <Text className='center-header-txt'>{user_info.name}</Text>
                </View>
                <View className='center-order'>
                    <View className='center-order-title' onClick={this.goToPage.bind(this,all_path)}>
                        <Text>所有订单</Text>
                        <View className='allow-span'></View>
                    </View>
                    <View className='center-order-items'>
                        {order_sta_arr.map((item, index) => {
                            return (
                                <View taroKey={index} className='center-order-items-icon' onClick={this.goToPage.bind(this, item.path)}>
                                    <Image className='center-order-items-icon-img' src={item.src}></Image>
                                    <Text>{item.desc}</Text>
                                </View>
                            )
                        })}
                    </View>                    
                </View>
                <View className='center-other'>
                    {center_title_arr.map((item, index)=>{
                        return(
                            <View taroKey={index} className='center-other-item' onClick={this.goToPage.bind(this, item.path)}>
                                <View className='center-other-item-desc'>
                                    <Image className='center-other-item-desc-img' src={item.src}></Image>
                                    <Text>{item.desc}</Text>
                                </View>
                                <View className='allow-span'></View>
                            </View>
                        )
                    })}
                </View>
                <View style="height:50px;"></View>   
            </View>

        )
    }
}

