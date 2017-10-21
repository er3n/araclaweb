module.exports.isAuthenticated = () => {
  return localStorage.getItem('token') != null
}
