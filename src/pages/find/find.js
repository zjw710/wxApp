import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './find.scss'
import TabBar from "../../components/TabBar/TabBar";
import BaseComponent from "../../components/BaseComponent/BaseComponent";
import { Api } from "../../utils/services";


export default class Find extends Component {

    config: Config = {
        navigationBarTitleText: '发现'

    }
    constructor(props) {
        super(props)
    }  

    componentWillMount() { }

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
        var current_tab = 1        
        return (
            <View className='index'>                         
                <BaseComponent loadFun={() => Api.get_find()}></BaseComponent>
                <TabBar current_tab={current_tab}></TabBar>                
            </View>
        )
    }
}
