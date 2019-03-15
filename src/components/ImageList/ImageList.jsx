import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image, View, Text } from '@tarojs/components'
import './ImageList.scss'


export default class ImageList extends Component {

    constructor(props) {

        super(props)
        var style = 'style1'
        if (this.props.show_style) {
            style = this.props.show_style
        }
        this.setState({
            style: style
        })
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var style = this.state.style

        const img_lists = [
            { title:'小户型二居室',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDgsOjgBSjUzamGBjDuBTi0BEBl.jpg' },
            { title: '温馨三居室',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
            { title: '短租旅居没问题',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDzsOjgBSjUmOSHBDDuBTi0BEBl.jpg' },
            { title: '新房优惠任你选',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDLsOjgBSjByYC7BDDuBTi0BEBl.jpg' }]


        return (
            <View className={style}>
                <View className='img'>
                    <View className= 'img-title'>
                        <Text>-二手精选-</Text>
                    </View>
                    <View className='img-lists'>
                        {img_lists.map((item, index) => {
                            return (
                                <View taroKey={index} className='img-lists-item'>
                                    <Image src={item.src}></Image>
                                    <View>
                                        <Text>{item.title}</Text>
                                    </View>
                                    
                                </View>

                            )
                        })}
                    </View>
                </View>
            </View>
            
            

        )
    }
}
