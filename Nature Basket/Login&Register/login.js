function openForm() {
    document.getElementById("myForm").style.display ="block"
  document.getElementById("myForm2").style.display = "none";
  document.documentElement.scrollTop = 0;
}
 
function closeForm() {
  document.getElementById("myForm").style.display ="none";
}   
document.getElementById("myForm").style.display ="none"

// part 2
function openForm1() {
    document.getElementById("myForm").style.display ="none"
    document.getElementById("myForm2").style.display ="block";
    document.documentElement.scrollTop = 0;
} 

function closeForm1() {
    document.getElementById("myForm").style.display ="none";
    document.getElementById("myForm2").style.display ="none";
  }
  document.getElementById("myForm2").style.display ="none";