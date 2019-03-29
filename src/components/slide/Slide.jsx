import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image, View, ScrollView  } from '@tarojs/components'
import './Slide.scss'


export default class Slide extends Component {
    static defaultProps = {
        slide_img_arr: { show_dot:1,style: 'style1', data: [{ img: '', path: '' }] }
    }
    constructor(props) {

        super(props)
        this.goToPage = this.goToPage.bind(this)
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { 
    }

    componentDidHide() { }

    goToPage(path){
        Taro.navigateTo({
            url: path
        })
    }

    render() {

        //获取传入参数
        let slide_img_arr = this.props.slide_img_arr
        let img_data = slide_img_arr['data']
        let style = slide_img_arr['style']
        let show_dot = slide_img_arr['show_dot']?true:false;

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

        
            // [
            // { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg',path:'/pages/index/other/other'},
            // { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' },
            // {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg'},
            // {src:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg'}]
        let slide = null
        if (style =='style1') {
            slide = <Swiper
                        className='slide'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'         
                        circular                
                        indicatorDots={show_dot}
                        autoplay
                        >
                        {img_data.map((item, index) => {
                            return (
                                <SwiperItem className='slide-item' taroKey={index} onClick={this.goToPage.bind(this, item.path)}>                                  
                                    <Image className='slide-img' src={item.img}></Image>                                        
                                </SwiperItem>

                            )
                        })}
                    </Swiper>
        } else if (style == 'style2') {
            slide = <ScrollView
                    className='scrolslide'
                    scrollX
                    scrollWithAnimation>
                    <View className='scrolslide-imgs'>
                        {img_data.map((item, index) => {
                            return (
                                <Image className='scrolslide-imgs-img' taroKey={index} src={item.img} onClick={this.goToPage.bind(this, item.path)}></Image>
                            )
                        })}
                    </View>
                </ScrollView>
        }
        

        
    
        return (

            <View>                
                {slide}
                {/* <View style={style!='style1'?'display:none;':''}>
                    {slide1}
                </View>
                <View style={style != 'style2' ? 'display:none;' : ''}>
                    {slide2}
                </View> */}
                
            </View>            
        )        
    }
}


