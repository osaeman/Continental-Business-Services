const icon = document.querySelector(".icon");
const closebtn = document.querySelector(".closebtn");

icon.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "280px";
});
closebtn.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
});
