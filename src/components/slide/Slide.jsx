import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem,Image, View  } from '@tarojs/components'
import './Slide.scss'
import img1 from "../../images/ad1.png";
import img2 from "../../images/ad2.png";


export default class Slide extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var style = 'style2'

        const img_lists = [
            { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg' },
            { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' },
            {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg'},
            {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg'}]
        if (style == 'style1') {
            var slide = <Swiper
                            className='slide'
                            indicatorColor='#999'
                            indicatorActiveColor='#333'
                            circular
                            indicatorDots
                            autoplay>
                            <View className='slide-imgs'>
                                {img_lists.map((item,index) => {
                                    return (
                                        <SwiperItem taroKey={index}>
                                            <Image src={item.src}></Image>
                                        </SwiperItem>

                                    )
                                })}
                            </View>
                        </Swiper>
        }else{
            var slide = <ScrollView
                            className='scrolslide'
                            scrollX
                            scrollWithAnimation>
                            <View className='scrolslide-imgs'>
                                {img_lists.map((item,index) => {
                                    return (
                                        <Image taroKey={index} src={item.src}></Image>
                                    )
                                })}
                            </View>
                        </ScrollView>
        }        
        return (
            <View>
                {slide}
            </View>            
        )        
    }
}


