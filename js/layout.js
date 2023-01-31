if (typeof user != "undefined") {
  const navbar = document.getElementById("navbar");
  const a = document.createElement("a");
  a.setAttribute('href', '/logout');
  a.innerHTML = user.username + "をログアウト"
  navbar.appendChild(a);
} else {
  const navbar = document.getElementById("navbar");
  const a = document.createElement("a");
  a.className = "mt-12 text-2xl font-bold"
  a.setAttribute('href', '/login');
  a.innerHTML = "ログイン"
  navbar.appendChild(a);
}