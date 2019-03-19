import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.scss'
import { GoodsDetail } from "../../../components/GoodsDetail/GoodsDetail";
import { ArticleList } from "../../../components/ArticleList/ArticleList";
import { TabNav } from "../../../components/TabNav/TabNav";

export default class Other extends Component {

    constructor(props) {

        super(props)
        this.changeTab = this.changeTab.bind(this)

        var sel_tab = 0
        if (this.props.sel_tab) {
            sel_tab = this.props.sel_tab
        }
        this.setState({
            sel_tab: sel_tab
        })

    }
    config: Config = {
        navigationBarTitleText: '文章列表'

    }


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    // 重新选择菜单
    changeTab(index) {
        this.setState({
            sel_tab: index
        })
    }
    render() {
        var menu_list = ['全部', '行业资讯', '楼市动态', '新闻动态']

        var show_article_list = false
        var show_goods_detail = true
        var article_arr = [
            {
                title: '楼市“降温” ?', path: '/pages/index/other/other', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-03', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg',
                imgs: ['http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg']
            },
            { title: '二手房60-90㎡中小户型成交占比1/3 中介共谋发展，长租市场规模超万亿 将长期保持9%以上增速', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-02', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg' },
            { title: '长租市场规模超万亿 将长期保持9%以上增速', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-01', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg' },
            { title: '楼市“降温” 刚需户“上车”时间到了吗？', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-03', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg' },
        ]

        return (
            <View className='index'>
                <View style={show_article_list ? '' : "display:none;"}>
                    <TabNav menu_list={menu_list} sel_tab={this.state.sel_tab} changeTab={(index) => { this.changeTab(index) }}></TabNav>
                    <ArticleList hid_title={true} show_style={'style1'} article_arr={article_arr}></ArticleList>
                </View>
                <View style={show_goods_detail ? '' : "display:none;"}>
                    <GoodsDetail show_style='style4'></GoodsDetail>
                </View>
            </View>
            
        )
    }
}

