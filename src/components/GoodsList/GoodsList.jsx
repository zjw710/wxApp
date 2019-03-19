import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView } from '@tarojs/components'
import './GoodsList.scss'

export default class GoodsList extends Component {
    constructor(props) {
        super(props)
        this.goToPage = this.goToPage.bind(this)
    }

    componentWillMount() { 

    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() {         
    }

    componentDidHide() { }
    goToPage(path) {
        Taro.navigateTo({
            url: path
        })
    } 
    render() {
        var style = this.props.show_style
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
        var goods_arr = [{ title: '', desc: '', img: '', price: '', sale: '', remain: '',path:'' }]
        if (this.props.goods_arr) {
            goods_arr = this.props.goods_arr
        }
        
            // [
            // { title: '刚需优选小户型,长租-告别宿舍生活从此更舒适', desc: '4口之家小户型，优惠新房任你选,4口之家小户型，优惠新房任你选', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '200万元', sale: '29套', remain:'86套'},
            // { title: '长租-告别宿舍生活从此更舒适', desc: '度假式居住环境帮你减压', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', price: '100万', sale: '2000套', remain: '86套' },
            // { title: '刚需优选小户型', desc: '4口之家小户型，优惠新房任你选1', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '100万', sale: '20套', remain: '86套' },]

        var common_view = <View className='goods-lists'>
                            {goods_arr.map((item,index) => {
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
        var goods_title = <View className='goods-title' style={this.props.hid_title ? 'display:none;' : ''}>
                                <Text className='goods-title-desc'>热门预约</Text>
                                <Text className='goods-title-all'>查看全部</Text>
                            </View>                  
        const goods = <View className='goods'>
                        {goods_title}
                        {g_list_style1} 
                        {g_list_style2} 
                    </View>  
        return (
            <View className={style}>                
                    {goods}                
            </View>                        
        )
    }
}