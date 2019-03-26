import Taro, { Component } from '@tarojs/taro'
import { View, RichText, Button, Image, Text } from '@tarojs/components'
import './GoodsDetail.scss'
import ImageList from "../ImageList/ImageList";
import kefu from "../../images/kefu.png";
import like from "../../images/like.png";
import like_active from "../../images/like-active.png";
import phone from "../../images/phone.png";

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
        let detail_goods = null
        if (style == 'style4') {
            detail_goods = <View className='detail-goods'>
                                <View className='detail-goods-img'>
                                    <Image className='detail-goods-img-img' src={goods_data.img}></Image>
                                </View>
                                <View className='detail-goods-desc'>
                                    <Text className='detail-goods-desc-title'>{goods_data.title}</Text>
                                    <Text className='detail-goods-desc-desc'>{goods_data.desc}</Text>
                                    <View className='detail-goods-desc-txt'>
                                        <Text className='detail-goods-desc-txt-price'>价格:￥{goods_data.price}</Text>
                                        <Text className='detail-goods-desc-txt-sale'>已预约:{goods_data.sale}</Text>
                                        <Text className='detail-goods-desc-txt-remain'>剩:{goods_data.remain}</Text>
                                    </View>
                                </View>
                            </View>
        }

        let ImageListCom = null
        if (style!='style4') {
            ImageListCom = <ImageList show_style={style} hid_title={true} img_arr={img_arr}></ImageList>
        }
        let is_fix = goods_detail.foot_fix
        // let icon_arr = [{ title: '电话', icon: phone }, { title: '收藏', icon: like, icon_a: like_active,active:0 }, { title: '客服', icon: kefu }]

        return (
            <View className='detail'>
                {detail_goods}
                {ImageListCom}                
                <View className='detail-desc'>
                    <Text className='detail-desc-title'>服务详情</Text>
                    <RichText className='detail-desc-txt'>{goods_data.detail}</RichText>                    
                </View>
                <View className={is_fix ? 'detail-footer detail-footer-fix' :'detail-footer'}>
                    <View className='detail-footer-phone' onClick={this.phoneCall.bind(this)}>
                        <Image className='detail-footer-img' src={phone}></Image>
                        <Text>电话</Text>
                    </View>
                    <View className='detail-footer-like'>
                        <Image className='detail-footer-img' src={like}></Image>
                        <Image className='detail-footer-img' src={like_active} style={'display:none;'}></Image>
                        <Text>收藏</Text>
                    </View>
                    <Button className='detail-footer-kefu' openType='contact'>
                        <Image className='detail-footer-img' src={kefu}></Image>
                        <Text>客服</Text>
                    </Button>
                    <View className='detail-footer-buy'>
                        <Button className='detail-footer-buy-btn'>购买</Button>
                    </View>                    
                </View>
            </View>
            
        )
    }
}

