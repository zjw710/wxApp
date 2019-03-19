import Taro, { Component } from '@tarojs/taro'
import { View,Input } from '@tarojs/components'
import './Search.scss'
import icon1 from "../../images/ad1.png";
import { AtIcon } from 'taro-ui'

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
                    {/* <AtIcon value='star-2' size='10'></AtIcon> */}

                    <Input type='text' placeholder='请输入查询内容' />
                    {/* <Text>{this.props.name}</Text> */}
                </View>
            </View>
            
        )
    }
}

