export default function filterFunction() {
  document.getElementById("filter-dropdown").classList.toggle("filter-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".filter-dropbtn")) {
    var dropdowns = document.getElementsByClassName("filter-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("filter-show")) {
        openDropdown.classList.remove("filter-show");
      }
    }
  }
};
