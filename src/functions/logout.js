export function logout() {
  localStorage.removeItem('userLoggedIn');
  localStorage.removeItem('userId');
}