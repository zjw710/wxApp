import Taro, { Component } from '@tarojs/taro'
import { View,Input, Button } from '@tarojs/components'
import './GoodsDetail.scss'
import { ImageList } from "../ImageList/ImageList";
import { AtIcon } from 'taro-ui'

export default class GoodsDetail extends Component {
    static defaultProps = {
        goods_detail: {
            foot_fix:1,style: 'style1', order: 1, data: {
                title: '', desc:'', detail: '', img: '', imgs: { style: '', title: '', data: [] }, price: '', sale: '', remain: ''
            }
        }//data:[{title:'',src:'',path:''}]
    }
    constructor(props) {
        
        super(props)
        this.phoneCall = this.phoneCall.bind(this)

    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    phoneCall(){
        Taro.makePhoneCall({
            phoneNumber:'13800138006'
        })
    }
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
        let is_fix = goods_detail.foot_fix

        return (
            <View className='detail'>
                {detail_goods}
                <ImageList show_style={style != 'style4' ? style:'style1'} hid_title={true} style={style == 'style4' ? 'display:none;' : ''} img_arr={img_arr}></ImageList>
                <View className='detail-desc'>
                    <Text className='detail-desc-title'>服务详情</Text>
                    <RichText className='detail-desc-txt'>{goods_data.detail}</RichText>                    
                </View>
                <View className={is_fix ? 'detail-footer detail-footer-fix' :'detail-footer'}>
                    <View className='detail-footer-phone' onClick={this.phoneCall.bind(this)}>
                        <AtIcon value='phone' size='25' color=''></AtIcon>
                        <Text>电话</Text>
                    </View>
                    <View className='detail-footer-like'>
                        <AtIcon value='star' style='display:none;' size='30' color=''></AtIcon>
                        <AtIcon value='star-2' size='25' color=''></AtIcon>
                        <Text>收藏</Text>
                    </View>
                    <Button className='detail-footer-kefu' openType='contact'>
                        <AtIcon value='message' size='25' color=''></AtIcon>
                        <Text>客服</Text>
                    </Button>
                    <View className='detail-footer-buy'>
                        <Button>购买</Button>
                    </View>
                    
                </View>
            </View>
            
        )
    }
}

