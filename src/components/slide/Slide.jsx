import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem,Image, View  } from '@tarojs/components'
import './Slide.scss'


export default class Slide extends Component {

    constructor(props) {

        super(props)
        this.goToPage = this.goToPage.bind(this)
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

    goToPage(path){
        Taro.navigateTo({
            url: path
        })
    }

    render() {
        var style = this.props.show_style
        switch (style) {
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

        var img_arr = [{ src: '', path: '' }]
        if (this.props.slide_img_arr) {
            img_arr = this.props.slide_img_arr
        }
        
            // [
            // { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg',path:'/pages/index/other/other'},
            // { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' },
            // {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg'},
            // {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg'}]
        var slide = null

        var slide2 = <Swiper 
                        className='slide'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        autoplay>
                        <View className='slide-imgs'>
                        {img_arr.map((item,index) => {
                                return (
                                    <SwiperItem taroKey={index} onClick={this.goToPage.bind(this,item.path)}>
                                        <Image src={item.src}></Image>
                                    </SwiperItem>

                                )
                            })}
                        </View>
                    </Swiper>

        var slide1 = <ScrollView
                        className='scrolslide'
                        scrollX
                        scrollWithAnimation>
                        <View className='scrolslide-imgs'>
                        {img_arr.map((item,index) => {
                                return (
                                    <Image taroKey={index} src={item.src}  onClick={this.goToPage.bind(this,item.path)}></Image>
                                )
                            })}
                        </View>
                    </ScrollView>
    
        return (

            <View>
                <View style={style!='style1'?'display:none;':''}>
                    {slide1}
                </View>
                <View style={style != 'style2' ? 'display:none;' : ''}>
                    {slide2}
                </View>
                
            </View>            
        )        
    }
}


