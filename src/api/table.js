import request from '@/utils/request'
export function tableList() {
  return request({
    url: '/table/list',
    method: 'get'
  })
}