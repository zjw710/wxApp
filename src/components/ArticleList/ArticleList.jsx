import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Image } from '@tarojs/components'
// import './ArticleList.scss'

export default class ArticleList extends Component {
    constructor(props){
        super(props)
        this.goToPage = this.goToPage.bind(this)
        var hid_title = this.props.hid_title ? this.props.hid_title : false    

        var style = 'style1'
        switch (this.props.show_style) {
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
        this.setState({
            style: style,
            hid_title: hid_title
        })
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

        //此处如果不这样写，渲染style4会有问题，不要问我，我也不知道为什么
        if (this.state.style != 'style4') {
            var style1 = this.state.style
        } else {
            var style1 = "style4"
        }
        //如果不先传给style1，再传给style,则渲染的元素会缺少goods-slide
        var style = style1     

        const article_arr = [
            { title: '楼市“降温” ?', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-03', img:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg',
                imgs: ['http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg']
            },
            { title: '二手房60-90㎡中小户型成交占比1/3 中介共谋发展，长租市场规模超万亿 将长期保持9%以上增速', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-02', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg'},
            { title: '长租市场规模超万亿 将长期保持9%以上增速', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-01', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg'},
            { title: '楼市“降温” 刚需户“上车”时间到了吗？', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-03', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg'},
        ]
        var all_path = '/pages/index/index/article'
        var common_view = <View className='article-lists'>
                            {article_arr.map((item, index) => {
                                return (
                                    <View taroKey={index} className='article-lists-item'>
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

        var article_title = <View className='article-title' onClick={this.goToPage.bind(this, all_path)} style={this.state.hid_title ? 'display:none;' : ''}>
                                <Text className='goods-title-desc'>房产知识</Text>
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

