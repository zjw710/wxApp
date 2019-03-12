import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem,Image  } from '@tarojs/components'
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
        return (
            <Swiper className='slide'
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
                <SwiperItem>                    
                    <Image src={img1}></Image>
                </SwiperItem>
                <SwiperItem>
                    <Image src={img2}></Image>
                </SwiperItem>
                <SwiperItem>
                    <Image src={img1}></Image>
                </SwiperItem>
            </Swiper>
        )        
    }
}

