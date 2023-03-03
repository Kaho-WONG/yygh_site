import request from '@/utils/request'

const api_name = `/api/ucenter/wx`

export default {
    // 获取微信登录生成二维码需要的参数
    getLoginParam() {
        return request({
            url: `${api_name}/getLoginParam`,
            method: `get`
        })
    }
}
