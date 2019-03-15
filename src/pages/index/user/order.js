import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Switch, Navigator } from '@tarojs/components'
// import './user.scss'
import { OrderList } from "../../../components/OrderList/OrderList";


export default class Order extends Component {

    constructor(props){
        super(props)
        var sel_tab = 0
        if (this.$router.params.type) {
            sel_tab = this.$router.params.type
        }
        this.setState({
            sel_tab: sel_tab
        })
    }
    config: Config = {
        navigationBarTitleText: '订单管理',

    }


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <OrderList sel_tab={this.state.sel_tab}></OrderList>
            </View>
        )
    }
}

