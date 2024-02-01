/************** Exercise 1 ****************/

/* Alkohol */
document.querySelector("img[alt=øl]").addEventListener("click", text);
document.querySelector("img[alt=snaps]").addEventListener("click", text);
document.querySelector("img[alt=squash]").addEventListener("click", text);
document.querySelector("img[alt=cola]").addEventListener("click", text);

function text() {
  console.log(this.alt);
}
