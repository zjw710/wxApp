import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image, View, Text } from '@tarojs/components'
import './ImageList.scss'


export default class ImageList extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var style = 'style1'

        const img_lists = [
            { title:'小户型二居室',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg' },
            { title: '温馨三居室',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' },
            { title: '短租旅居没问题',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg' },
            { title: '新房优惠任你选',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' }]



        return (
            <View className='img'>
                <View className= 'img-title'>
                    <Text>-二手精选-</Text>
                </View>
                <View className='img-lists'>
                    {img_lists.map((item) => {
                        return (
                            <View className='img-lists-item'>
                                <Image src={item.src}></Image>
                                <Text>{item.title}</Text>
                            </View>

                        )
                    })}
                </View>
            </View>
            

        )
    }
}

