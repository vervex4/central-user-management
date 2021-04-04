export default function authheader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.appUserToken) {
    return `Authorization : Bearer ${user.appUserToken}`;
  }
  return {};
}
