import Taro, { Component } from '@tarojs/taro'
import { View,Input } from '@tarojs/components'
import './Search.scss'
import icon1 from "../../images/ad1.png";
import { AtIcon } from 'taro-ui'

export default class Search extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='search'>
                <View className='search-border'>
                    {/* <AtIcon value='star-2' size='10'></AtIcon> */}

                    <Input type='text' placeholder='请输入查询内容' />
                </View>
            </View>
            
        )
    }
}

