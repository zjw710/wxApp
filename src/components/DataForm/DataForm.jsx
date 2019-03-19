import Taro, { Component } from '@tarojs/taro'
import { View, Input,Button, Textarea } from '@tarojs/components'
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
        var form_row_arr = [{ txt: '', type: '' }]
        if (this.props.form_row_arr) {
            form_row_arr = this.props.form_row_arr
        }
        var form_title = ''
        if (this.props.form_title) {
            form_title = this.props.form_title
        }
        // [{ txt: '联系姓名' }, { txt: '联系电话' }, { txt: '联系地址'}, { txt: '咨询时间'},{txt:'留言',type:'rich'}]

        return (
            <View className='form'>
                <View className='form-title'>
                    <Text>{form_title}</Text>
                </View>
                <View className='form-lists'>
                    {form_row_arr.map((item,index)=>{
                        return(
                            <View taroKey={index} className='form-lists-item'>
                                <View className='form-lists-item-txt'>
                                    <Text className='form-lists-item-txt-tag'>*</Text><Text>{item.txt}</Text>
                                </View>
                                <View className='form-lists-item-input'>                                   
                                    {item.type=='rich'?(
                                            <Textarea placeholder={'请输入' + item.txt}></Textarea>
                                        ):(
                                            <Input placeholder={'请输入' + item.txt}></Input>
                                        )
                                    }                                    
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

