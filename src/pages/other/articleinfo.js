import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './articleinfo.scss'
import { ArticleDetail } from "../../components/ArticleDetail/ArticleDetail";
import { Api } from "../../utils/services";

export default class ArticleInfo extends Component {

    constructor(props) {

        super(props)
        this.child = null

    }
    config: Config = {
        navigationBarTitleText: '文章详情'

    }
    componentWillMount() {
        Api.get_article_detail()
            .then(res => {
                this.setState({
                    article_detail: res['article_detail']
                });
            })
    }
    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <ArticleDetail article_detail={this.state.article_detail}></ArticleDetail>
            </View>
        )
    }
}
// article_arr={article_arr}

