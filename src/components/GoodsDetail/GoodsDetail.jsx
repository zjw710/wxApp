import Taro, { Component } from '@tarojs/taro'
import { View,Input } from '@tarojs/components'
import './GoodsDetail.scss'
import { ImageList } from "../ImageList/ImageList";

export default class GoodsDetail extends Component {
    constructor(props) {
        
        super(props)

    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var goods_info = { title: '刚需优选小户型,长租-告别宿舍生活从此更舒适', desc: '4口之家小户型，优惠新房任你选,4口之家小户型，优惠新房任你选', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '200万元', sale: '29套', remain:'86套'}
        var img_arr = [
            { title: '小户型二居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDgsOjgBSjUzamGBjDuBTi0BEBl.jpg', path: '/pages/index/other/other' },
            { title: '温馨三居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
            { title: '温馨四居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
            { title: '短租旅居没问题', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDzsOjgBSjUmOSHBDDuBTi0BEBl.jpg' },
            { title: '新房优惠任你选', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDLsOjgBSjByYC7BDDuBTi0BEBl.jpg' }
        ]  
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

        var detail_goods = <View className='detail-goods' style={style != 'style4' ? 'display:none;' : ''}>
                                <View className='detail-goods-img'>
                                    <Image src={goods_info.img}></Image>
                                </View>

                                <View className='detail-goods-desc'>
                                    <Text className='detail-goods-desc-title'>{goods_info.title}</Text>
                                    <Text className='detail-goods-desc-desc'>{goods_info.desc}</Text>

                                    <View className='detail-goods-desc-txt'>
                                        <Text className='detail-goods-desc-txt-price'>价格:￥{goods_info.price}</Text>
                                        <Text>已预约:{goods_info.sale}</Text>
                                        <Text>剩:{goods_info.remain}</Text>
                                    </View>
                                </View>
                            </View>

        return (
            <View className='detail'>
                {detail_goods}
                <ImageList show_style={style != 'style4' ? style:'style1'} hid_title={true} style={style == 'style4' ? 'display:none;' : ''} img_arr={img_arr}></ImageList>
                <View className='detail-desc'>
                    <Text className='detail-desc-title'>服务详情</Text>
                    <RichText className='detail-desc-txt'>4口之家小户型，优惠新房任你选</RichText>                    
                </View>
            </View>
            
        )
    }
}

