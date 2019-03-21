import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Switch, Navigator } from '@tarojs/components'
import './find.scss'

// import { TabNavList } from "../../../components/TabNavList/TabNavList";
import { TabBar } from "../../../components/TabBar/TabBar";
import { GoodsList } from "../../../components/GoodsList/GoodsList";


export default class Find extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    config: Config = {
        navigationBarTitleText: '发现'

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
        var current = 1

        return (
            <View className='index'>
                
                {/* <TabNavList goods_arr={goods_arr}></TabNavList> */}
                <GoodsList show_more={true} getChild={(ref) => { this.getChild(ref) }}></GoodsList>
                <TabBar current_tab={1}></TabBar>
            </View>
        )
    }
}
// var goods_arr = {
//     style: 'style1',
//     data: [
//         { title: '刚需优选小户型,长租-告别宿舍生活从此更舒适', desc: '4口之家小户型，优惠新房任你选,4口之家小户型，优惠新房任你选', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '200万元', sale: '29套', remain: '86套', path: '/pages/index/other/other' },
//         { title: '长租-告别宿舍生活从此更舒适', desc: '度假式居住环境帮你减压', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', price: '100万', sale: '2000套', remain: '86套' },
//         { title: '刚需优选小户型', desc: '4口之家小户型，优惠新房任你选1', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '100万', sale: '20套', remain: '86套' }
//     ]
// }

