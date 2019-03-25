import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.scss'

import { Slide } from "../Slide/Slide";
import { Search } from "../Search/Search";
import { MagicSquare } from "../MagicSquare/MagicSquare";
import { GoodsList } from "../GoodsList/GoodsList";
import { ImageList } from "../ImageList/ImageList";
import { ArticleList } from "../ArticleList/ArticleList";
import { DataForm } from "../DataForm/DataForm";
import { GoodsDetail } from "../GoodsDetail/GoodsDetail";
import { ArticleDetail } from "../ArticleDetail/ArticleDetail";

import { Api } from "../../utils/services";

export default class BaseComponent extends Component {

    config: Config = {
        navigationBarTitleText: '首页',
        enablePullDownRefresh: true

    }
    static defaultProps = {
        isEnable: true,
        loadFun:null
    }
    constructor(props) {
        super(props)    
        this.IS_INIT = 0
    }
    componentWillMount() {
        this.initConfig()
        
        // console.log('componentWillMount') 
        // this.loadData()
    }

    componentDidMount() {
        // console.log('BaseComponent componentDidMount') 
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount') 
    }

    componentDidShow() {        
        // console.log('componentDidShow') 
    }

    componentDidHide() {
        // console.log('componentDidHide') 
    }
    loadData(loadFun){
        this.IS_INIT = 1
        loadFun()
            .then(res => {
                // console.log('get_home：') 
                // console.log(res)
                this.setState({
                    search_arr: res['search_arr'],
                    article_arr: res['article_arr'],
                    goods_arr: res['goods_arr'],
                    imgs_arr: res['imgs_arr'],
                    form_arr: res['form_arr'],
                    // goods_detail_arr: res['goods_detail_arr'],
                    art_detail_arr: res['article_detail_arr'],
                    magic_arr: res['magic_arr'],
                    slide_img_arr: res['slide_arr']
                });
            })
    }
    /**
     * 初始化页面配置
     */
    initConfig() {
        // return Api.get_config()
        //     .then(res => {
        //         this.setState({
        //             magic_arr: res['magic_arr'],
        //             slide_img_arr: res['slide_img_arr']
        //         });
        //     })
    }
    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
    onPullDownRefresh() {
        this.initConfig()
            .then(() => {
                Taro.stopPullDownRefresh()//加载完成停止加载
                this.componentDidShow()
            })
    }
    render() {
        //如果未加载数据，则进行加载
        if (!this.IS_INIT && this.props.loadFun) {
            this.loadData(this.props.loadFun)
        }
        

        //初始化图片列表数据
        var imgs_arr = []
        if (this.state.imgs_arr) {
            imgs_arr = this.state.imgs_arr
        }
        let ImageList = imgs_arr.map((item, index) => {
            return (
                <ImageList taroKey={index} style={"order:" + item['order'] + ";"} img_arr={item} ></ImageList>
            )
        })
        //初始化商品列表数据
        var goods_arr = []
        if (this.state.goods_arr) {
            goods_arr = this.state.goods_arr
        }
        let GoodsList = goods_arr.map((item, index) => {
            return (
                <GoodsList taroKey={index} style={"order:" + item['order'] + ";"} goods_arr={item}></GoodsList>
            )
        })

        //初始化文章列表数据
        var article_arr = []
        if (this.state.article_arr) {
            article_arr = this.state.article_arr
        }
        let ArticleList = article_arr.map((item, index) => {
            return (
                <ArticleList taroKey={index} style={"order:" + item['order'] + ";"} show_more={item['show_more']} article_arr={item}></ArticleList>
            )
        })

        //初始化魔方模块数据
        var magic_arr = []
        if (this.state.magic_arr) {
            magic_arr = this.state.magic_arr
        }

        
        let MagicSquare = magic_arr.map((item, index) => {
            return (                
                <MagicSquare taroKey={index} style={"order:" + item['order'] + ";"} magic_arr={item}></MagicSquare>
            )
        })
        //初始化轮播图模块数据
        var slide_img_arr = []
        if (this.state.slide_img_arr) {
            slide_img_arr = this.state.slide_img_arr
        }
        
        let Slide = slide_img_arr.map((item, index) => {
            return (
                <Slide taroKey={index} style={"order:" + item['order'] + ";"} slide_img_arr={item}></Slide>
            )
        })
        //表单提交初始数据

        var form_arr = []
        if (this.state.form_arr) {
            form_arr = this.state.form_arr
        }
        let DataForm = form_arr.map((item, index) => {
            return (
                <DataForm taroKey={index} style={"order:" + item['order'] + ";"} form_arr={item}></DataForm>
            )
        })
        //初始化商品详情模块数据
        var goods_detail_arr = []
        if (this.state.goods_detail_arr) {
            goods_detail_arr = this.state.goods_detail_arr
        }

        let GoodsDetail = goods_detail_arr.map((item, index) => {
            return (
                <GoodsDetail taroKey={index} style={"order:" + item['order'] + ";"} goods_detail={item}></GoodsDetail>
            )
        })
        //初始化文章详情模块数据
        var art_detail_arr = []
        if (this.state.art_detail_arr) {
            art_detail_arr = this.state.art_detail_arr
        }
        let ArticleDetail = art_detail_arr.map((item, index) => {
            return (
                <ArticleDetail taroKey={index} style={"order:" + item['order'] + ";"} article_detail={item}></ArticleDetail>
            )
        })
        //初始化搜索数据
        var search_arr = []
        if (this.state.search_arr) {
            search_arr = this.state.search_arr
        }
        let Search = search_arr.map((item, index) => {
            return (
                <Search taroKey={index} style={"order:" + item['order'] + ";"}></Search>
            )
        })

        return (
            <View className='index'>
                {Search}
                {ArticleDetail}
                {GoodsDetail}
                {DataForm}                
                {Slide}
                {MagicSquare}
                {ImageList}
                {GoodsList}
                {ArticleList}                
            </View>
        )
    }
}

