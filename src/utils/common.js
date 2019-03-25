import Taro from '@tarojs/taro'
/**
 * 加载更多数据统一封装函数
 * @param {类对象} that
 * @param {请求的函数} req_fun
 */
function loadMore(that,req_fun,field) {
    if (!that.HAS_MORE || !that.SHOW_MORE) {
        return
    }
    that.setState({
        load_status: 'loading'
    })
    return req_fun(that.C_PAGE, that.CAT)
        .then(res => {
            if (!res) {
                
                return
            }
            var data_new = res[field]['data']
            if (data_new) {
                var data_arr = that.state.data_arr ? that.state.data_arr : []
                //如果是第一页，直接覆盖数据
                if (that.C_PAGE == 1) {
                    data_arr = res[field]
                } else {
                    var data = data_arr['data']
                    data.push.apply(data,data_new)
                    data_arr['data'] = data
                }

                that.setState({
                    data_arr: data_arr
                })

                if (data_new.length < that.PAGE_SIZE) {
                    that.HAS_MORE = true
                    that.setState({
                        load_status: 'loading'
                    })
                }
                that.C_PAGE++

            } else {
                that.HAS_MORE = false
                that.setState({
                    load_status: 'noMore'
                })
            }
        })
}

export const Common = { loadMore }
