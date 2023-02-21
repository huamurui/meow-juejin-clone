
let oldScrollTop = ref(0)
let isHide = ref(false)

const  useListeningScroll= ()=> {
  // 滚动条距文档顶部的距离（做兼容处理）===》不懂的可以结合画图理清逻辑
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
    document.body.scrollTop
  // 滚动条滚动的距离
  let scrollStep = scrollTop - oldScrollTop.value;
  // 更新——滚动前，滚动条距文档顶部的距离
  oldScrollTop.value = scrollTop;
  console.log('scrollStep')
  if (scrollStep < 0) {
    isHide.value = false;
  } else {
    isHide.value = true;
  }
}


export { useListeningScroll,isHide }