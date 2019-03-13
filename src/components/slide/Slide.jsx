import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image, View,Text  } from '@tarojs/components'
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
        var style = 'style1'

        const img_lists = [
            { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg' },
            { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' },
            {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg'},
            {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg'}]
    
        //选择不同样式  
        if (style =='style1') {
            var show_result = <ScrollView
                                className='scrolslide'
                                scrollX
                                scrollWithAnimation
                            >
                                <View className='scrolslide-imgs'>
                                    {img_lists.map((item) => {
                                        return (
                                            <Image src={item.src}></Image>
                                        )
                                    })}
                                </View>
                            </ScrollView>
        }else{
            var show_result = <Swiper className='slide'
                            indicatorColor='#999'
                            indicatorActiveColor='#333'
                            circular='false'
                            indicatorDots
                            autoplay>
                            {img_lists.map((item) => {
                                return (
                                    <SwiperItem>
                                        <Image src={item.src}></Image>
                                    </SwiperItem>
                                )
                            })}
                        </Swiper>
        }

        return (    
            <View>
                {show_result}    
            </View>    
                
        )        
    }
}

