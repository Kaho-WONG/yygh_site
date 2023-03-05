import request from '@/utils/request'

const api_name = `/api/hosp/hospital`

export default {
    //查询医院列表
    getPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/findHospList/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },

    //根据医院名称查询
    getByHosname(hosname) {
        return request({
            url: `${api_name}/findByHosName/${hosname}`,
            method: 'get'
        })
    },

    //根据医院编号获取医院详情信息(基本信息、预约信息)
    show(hoscode) {
        return request({
            url: `${api_name}/findHospDetail/${hoscode}`,
            method: 'get'
        })
    },

    //根据医院编号获取科室列表
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    },

    //分页获取指定医院和科室的可预约排班数据
    getBookingScheduleRule(page, limit, hoscode, depcode) {
        return request({
            url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
            method: 'get'
        })
    },

    //获取指定医院和科室在workDate的排班信息
    findScheduleList(hoscode, depcode, workDate) {
        return request({
            url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
            method: 'get'
        })
    },

    //根据排班id获取排班数据
    getSchedule(id) {
        return request({
            url: `${api_name}/getSchedule/${id}`,
            method: 'get'
        })
    },

}