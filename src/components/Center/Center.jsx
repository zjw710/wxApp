import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import './Center.scss'
import header from '../../images/header.png'
import icon_01 from '../../images/icon_01.png'
import icon_02 from '../../images/icon_02.png'
import icon_03 from '../../images/icon_03.png'
import icon_04 from '../../images/icon_04.png'

export default class Center extends Component {
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
            url: `/pages/index/` + path
        })
    }

    render() {
        var user_info = { src: header,name:'Tigo007'}
        var order_info = [{ desc: '未支付', src: icon_01, path: 'user/order?type=1' }, { desc: '已支付', src: icon_02, path: 'user/order?type=2' }, { desc: '已完成', src: icon_03, path: 'user/order?type=3' }, { desc: '已取消', src: icon_04, path: 'user/order?type=4'}]
        var other_list = [{ desc: '我的订单', src: icon_01, path: 'user/order' }, { desc: '我的购物车', src: icon_02, path: 'user/order' }, { desc: '我的资料', src: icon_03, path: 'user/order' }, { desc: '关于我们', src: icon_04, path: 'user/order' }]
        var all_path = 'user/order'
        return (
            <View className='center'>
                <View className='center-header'>   
                    <View className='center-header-img'>
                        <Image src={user_info.src}></Image>
                    </View>                                     
                    <Text>{user_info.name}</Text>
                </View>
                <View className='center-order'>
                    <View className='center-order-title' onClick={this.goToPage.bind(this,all_path)}>
                        <Text>所有订单</Text>
                        <View className='allow-span'></View>
                    </View>
                    <View className='center-order-items'>
                        {order_info.map((item, index) => {
                            return (
                                <View taroKey={index} className='center-order-items-icon' onClick={this.goToPage.bind(this, item.path)}>
                                    <Image src={item.src}></Image>
                                    <Text>{item.desc}</Text>
                                </View>
                            )
                        })}
                    </View>                    
                </View>
                <View className='center-other'>
                    {other_list.map((item, index)=>{
                        return(
                            <View taroKey={index} className='center-other-item' onClick={this.goToPage.bind(this, item.path)}>
                                <View className='center-other-item-desc'>
                                    <Image src={item.src}></Image>
                                    <Text>{item.desc}</Text>
                                </View>
                                <View className='allow-span'></View>
                            </View>
                        )
                    })}
                    

                </View>
            </View>

        )
    }
}

