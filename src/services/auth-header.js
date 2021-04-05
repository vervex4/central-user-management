export default function authheader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.appUserToken) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.appUserToken}`
    };
    return headers;
  }
  return {};
}
