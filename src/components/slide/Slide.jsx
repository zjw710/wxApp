import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem,Image, View  } from '@tarojs/components'
import './Slide.scss'


export default class Slide extends Component {
    static defaultProps = {
        slide_img_arr: { show_dot:1,style: 'style1', data: [{ src: '', path: '' }] }
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
        var slide = null

        var slide2 = <Swiper 
                        className='slide'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots={show_dot}
                        autoplay>
                        <View className='slide-imgs'>
                        {img_data.map((item,index) => {
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
                        {img_data.map((item,index) => {
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


