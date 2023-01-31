//大枠のid
let blockId = 1;
//大枠の中のid
let divId = 0;
//選択中のエリア
let tmpArea = null;
//calssの設定用
let classFlag = [0, 1, 2];
//作成時のクラス
let tmpClass = [];
let tmpClass_list = [[], [], []];

//選択中のclassメニュー
let slc_tmpClass = "tmp_class";

function tailwind_list() {
  const tmp = document.getElementById("tailwindClass")
  for (i = 0; i < tailwind_class.length; i++) {
    const tmptext = document.createElement("p");
    tmptext.innerHTML = tailwind_class[i][0];
    if (i == 0) {
      tmptext.id = "sc_top"
    }
    const tmpSlc = document.createElement("select")
    tmpSlc.id = tailwind_class[i][0];
    if (i < 3) {
      let tmpdiv = document.createElement("div");
      tmpdiv.className = "flex justify-around mt-1 flex-wrap"
      tmpdiv.id = tailwind_class[i][0] + "list"
      tmpSlc.className = "inline-block rounded bg-blue-200"
      const tmp = document.createElement("h1");
      tmp.innerHTML = `${tailwind_class[i][0]}`;
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
      document.getElementById("slcd_class").appendChild(tmpdiv);
    } else {
      tmpSlc.className = "inline-block rounded bg-blue-200 hidden"
    }
    const addButton = document.createElement("button")
    addButton.setAttribute('onclick', `addClass(${i})`)
    addButton.innerHTML = "追加"
    addButton.className = "bg-blue-200 rounded"
    for (j = 1; j < tailwind_class[i].length; j++) {
      options = document.createElement("option");
      options.text = tailwind_class[i][j];
      options.value = options.text;
      tmpSlc.appendChild(options)
    }
    const div = document.createElement("div");
    div.className = "border-4 mb-1 p-1"
    const subDiv = document.createElement("div");
    subDiv.className = "flex justify-around"
    subDiv.appendChild(tmptext);
    subDiv.appendChild(addButton);
    div.appendChild(subDiv);
    document.getElementById("slcd_class").appendChild(tmpSlc);
    tmp.appendChild(div);
  }
}
tailwind_list();