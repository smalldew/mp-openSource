
// 获取上个界面的实例
function previousPageClass() {
  let pageData = getCurrentPages()
  if (pageData.length >= 2) {
    let len = pageData.length - 2
    let preClass = pageData[len]
    return preClass
  } else {
    return ''
  }
}

// 获取当前路径
function currentPagePath() {
  let pageData = getCurrentPages()
  if (pageData.length >= 1) {
    let len = pageData.length - 1
    let data = pageData[len]
    return data.route
  } else {
    return ''
  }
}

module.exports = {
  currentPagePath,
  previousPageClass
}