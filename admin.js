import { observeAuth, isAdmin, adminOverview } from "./firebase.js";
const access = document.querySelector("#adminAccess"), content = document.querySelector("#adminContent"), rows = document.querySelector("#adminRows");
observeAuth(async user => {
  if (!user) { access.textContent = "Please log in with the administrator account to open this page."; return; }
  if (!isAdmin(user)) { access.textContent = "You do not have permission to view the Admin Dashboard."; return; }
  try {
    const users = await adminOverview(), total = 69;
    rows.replaceChildren(...users.map(user => { const solved = Object.values(user.state?.solved || {}).filter(Boolean).length, progress = total ? Math.round((solved / total) * 100) : 0, row = document.createElement("tr"); [user.email || user.uid, solved, total, `${progress}%`].forEach(value => { const cell = document.createElement("td"); cell.textContent = value; row.append(cell); }); return row; }));
    document.querySelector("#userCount").textContent = users.length;
    document.querySelector("#averageProgress").textContent = users.length ? `${Math.round(users.reduce((sum, user) => sum + Object.values(user.state?.solved || {}).filter(Boolean).length / total * 100, 0) / users.length)}%` : "0%";
    access.hidden = true; content.hidden = false;
  } catch { access.textContent = "Could not load user data. Check Firestore rules and the Firebase connection."; }
});
