// 当前路径
import { currentPagePath } from 'util.js'  

function fetch(url, method, header, data) {
  // 判断给服务端传递undefined的问题
  let fetchP = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      method: method ? method : 'GET',
      header: {
        'content-type': 'application/json', // 默认值 
        'pagePath': currentPagePath()
      },
      data: data,
      success: function (res) {
        if (res.statusCode < 500) {
          resolve(res.data)
        } else {
          showError()
          reject(res.data)
        }
      },
      fail: function (err) {
        showError()
        reject(err)
      }
    })
  })
  return fetchP
}

// 服务器开小差了
function showError() {
  wx.navigateTo({
    url: '/pages/error/error',
  })
}

module.exports = {
  fetch
}