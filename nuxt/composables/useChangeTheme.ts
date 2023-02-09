let circle = ref(false)
const useChangeTheme = () => {
  if (circle.value) {
    window.document.documentElement.setAttribute("data-theme", 'dark-meow');
  } else {
    window.document.documentElement.setAttribute("data-theme", 'light-juejin');
  }
  circle.value = !circle.value
}

export { useChangeTheme, circle }