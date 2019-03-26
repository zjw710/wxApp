import Taro, { Component } from '@tarojs/taro'
import { View, Input, Button, Textarea, Text } from '@tarojs/components'
import './DataForm.scss'

export default class DataForm extends Component {
    static defaultProps = {
        form_arr: { title: '', style: '', summit: '提交', data: [] }//data: [{ txt: '', type: '' }]
    }
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
        // let init_form_arr = { title: '', style: '',summit:'提交', data: [{ txt: '', type: '' }] }
        // let form_data = init_form_arr['data']
        // let form_title = init_form_arr['title']
        // if (this.props.form_arr) {
        let form_arr = this.props.form_arr
        let form_data = form_arr['data']
        let form_title = form_arr['title']
        let summit = form_arr['summit']

        console.log("form_arr:")
        console.log(form_arr)
        // }

        // [{ txt: '联系姓名' }, { txt: '联系电话' }, { txt: '联系地址'}, { txt: '咨询时间'},{txt:'留言',type:'rich'}]

        return (
            <View className='form'>
                <View className='form-title'>
                    <Text>{form_title}</Text>
                </View>
                <View className='form-lists'>
                    {form_data.map((item,index)=>{
                        return(
                            <View taroKey={index} className='form-lists-item'>
                                <View className='form-lists-item-txt'>
                                    <Text className='form-lists-item-txt-tag'>*</Text><Text>{item.txt}</Text>
                                </View>
                                <View className='form-lists-item-input'>                                   
                                    {item.type=='rich'?(
                                            <Textarea className='form-lists-item-input-rich' placeholder={'请输入' + item.txt}></Textarea>
                                        ):(
                                            <Input className='form-lists-item-input-input' placeholder={'请输入' + item.txt}></Input>
                                        )
                                    }                                    
                                </View>
                            </View>
                        )
                    })} 
                    <View className='form-lists-summit'>
                        <Button className='form-lists-summit-btn'>{summit}</Button>
                    </View>                   
                </View>
                
                
            </View>

        )
    }
}

