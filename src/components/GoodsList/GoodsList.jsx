import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, ScrollView } from '@tarojs/components'
import './GoodsList.scss'

import { AtIcon } from 'taro-ui'

export default class GoodsList extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var style = 'style4'
        const goods_lists = [
            { title: '刚需优选小户型,长租-告别宿舍生活从此更舒适', desc: '4口之家小户型，优惠新房任你选,4口之家小户型，优惠新房任你选', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '200万元', sale: '29套', remain:'86套'},
            { title: '长租-告别宿舍生活从此更舒适', desc: '度假式居住环境帮你减压', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', price: '100万', sale: '2000套', remain: '86套' },
            { title: '刚需优选小户型', desc: '4口之家小户型，优惠新房任你选1', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '100万', sale: '20套', remain: '86套' },]

        var common_view = <View className='goods-lists'>
                            {goods_lists.map((item) => {
                                return (
                                    <View className='goods-lists-item'>
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
        if (style == 'style3') {
            var goods_list = <View className='goods-slide'>
                                <View className="goods-slide-list">
                                    {common_view}
                                </View>
                            </View> 
        }else{
            var goods_list = <View>{common_view}</View>
            
        }                   
        const goods = <View className='goods'>
                        <View className='goods-title'>
                            <Text className='goods-title-desc'>热门预约</Text>
                            <Text className='goods-title-all'>查看全部</Text>
                        </View>
                        {goods_list} 
                    </View>  
        return (
            <View className={style}>                
                    {goods}                
            </View>
            
            
        )
    }
}