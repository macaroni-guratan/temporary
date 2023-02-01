
function search_words(i, top) {
  let p_elements = document.querySelectorAll(i);
  let search_word = document.getElementById("search_word").value;
  let reg = new RegExp(search_word, "gi");

  for (let pi = 0; pi < p_elements.length; pi++) {
    let tmp = document.getElementById("class_list");
    let p_text = p_elements[pi].textContent;
    p_elements[pi].classList.remove("bg-yellow-500")
    p_elements[pi].innerHTML = p_text.replace(reg, function (match_word) {
      tmp.scrollTo(0, p_elements[pi].offsetTop - document.getElementById(top).offsetTop);
      p_elements[pi].classList.add("bg-yellow-500")
      return "" + match_word + "";
    });
  }
}