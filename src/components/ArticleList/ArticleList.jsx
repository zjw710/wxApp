import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text, Image } from '@tarojs/components'
// import './ArticleList.scss'

export default class ArticleList extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var style = "style4"
        const article_arr = [
            { title: '楼市“降温” ?', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-03', img:'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg',
                imgs: ['http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg']
            },
            { title: '二手房60-90㎡中小户型成交占比1/3 中介共谋发展，长租市场规模超万亿 将长期保持9%以上增速', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-02', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg'},
            { title: '长租市场规模超万亿 将长期保持9%以上增速', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-01', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg'},
            { title: '楼市“降温” 刚需户“上车”时间到了吗？', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-03', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg'},
        ]
        var common_view = <View className='article-lists'>
                            {article_arr.map((item) => {
                                return (
                                    <View className='article-lists-item'>
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
        if (style == 'style4') {
            var article_lists = <View className='article-slide'>
                                    <View className='article-slide-list'>
                                        {common_view}
                                    </View>
                                </View>
        }else{
            var article_lists = <View>{common_view}</View>
        }
        
        var article = <View className='article'>
                        <View className='article-title'>
                            <Text className='goods-title-desc'>房产知识</Text>
                            <Text className='article-title-all'>查看全部</Text>
                        </View>
                        {article_lists}
                    </View>
        return (
            <View className={style}>            
                {article}
            </View>

        )
    }
}

