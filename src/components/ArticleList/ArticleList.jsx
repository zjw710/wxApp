import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Image } from '@tarojs/components'
import './ArticleList.scss'

export default class ArticleList extends Component {
    constructor(props){
        super(props)
        this.goToPage = this.goToPage.bind(this)
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { 

    }

    componentDidHide() { }

    goToPage(path) {
        Taro.navigateTo({
            url: path
        })
    }
    render() {
        //初始化参数
        var style = 'style1'
        var article_data = [{ title: '', desc: '', c_time: '', img: '', imgs:[],path:''}]
        var title = ''
        var hid_title = true
        //获取传入参数
        if (this.props.article_arr) {
            var article_arr = this.props.article_arr    
            article_data = article_arr['data']
            style = article_arr['style']
            title = article_arr['title']
        }    

        if (title) {
            hid_title = false
        }
        //对样式进行判断
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
            case 'style4':
                style = 'style4'
                break;
            default:
                style = 'style1'
                break;
        }


        var all_path = '/pages/index/index/article'
        var common_view = <View className='article-lists'>
                            {article_data.map((item, index) => {
                                return (
                                    <View taroKey={index} className='article-lists-item' onClick={this.goToPage.bind(this, item.path)}>
                                        <View className='article-lists-item-topimg'>
                                            <Image src={item.img}></Image>
                                        </View>
                                        <View className='article-lists-item-txt'>
                                            <Text className='article-lists-item-txt-title'>{item.title}</Text>
                                            <Text className='article-lists-item-txt-desc'>{item.desc}</Text>
                                            <Text className='article-lists-item-txt-time'>{item.c_time}</Text>
                                        </View>
                                        <View className='article-lists-item-img'>
                                            <Image src={item.img}></Image>
                                        </View>
                                        <View className='article-lists-item-imgs'>
                                            <Image src={item.imgs[0]}></Image>
                                            <Image src={item.imgs[2]}></Image>
                                            <Image src={item.imgs[2]}></Image>
                                        </View>

                                    </View>
                                )
                            })}
                        </View>

        var article_lists_style1 = <View className='article-slide' style={style != 'style4' ? 'display:none;' : ''}>
                                        <View className='article-slide-list'>
                                            {common_view}
                                        </View>
                                    </View>
        var article_lists_style2 = <View style={style == 'style4' ? 'display:none;' : ''}>{common_view}</View>

        var article_title = <View className='article-title' onClick={this.goToPage.bind(this, all_path)} style={hid_title ? 'display:none;' : ''}>
                                <Text className='goods-title-desc'>{title}</Text>
                                <Text className='article-title-all'>查看全部</Text>
                            </View>        
        var article = <View className='article'>
                        {article_title}
                        {article_lists_style1}
                        {article_lists_style2}
                    </View>
        return (
            <View className={style}>            
                {article}
            </View>

        )
    }
}

