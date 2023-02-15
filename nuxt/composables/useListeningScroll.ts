const useListeningScroll = () => {
  let scrollUp = ref(false)
  let scrollDown = ref(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      scrollUp.value = true
      scrollDown.value = false
    } 
    if(window.scrollY  < 60) {

      // 这里怎么写？...也许不应该看距离而是加个时间防抖。
      scrollUp.value = false
      scrollDown.value = true
    }
    console.log(scrollUp.value, scrollDown.value)
  })
  return { scrollUp, scrollDown }
}

export default useListeningScroll