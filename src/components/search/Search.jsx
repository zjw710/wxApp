import Taro, { Component } from '@tarojs/taro'
import { View,Input } from '@tarojs/components'
import './Search.scss'

export default class Search extends Component {
    constructor(props) {
        
        super(props)
        // console.log("Search:")
        // console.log(props)
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
        return (
            <View className='search'>
                <View className='search-border'>
                    <Input className='search-border-input' type='text' placeholder='请输入查询内容' />
                </View>
            </View>
            
        )
    }
}

