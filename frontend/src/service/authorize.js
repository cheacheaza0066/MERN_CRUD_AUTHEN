export const authenticate = (res)=>{
    if (window !=='undefined') {
        sessionStorage.setItem("token",JSON.stringify(res.data.token))
        sessionStorage.setItem("name",JSON.stringify(res.data.token.firstname))

    }
}