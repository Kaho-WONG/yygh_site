import request from '@/utils/request'

const api_name = `/api/order/orderInfo`

export default {
    //预约下单，传入所选择的排班的id和就诊人的id
    submitOrder(scheduleId, patientId) {
        return request({
            url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
            method: 'post'
        })
    }
}
