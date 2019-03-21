import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.scss'
import { ArticleList } from "../../../components/ArticleList/ArticleList";

export default class Article extends Component {

    constructor(props) {

        super(props)    
        this.child = null   

    }
    config: Config = {
        navigationBarTitleText: '文章列表'

    }
    componentWillMount() { 

    }   
    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }   
    //用于获取子组件的对象
    getChild(ref){
        this.child = ref
    }
   
    onReachBottom(){   
        if (this.child) {
            this.child.loadMore()//调用子组件的加载更多
        }          
    }

    render() {
        return (
            <View className='index'>                
                <ArticleList show_more={true} getChild={(ref) => { this.getChild(ref)}}></ArticleList>                
            </View>
        )
    }
}
// article_arr={article_arr}

