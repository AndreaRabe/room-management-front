function PrivateRoute({ element }){
  if(!window.localStorage.getItem('access_token')){
    window.location.reload()
    window.location.replace('/singUp')
    return null
  }
else{
    return element;
}
}


export default PrivateRoute;