function dropmenu(){
    document.getElementById("TickMenu").classList.toggle("show");}
    window.onclick = function(event){
        if(!event.target.matches('.dropbtn')){
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
        }
    }
    function toggleMenu() {
      let menu = document.querySelector(".menu nav ul");
      menu.classList.toggle("show");
  }
  
