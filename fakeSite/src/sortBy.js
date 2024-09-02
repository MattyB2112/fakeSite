export default function myFunction() {
  document.getElementById("sortby-dropdown").classList.toggle("sortby-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".sort-by-dropbtn")) {
    var dropdowns = document.getElementsByClassName("sort-by-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains(".sortby-show")) {
        openDropdown.classList.remove(".sortby-show");
      }
    }
  }
};