// var slide_img_arr = [
//     { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg', path: '/pages/index/other/other' },
//     { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' },
//     { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDOgL-jBSiE8qCXBzDuBTjoAkBl.jpg' },
//     { src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDQgL-jBSjp1N7tBDDuBTjoAkBl.jpg' }
//   ]	   
// var magic_arr = [
//       { txt: '二手房', desc: '最新二手房', icon: icon1, v_style: 'background-color: rgb(247, 193, 20);', path: '/pages/index/other/other' }, //,txt_style:'background-color: rgb(247, 103, 167);'
//       { txt: '新房', desc: '最新新房', icon: icon2, v_style: 'background-color: rgb(184, 210, 0);' }, //,txt_style:'background-color: rgb(252, 145, 112);' 
//       // { txt: '租房', icon: icon3, v_style:'background-color: rgb(247, 193, 20); background-image: none;' }, 
//       // { txt: '卖房', icon: icon4, v_style:'background-color: rgb(184, 210, 0); background-image: none;' }, 
//       // { txt: '旅居', icon: icon1 }, 
//       // { txt: '找小区', icon: icon2 }, 
//       // { txt: '找顾问', icon: icon3 }, 
//       // { txt: '预约', icon: icon4 }, 
//       { txt: '优选', desc: '丰富资讯', icon: icon1, v_style: 'background-color: rgb(184, 210, 0);', txt_style: 'background-color: rgb(184, 210, 0);' },
//       { txt: '百科', desc: '最全百科', icon: icon2, v_style: '', txt_style: '' }
//     ]	

    // var article_arr = [
    //                     {
    //                       title: '楼市“降温” ?', path: '/pages/index/other/other', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-03', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg',
    //                       imgs: ['http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg']
    //                     },
    //                     { title: '二手房60-90㎡中小户型成交占比1/3 中介共谋发展，长租市场规模超万亿 将长期保持9%以上增速', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-02', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg',
    //                       imgs: ['http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg']
    //                   },
    //                     { title: '长租市场规模超万亿 将长期保持9%以上增速', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-01', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg',
    //                       imgs: ['http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg']
    //                   },
    //                     { title: '楼市“降温” 刚需户“上车”时间到了吗？', desc: '近日广东楼市市场有降温现象，多地各大楼盘纷纷加入到降价促销大军。而在广州，包括珠江新城、五羊新城等多地各大楼盘纷纷加入到降价促销大军', c_time: '2019-08-03', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg',
    //                       imgs: ['http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg']
    //                   },
    //                   ]
// var goods_info = { title: '刚需优选小户型,长租-告别宿舍生活从此更舒适', desc: '4口之家小户型，优惠新房任你选,4口之家小户型，优惠新房任你选', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '200万元', sale: '29套', remain: '86套' }
// var goods_data_arr = [
//   { title: '刚需优选小户型,长租-告别宿舍生活从此更舒适', desc: '4口之家小户型，优惠新房任你选,4口之家小户型，优惠新房任你选', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '200万元', sale: '29套', remain: '86套', path: '/pages/index/other/other' },
//   { title: '长租-告别宿舍生活从此更舒适', desc: '度假式居住环境帮你减压', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCfsOjgBSji6falBTCyBTj8AkBl.jpg', price: '100万', sale: '2000套', remain: '86套' },
//   { title: '刚需优选小户型', desc: '4口之家小户型，优惠新房任你选1', img: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACCSsOjgBSjtj5zaBzCyBTj8AkBl.jpg', price: '100万', sale: '20套', remain: '86套' }
// ]
// var img_data_arr = [
//   { title: '小户型二居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDgsOjgBSjUzamGBjDuBTi0BEBl.jpg', path: '/pages/index/other/other' },
//   { title: '温馨三居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
//   { title: '温馨四居室', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDWsOjgBSjqwrkdMO4FOLQEQGU.jpg' },
//   { title: '短租旅居没问题', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDzsOjgBSjUmOSHBDDuBTi0BEBl.jpg' },
//   { title: '新房优惠任你选', src: 'http://512360.s81i.faiusr.com/2/101/AFEI6KIfEAIYACDLsOjgBSjByYC7BDDuBTi0BEBl.jpg' }
// ]
// var img_title = '二手精选'  