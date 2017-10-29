const TOKEN_KEY = 'ls.token'

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) != null
}

export const authenticate = (json) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(json))
}

export const authToken = () => {
  let tokenStr = localStorage.getItem(TOKEN_KEY)
  let tokenJson = JSON.parse(tokenStr)
  return tokenJson.token
}

export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
