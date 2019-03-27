import Taro from '@tarojs/taro'
export default function (api, path, params) {
    
    // return Taro.request({
    //     url: `${api}/${path}`,
    //     data: params,
    //     header: { 'Content-Type': 'application/json' },
    //     method: "POST",
    // })

    return new Promise((resolve, reject)=>{
        Taro.showLoading({
            title: '加载中'
        })
        Taro.request({
            url: `${api}/${path}`,
            data: params,
            method: "POST",
            header: { 'Content-Type': 'application/json' },
            
        }).then((res) => {
            Taro.hideLoading()
            if (res.statusCode === 200) {                
                resolve(res)
            } else {
                console.log('网络请求出现错误:', res)
            }
        })
    })
    
}          
            
