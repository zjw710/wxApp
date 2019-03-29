import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './BaseComponent.scss'
import Slide from "../Slide/Slide";
import Search from "../Search/Search";
import MagicSquare from "../MagicSquare/MagicSquare";
import GoodsList from "../GoodsList/GoodsList";
import ImageList from "../ImageList/ImageList";
import ArticleList from "../ArticleList/ArticleList";
import DataForm from "../DataForm/DataForm";
import GoodsDetail from "../GoodsDetail/GoodsDetail";
import ArticleDetail from "../ArticleDetail/ArticleDetail";


export default class BaseComponent extends Component {

    config: Config = {
        navigationBarTitleText: '首页',
        enablePullDownRefresh: true

    }
    static defaultProps = {
        isEnable: true,
        loadFun:null,
        getChild:null
    }
    constructor(props) {
        super(props)    
        this.IS_INIT = 0      
        this.loadData = this.loadData.bind(this)  
    }
    componentWillMount() {
        this.initConfig()
        
        // console.log('componentWillMount') 
        // this.loadData()
    }

    componentDidMount() {
        if (this.props.getChild) {
            this.props.getChild(this)//传递子组件对象给父组件
        } 
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
                if (!res) {
                    return
                }
                this.setState({
                    article_arr: res['article'],
                    form_arr: res['dataform'],
                    goods_arr: res['goods'],
                    imgs_arr: res['image'],                    
                    magic_arr: res['magic'],
                    search_arr: res['search'],
                    slide_img_arr: res['slide'],                                                        
                    // goods_detail_arr: res['goods_detail_arr'],
                    // art_detail_arr: res['article_detail'],
                    
                    
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
        // this.initConfig()
        //     .then(() => {
        //         Taro.stopPullDownRefresh()//加载完成停止加载
        //         this.componentDidShow()
        //     })
    }
    render() {
        //如果未加载数据，则进行加载
        if (!this.IS_INIT && this.props.loadFun) {
            this.loadData(this.props.loadFun)
        }

        // //初始化图片列表数据
        var imgs_arr = []
        if (this.state.imgs_arr) {
            imgs_arr = this.state.imgs_arr
        }
        let ImageListCom = imgs_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <ImageList img_arr={item} ></ImageList>
                </View>                
            )
        })
        //初始化商品列表数据
        var goods_arr = []
        if (this.state.goods_arr) {
            goods_arr = this.state.goods_arr
        }
        let GoodsListCom = goods_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <GoodsList goods_arr={item}></GoodsList>
                </View>
                
            )
        })

        //初始化文章列表数据
        var article_arr = []
        if (this.state.article_arr) {
            article_arr = this.state.article_arr
        }
        let ArticleListCom = article_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <ArticleList show_more={item['show_more']} article_arr={item}></ArticleList>
                </View>
                
            )
        })

        //初始化魔方模块数据
        var magic_arr = []
        if (this.state.magic_arr) {
            magic_arr = this.state.magic_arr
        }

        
        let MagicSquareCom = magic_arr.map((item, index) => {
            return (    
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <MagicSquare  magic_arr={item}></MagicSquare>
                </View>            
                
            )
        })
        //初始化轮播图模块数据
        var slide_img_arr = []
        if (this.state.slide_img_arr) {
            slide_img_arr = this.state.slide_img_arr
        }
        
        let SlideCom = slide_img_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <Slide slide_img_arr={item}></Slide>
                </View>
                
            )
        })
        //表单提交初始数据

        var form_arr = []
        if (this.state.form_arr) {
            form_arr = this.state.form_arr
        }
        let DataFormCom = form_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <DataForm  form_arr={item}></DataForm>
                </View>
                
            )
        })
        //初始化商品详情模块数据
        var goods_detail_arr = []
        if (this.state.goods_detail_arr) {
            goods_detail_arr = this.state.goods_detail_arr
        }

        let GoodsDetailCom = goods_detail_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <GoodsDetail goods_detail={item}></GoodsDetail>
                </View>
                
            )
        })
        //初始化文章详情模块数据
        var art_detail_arr = []
        if (this.state.art_detail_arr) {
            art_detail_arr = this.state.art_detail_arr
        }
        let ArticleDetailCom = art_detail_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <ArticleDetail article_detail={item}></ArticleDetail>
                </View>
                
            )
        })
        //初始化搜索数据
        var search_arr = []
        if (this.state.search_arr) {
            search_arr = this.state.search_arr
        }
        let SearchCom = search_arr.map((item, index) => {
            return (
                <View taroKey={index} style={"order:" + item['order'] + ";"}>
                    <Search></Search>
                </View>
                
            )
        })

        return (
            <View className='index'>
                {SearchCom}
                {ArticleDetailCom}
                {GoodsDetailCom}
                {DataFormCom}                
                {SlideCom}
                {MagicSquareCom}
                {ImageListCom}
                {GoodsListCom}
                {ArticleListCom}         
            </View>
        )
    }
}
