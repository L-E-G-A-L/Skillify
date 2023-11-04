export function onLogOut() {
  sessionStorage.removeItem("userRole");
  sessionStorage.removeItem("userId");
}
