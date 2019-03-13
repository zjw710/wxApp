import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './GoodsList.scss'

import { AtIcon } from 'taro-ui'

export default class GoodsList extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        const goods_lists = [
            { title: '刚需优选小户型', desc: '4口之家小户型，优惠新房任你选', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price:'200元',sale:'29',remain:'86'},
            { title: '长租-告别宿舍生活从此更舒适', desc: '度假式居住环境帮你减压', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', price: '100元', sale: '20', remain: '86' },
            { title: '刚需优选小户型', desc: '4口之家小户型，优惠新房任你选1', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '100元', sale: '20', remain: '86' },]
        return (
            <View className='goods'>
                <View className='goods-title'>
                    <Text className='goods-title-desc'>热门预约</Text>
                    <View>
                        <Text className='goods-title-all'>查看全部</Text>
                        <View className='goods-title-tag'>1</View>
                    </View>
                    
                </View>
                <View className='goods-lists'>
                    {goods_lists.map((item) => {
                        return (
                            <View className='goods-lists-item'>
                                <Image src={item.img}></Image>
                                <View className='goods-lists-item-desc'>
                                    <Text>{item.title}</Text>
                                    <Text className='goods-lists-item-desc-desc'>{item.desc}</Text>
                                    <View className='goods-lists-item-desc-txt'>
                                        <Text>价格:￥{item.price}</Text>
                                        <Text>已预约:{item.sale}</Text>
                                        <Text>剩:{item.remain}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </View>
            
        )
    }
}

