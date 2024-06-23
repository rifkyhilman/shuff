
/**
   * Pop up
   */
  
let p = document.getElementById("pricing");
let s = document.getElementById("container-hero");
let popin = false;
function view() {
  if (popin) {
    p.style.display = "none";
} else {
    p.style.display = "block";
    s.style.display = "none";
  }
  popin = !popin;
}
 unview = () => {
   p.style.display = "none";
   s.style.display = "block";
 };