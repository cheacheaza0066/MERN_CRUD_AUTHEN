export const authenticate = (res) => {
    if (window !== 'undefined') {
      sessionStorage.setItem("token", JSON.stringify(res.data.user.token));
      sessionStorage.setItem("name", JSON.stringify(res.data.user.firstname));
    
  }
}

export const getUser = ()=>{
    if (window !== 'undefined') {
        return JSON.parse(sessionStorage.getItem("name"))
    }
}

export const Logout = ()=>{
    if (window !== 'undefined') {
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('token')
    }
  

}