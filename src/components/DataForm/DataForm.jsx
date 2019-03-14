import Taro, { Component } from '@tarojs/taro'
import { View, Input,Button } from '@tarojs/components'
import './DataForm.scss'


export default class DataForm extends Component {
    constructor(props) {

        super(props)
        // console.log("Search:")
        // console.log(props)

    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        var title_lists = ['联系姓名', '联系电话', '联系地址', '咨询时间','留言'] 
        return (
            <View className='form'>
                <View className='form-title'>
                    <Text>买卖房屋登记</Text>
                </View>
                <View className='form-lists'>
                    {title_lists.map((item)=>{
                        return(
                            <View className='form-lists-item'>
                                <View className='form-lists-item-txt'>
                                    <Text className='form-lists-item-txt-tag'>*</Text><Text>{item}：</Text>
                                </View>
                                <View className='form-lists-item-input'>
                                    <Input placeholder={'请输入'+item}></Input>
                                </View>
                            </View>
                        )
                    })} 
                    <View className='form-lists-summit'>
                        <Button >提交</Button>
                    </View>                   
                </View>
                
                
            </View>

        )
    }
}

