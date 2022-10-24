import axios from 'axios'

export const reqMyArticleList = () => {
  return axios({
    method: 'get',
    url: '../static/myArticleList.json'
  })
}
export const reqTotalList = () => {
  return axios({
    method: 'get',
    url: '../static/totalList.json'
  })
}
