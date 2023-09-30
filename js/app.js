const icon = document.querySelector(".icon");
const closebtn = document.querySelector(".closebtn");

icon.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "300px";
  //document.getElementById("header").style.marginLeft = "250px";
});
closebtn.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("header").style.marginLeft= "0";
});
