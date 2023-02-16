const  useLognCheck  = () => {
  const user = useStrapiUser()
  if (!user.value) {
    
    return false
  } else {
    return true
  }
}