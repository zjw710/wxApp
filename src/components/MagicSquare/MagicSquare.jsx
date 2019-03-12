import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './MagicSquare.scss'
import icon1 from "../../images/ad1.png";
import { AtIcon } from 'taro-ui'

export default class MagicSquare extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='magic-square'>
                <View>二手房</View>
                <View>二手房</View>
                <View>二手房</View>
                <View>二手房</View>
                <View>二手房</View>
                <View>二手房</View>
            </View>
        )
    }
}

