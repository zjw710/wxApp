import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './LoadMore.scss'
import loading from "../../images/loading.gif";

export default class LoadMore extends Component {
    static defaultProps = {
        status: 'loading'
    }
    constructor(props) {
        super(props)
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        let load_more = null
        if (this.props.status == 'loading') {
            load_more = <Image className='load-more-img' src={loading}></Image>
        }else{
            load_more = <View>
                            <Text>-没有数据了-</Text>
                        </View>
        }
        return (
            <View className='load-more'>
                {/* <Image className='load-more-img' src={loading} style={this.props.status=='loading'?'':'display:none;'}></Image>
                <View style={this.props.status == 'loading' ? 'display:none;' : ''}>
                    <Text>-没有数据了-</Text>
                </View> */}
                {load_more}
            </View>

        )
    }
}

