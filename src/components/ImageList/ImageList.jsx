import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image, View, Text } from '@tarojs/components'
import './ImageList.scss'


export default class ImageList extends Component {
    static defaultProps = {
        img_arr:{ data: [], style: 'style1', title: '' }
    }
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
    selectImg(index,path){
        this.setState({
            img_index: index
        })
        if (path) {
            this.goToPage(path)
        }
    }
    render() {
        //获取传入参数
        let img_arr = this.props.img_arr
        let img_data = img_arr['data']
        let style = img_arr['style']
        let title = img_arr['title']
        let hid_title = true
        if (title) {
            hid_title = false
        }

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
    
        
            // [
            // { title:'小户型二居室',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDgsOjgBSjUzamGBjDuBTi0BEBl.jpg' },
            // { title: '温馨三居室',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
            // { title: '温馨四居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
            // { title: '短租旅居没问题',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDzsOjgBSjUmOSHBDDuBTi0BEBl.jpg' },
            // { title: '新房优惠任你选',src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDLsOjgBSjByYC7BDDuBTi0BEBl.jpg' }]
        let main_img = null
        if (img_data.length>0) {
            main_img = <View className='img-main' onClick={this.goToPage.bind(this, img_data[this.state.img_index].path)}>
                            <Image className='img-main-img' src={img_data[this.state.img_index].src}></Image>
                            <View className='img-main-view'>
                                <Text className='img-main-view-txt'>{img_data[this.state.img_index].title}</Text>
                            </View>
                        </View>
        }

        return (
            <View className={style}>
                <View className='img'>
                    <View className='img-title' style={hid_title ? 'display:none;' : ''}>
                        <Text>{title}</Text>
                    </View>
                    {/* 主图 */}
                    {main_img}
                    {/* 图片列表 */}
                    <View className='img-lists'>
                        {img_data.map((item, index) => {
                            return (
                                <View taroKey={index} className={index == this.state.img_index ? "img-lists-item selected" :"img-lists-item"} onClick={this.selectImg.bind(this,index,item.path)}>
                                    <Image className='img-lists-item-img' src={item.src}></Image>
                                    <View className='img-lists-item-view'>
                                        <Text className='img-lists-item-view-txt'>{item.title}</Text>
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

