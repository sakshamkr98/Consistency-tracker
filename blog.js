const editor=document.querySelector(".editor");
editor.innerHTML=localStorage.getItem("blog")||editor.innerHTML;

editor.addEventListener("input",()=>{
  localStorage.setItem("blog",editor.innerHTML);
});
