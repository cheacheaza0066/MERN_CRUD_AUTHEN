export const authenticate = (res) => {
    if (window !== 'undefined') {
      sessionStorage.setItem("token", JSON.stringify(res.data.user.token));
      sessionStorage.setItem("name", JSON.stringify(res.data.user.firstname));
      sessionStorage.setItem("role", JSON.stringify(res.data.user.role));
      sessionStorage.setItem("id", JSON.stringify(res.data.user.id));


    
  }
}

export const getID = ()=>{
    if (window !== 'undefined') {
        return JSON.parse(sessionStorage.getItem("id"))
    }
}

export const getRole = ()=>{
    if (window !== 'undefined') {
        return JSON.parse(sessionStorage.getItem("role"))
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
        sessionStorage.removeItem('role')

    }
  

}