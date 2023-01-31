function tableCreate() {
  const Creates = require("../models/creates");
  const div = document.getElementById("navbar")
  Creates.array.forEach(element => {
    const td1 = document.createElement("td");
    const a = document.createElement("a");
    a.innerHTML = element.createName;
    const url = `/create/${element.createId}`
    a.setAttribute('href', url);
    td1.appendChild(a);
    const td2 = document.createElement("td");
    td2.innerHTML = element.updatedAt
    const tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    div.appendChild(tr);
  });
}