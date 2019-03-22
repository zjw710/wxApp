const BaseUrl = "https://ptuadmin.tigonetwork.com/api/modular"
import Taro from '@tarojs/taro'
import my_ajax  from "./ajax";
/**
 * 统一请求api接口，统一处理code<0的异常业务提示，
 * 只返回code>0的数据给界面进行渲染
 * @param {*} path 
 * @param {*} params 
 * @param {*} check_token 
 */
function fetchApi(path, params, check_token = true) {
    //统一获取openid与m_id
    let userInfo = Taro.getStorageSync('userInfo')
    params.openid = userInfo.openid
    params.m_id = userInfo.m_id
    
    if (check_token) {
        //统一获取收集到的表单formid,用于给用户发模板消息
        let formId_arr = Taro.getStorageSync('formId_arr')
        if (formId_arr) {
            params.formid_arr = JSON.stringify(formId_arr)
        }
        //清空收集的formId
        Taro.setStorageSync('formId_arr', [])
    }
    return my_ajax(BaseUrl, path, params)
        .then(function (res) {
            var res = res.data
            if (res['code'] > 0) {//请求成功
                return res.data;
            } else if (res['code'] == -2 || res['code'] == -3 || res['code'] == -4) {
                Taro.showModal({
                    title: '提示',
                    content: res['msg'],
                    confirmText: "好的",
                    showCancel: false,
                    success: function () {

                    }
                });
                return null
            } else if (res['code'] == -10) {//token失败
                Taro.setStorageSync('userInfo', [])
                Taro.showModal({
                    title: '提示',
                    content: '登录异常，请重新登录',
                    confirmText: "好的",
                    showCancel: false,
                    // success: function () {
                    //     Taro.switchTab({
                    //         url: '/pages/index/index',
                    //     })
                    // }
                });

            } else if (res['code'] <= 0) {//服务器返回非正常数据
                Taro.showToast({
                    title: res['msg'],
                    icon: 'none',
                    duration: 2000
                })
            }
            return null;//返回空数据      
        })
        .catch(function (e) {//请求异常      
            Taro.showToast({
                title: '网络异常',
                icon: 'none',
                duration: 2000
            })
            return null;//返回空数据  
        })
}

/********************接口请求方法start*******************************/
/**
 * 微信登录接口,不校验token,否则传上去的formid会丢失
 */
function login(code, encrypted_data, iv, raw_data, signature, p_id = 0, ) {
    let path = 'jd_login'
    const params = { code: code, encrypted_data: encrypted_data, iv: iv, raw_data: raw_data, signature: signature, p_id: p_id }
    return fetchApi(path, params, false)
}

/**
 * 配置接口
 */
function get_config() {
    
    let path = 'get_config'
    const params = {}
    return fetchApi(path, params)
}
/**
 * 获取首页数据
 */
function get_home(){

    // const params = { get_article: '', imgs_list: '', get_goods: ''}
    // return get_data(params)
    let path = 'get_home'
    const params = {}
    return fetchApi(path, params)
}
/**
 * 获取文章数据列表
 * @param {第几页} page 
 * @param {分类} cat 
 */
function get_article(page,cat) {
    // const params = {article_list:{page:page,cat:cat}}
    // return get_data(params)

    let path = 'get_article'
    const params = { page: page,cat:cat}
    return fetchApi(path, params)
}
/**
 * 获取文章详情
 * 
 */
function get_article_detail(art_id) {
    let path = 'get_article_detail'
    const params = { art_id: art_id}
    return fetchApi(path, params)
}
/**
 * 获取商品数据列表
 * @param {第几页} page 
 * @param {分类} cat 
 */
function get_goods(page, cat) {
    // const params = { goods_list: { page: page, cat: cat } }
    // return get_data(params)

    let path = 'get_goods'
    const params = { page: page, cat: cat }
    return fetchApi(path, params)
}
/**
 * 获取商品详情 
 */
function get_goods_info(g_id) {
    let path = 'get_goods_info'
    const params = { g_id: g_id}
    return fetchApi(path, params)
}
/**
 * 获取action页数据
 */
function get_action() {
    let path = 'get_action'
    const params = {}
    return fetchApi(path, params)
}
/**
 * 获取find页数据
 */
function get_find() {
    let path = 'get_find'
    const params = {}
    return fetchApi(path, params)
}
// function get_data(params) {
//     let path = 'get_data'
//     return fetchApi(path, params)
// }
export const Api = { get_config, get_home, get_article, get_article_detail, get_goods, get_action, get_find, get_goods_info}