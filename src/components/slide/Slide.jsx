import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem,Image, View  } from '@tarojs/components'
import './Slide.scss'


export default class Slide extends Component {

    constructor(props) {

        super(props)
        var style = 'style1'
        //支持三种样式
        switch (this.props.show_style) {
            case 'style1':
                style = 'style1'
                break;
            case 'style2':
                style = 'style2'
                break;
            default:
                style = 'style1'
                break;
        }
        this.setState({
            style: style,//样式，支持style1，style2,style3
        })
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { 
        this.setState({
            style: this.props.show_style,//样式，支持style1，style2,style3
        })
    }

    componentDidHide() { }

    render() {
        //涉及到滑块的，动态选择style总会有问题，暂时想不到解决方案
        //var style = this.state.style  //如果这种方法传style，总是不生效    
        var style = 'style2'

        const img_lists = [
            { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg' },
            { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' },
            {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg'},
            {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg'}]
        var slide = null
        if (style == 'style2') {
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
        } else{
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


