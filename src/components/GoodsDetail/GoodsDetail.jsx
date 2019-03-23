import Taro, { Component } from '@tarojs/taro'
import { View,Input } from '@tarojs/components'
import './GoodsDetail.scss'
import { ImageList } from "../ImageList/ImageList";

export default class GoodsDetail extends Component {
    static defaultProps = {
        goods_detail: {
            style: 'style1', order: 1, data: {
                title: '', desc: '', img: '', imgs: { style: '', title: '', data: [] }, price: '', sale: '', remain: ''
            }
        }//data:[{title:'',src:'',path:''}]
    }
    constructor(props) {
        
        super(props)

    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        let goods_detail = this.props.goods_detail
        var goods_data = goods_detail.data
        var img_arr = goods_data.imgs

        var style = goods_detail.style
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
        // console.log(goods_data)

        var detail_goods = <View className='detail-goods' style={style != 'style4' ? 'display:none;' : ''}>
                                <View className='detail-goods-img'>
                                    <Image src={goods_data.img}></Image>
                                </View>

                                <View className='detail-goods-desc'>
                                    <Text className='detail-goods-desc-title'>{goods_data.title}</Text>
                                    <Text className='detail-goods-desc-desc'>{goods_data.desc}</Text>
                                    <View className='detail-goods-desc-txt'>
                                        <Text className='detail-goods-desc-txt-price'>价格:￥{goods_data.price}</Text>
                                        <Text>已预约:{goods_data.sale}</Text>
                                        <Text>剩:{goods_data.remain}</Text>
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
                <View>购买</View>
            </View>
            
        )
    }
}

