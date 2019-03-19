import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image, View, Text } from '@tarojs/components'
import './ImageList.scss'


export default class ImageList extends Component {

    constructor(props) {

        super(props)
        this.setState({
            img_index:0,
        })
        this.selectImg = this.selectImg.bind(this)
        this.goToPage = this.goToPage.bind(this)
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    goToPage(path) {
        Taro.navigateTo({
            url: path
        })
    }    
    //选中主图
    selectImg(index){
        this.setState({
            img_index: index
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
            case 'style3':
                style = 'style3'
                break;
            default:
                style = 'style1'
                break;
        }

        var img_arr = [{ title: '', src: '', path: '' }]
        var img_title = ''
        if (this.props.img_arr) {
            img_arr = this.props.img_arr
        }
        if (this.props.img_title) {
            img_title = this.props.img_title
        }
        
            // [
            // { title:'小户型二居室',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDgsOjgBSjUzamGBjDuBTi0BEBl.jpg' },
            // { title: '温馨三居室',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
            // { title: '温馨四居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
            // { title: '短租旅居没问题',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDzsOjgBSjUmOSHBDDuBTi0BEBl.jpg' },
            // { title: '新房优惠任你选',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDLsOjgBSjByYC7BDDuBTi0BEBl.jpg' }]


        return (
            <View className={style}>
                <View className='img'>
                    <View className='img-title' style={this.props.hid_title ? 'display:none;' : ''}>
                        <Text>{img_title}</Text>
                    </View>
                    {/* 主图 */}
                    <View className='img-main' onClick={this.goToPage.bind(this, img_arr[this.state.img_index].path)}>
                        <Image src={img_arr[this.state.img_index].src}></Image>
                        <View>
                            <Text>{img_arr[this.state.img_index].title}</Text>
                        </View>
                    </View>
                    {/* 图片列表 */}
                    <View className='img-lists'>
                        {img_arr.map((item, index) => {
                            return (
                                <View taroKey={index} className={index == this.state.img_index ? "img-lists-item selected" :"img-lists-item"} onClick={this.selectImg.bind(this,index)}>
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

