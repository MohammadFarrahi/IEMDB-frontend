export function getAuthToken(token = null) {
  if (token === null) {
    const savedToken = localStorage.getItem('token');
    return { 'Authorization': 'Token ' + savedToken, }
  }
  else {
    return { 'Authorization': 'Token ' + token, }
  }
}