import request from '~/plugins/github'

/**
 * 获取文章分类
 */
export function getPostCategory() {
  return request({
    url: '/milestones',
    method: 'GET'
  })
}

export function getPostList(param) {
  return request({
    url: `/issues?state=open&page=${param.pageIndex}&per_page=${param.pageSize}`,
    method: 'GET'
  })
}
