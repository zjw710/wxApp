import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './goods.scss'
import GoodsList from "../../components/GoodsList/GoodsList";

export default class goods extends Component {

    constructor(props) {

        super(props)
        this.child = null

    }
    config: Config = {
        navigationBarTitleText: '商品列表'

    }
    componentWillMount() {

    }
    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    //用于获取子组件的对象
    getChild(ref) {
        this.child = ref
    }
    onReachBottom() {
        if (this.child) {
            this.child.loadMore()//调用子组件的加载更多
        }
    }

    render() {
        let goods_arr = { show_more:1}        
        return (
            <View className='index'>
                <GoodsList goods_arr={goods_arr} getChild={(ref) => { this.getChild(ref) }}></GoodsList>
            </View>
        )
    }
}

