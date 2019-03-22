import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import './ArticleDetail.scss'

export default class ArticleDetail extends Component {
    static defaultProps = {
        article_detail: { order: '',style: '', data: { title: '', read: '', time: '', content: ''} }//data: [{ txt: '', type: '' }]
    }
    constructor(props) {
        super(props)
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

    render() {
        let article_detail = this.props.article_detail
        let article_data = article_detail['data']
        let title = article_data['title']
        let read = article_data['read']
        let time = article_data['time']
        let content = article_data['content']
        return (
            <View className='art'>
                <View className='art-detail'>
                    <View className='art-detail-title'>
                        <Text>{title}</Text>
                    </View>
                    <View className='art-detail-time'>
                        <Text>{time}</Text>
                        <Text>{read}</Text>
                    </View>
                    <View className='art-detail-content'>
                        <Text>{content}</Text>
                    </View>
                </View>
                
            </View>

        )
    }
}

