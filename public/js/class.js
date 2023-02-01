function deleteClass(path) {
  classFlag.splice(classFlag.indexOf(path), 1);
  document.getElementById(`${tailwind_class[path][0]}`).classList.add("hidden");
  document.getElementById(`${tailwind_class[path][0]}` + "list").remove();
};

function addClass(i) {
  if (classFlag.indexOf(i) == -1) {
    let tmpdiv = document.createElement("div");
    tmpdiv.className = "flex justify-around mt-1 flex-wrap"
    tmpdiv.id = tailwind_class[i][0] + "list"
    const a = tailwind_class[i][0];
    const tmp = document.createElement("h1");
    tmp.innerHTML = `${tailwind_class[i][0]}`;
    document.getElementById(a).classList.remove("hidden");
    tmp.className = "border-b"
    const button1 = document.createElement("button");
    button1.innerHTML = "追加"
    button1.className = "bg-blue-200 rounded"
    button1.setAttribute('onclick', `selectClass(${i})`)
    const button2 = document.createElement("button");
    button2.innerHTML = "削除"
    button2.className = "bg-red-200 rounded"
    button2.setAttribute('onclick', `deleteClass(${i})`)
    tmpdiv.appendChild(tmp);
    tmpdiv.appendChild(button1);
    tmpdiv.appendChild(button2);
    document.getElementById(a).before(tmpdiv);
    classFlag.push(i);
  } else {
    alert("追加できませんでした")
  }
}

function selectClass(path) {
  const main = document.getElementById(slc_tmpClass);
  const slc = document.getElementById(`${tailwind_class[path][0]}`);
  const slcClass = slc.options[slc.selectedIndex].value;
  if (!tmpClass.indexOf(slcClass)) {
    alert("すでに追加しています")
    return;
  }
  const div = document.createElement("div");
  div.id = slcClass;
  div.className = "m-1"
  const text = document.createElement("h1");
  const button = document.createElement("button");
  button.innerHTML = "削除"
  button.className = "bg-red-200 rounded"
  button.setAttribute('onclick', `deleteSelectClass("${slcClass}")`)
  text.innerHTML = slcClass;
  tmpClass.push(slcClass);
  div.appendChild(text);
  div.appendChild(button)
  main.appendChild(div);
}

function deleteSelectClass(name){
  const div = document.getElementById(name);
  div.remove();
  tmpClass.splice(tmpClass.indexOf(name), 1);
}