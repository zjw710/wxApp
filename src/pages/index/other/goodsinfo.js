import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.scss'
import { GoodsDetail } from "../../../components/GoodsDetail/GoodsDetail";
import { Api } from "../../../utils/services";
export default class GoodsInfo extends Component {

    constructor(props) {

        super(props)
    }
    config: Config = {
        navigationBarTitleText: '商品详情'

    }


    componentWillMount() { 
        Api.get_goods_info()
            .then(res => {
                // console.log('get_home：') 
                // console.log(res)
                this.setState({
                    goods_info: res['goods_info']
                });
            })
    }

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
        return (
            <View className='index'>
                <GoodsDetail goods_detail={this.state.goods_info}></GoodsDetail>
            </View>
            
        )
    }
}

