// only run in client (browser)

let circle:any = ref(false)

let theme:any
let setLight:any
let setDark:any

if(process.client){
  theme = localStorage.getItem('theme') || null
  setLight= ()=>{ 
      window.document.documentElement.setAttribute("data-theme",'light-juejin')
      localStorage.setItem('theme', 'light-juejin')
  } 
  setDark = ()=>{
      window.document.documentElement.setAttribute("data-theme",'dark-meow')
      localStorage.setItem('theme', 'dark-meow')
  }
  
  if (theme === null) {
    localStorage.setItem('theme', 'light-juejin')
    window.document.documentElement.setAttribute("data-theme",'light-juejin')
  }
  
  if (theme === 'light-juejin') {
    setLight()
  }
  if (theme === 'dark-meow') {
    setDark()
  }
}
const useChangeTheme = () => {
  if(process.client){
    if (theme === 'light-juejin') {
      setDark()
    } 
    if (theme === 'dark-meow') {
      setLight()
    }
    theme = localStorage.getItem('theme')
  }
}

export { useChangeTheme , circle}