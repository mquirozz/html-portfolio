var collapse = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.style.background = "#e3d9b5";
      this.style.color = "#A93400";
    } else {
      content.style.display = "block";
      this.style.background = "#A93400";
      this.style.color = "#e3d9b5";
    }
  });
}
