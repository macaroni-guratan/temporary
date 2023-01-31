//大枠のdiv
function addDiv() {
  main = document.getElementById("makeArea");
  div = document.getElementById("slc_div")
  //if(div.length == 0)return;
  child = document.createElement("div");
  options = document.createElement("option");
  child.id = "block" + blockId;
  options.text = child.id
  options.value = child.id
  blockId++;
  for (i = 0; i < tmpClass.length; i++) {
    child.classList.add(tmpClass[i]);
  }
  main.appendChild(child);
  div.appendChild(options)
}

function selectMenu(name){
  if(name == slc_tmpClass)return;
  tmpClass_list[(slc_tmpClass == "tmp_class" ? 0 : slc_tmpClass == "tmp_class1" ? 1 : 2)] = tmpClass;
  tmpClass = tmpClass_list[(name == "tmp_class" ? 0 : name == "tmp_class1" ? 1 : 2)]
  document.getElementById(slc_tmpClass).classList.add("hidden");
  const button = document.getElementById(slc_tmpClass + "_menu")
  button.classList.remove("bg-blue-300")
  button.classList.add("bg-blue-200");
  button.classList.add("hover:bg-blue-400");
  document.getElementById(name).classList.remove("hidden");
  const button2 = document.getElementById(name + "_menu")
  button2.classList.remove("bg-blue-200")
  button2.classList.remove("hover:bg-blue-400")
  button2.classList.add("bg-blue-300");
  slc_tmpClass = name;
}

function selectArea(area) {
  if (tmpArea != null) {
    tmpArea.classList.remove("bg-blue-300");
  }
  tmpArea = document.getElementById(area);
  tmpArea.classList.add("bg-blue-300");
}

function deleteDiv() {
  const div = document.getElementById("slc_div");
  if (div.length == 0) return;
  const main = document.getElementById(div.options[div.selectedIndex].value);
  main.remove();
  div.options[div.selectedIndex].remove();
}
function deleteArea() {
  if (tmpArea != null) {
    tmpArea.remove();
    tmpArea = null;
  }
}
//div を追加
function makeAreas() {
  const div = document.getElementById("slc_div");
  if (div.length == 0) return;
  const main = document.getElementById(div.options[div.selectedIndex].value);
  child = document.createElement("div");
  child.id = divId;
  child.setAttribute('onclick', `selectArea(${child.id})`)
  divId++
  for (i = 0; i < tmpClass.length; i++) {
    child.classList.add(tmpClass[i]);
  }
  selects = document.getElementById('selectmain');
  main.appendChild(child);
}