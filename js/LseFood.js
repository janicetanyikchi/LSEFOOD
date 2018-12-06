<!-- This is a branch to test out category landing pages -->

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
}

// $("#button").click(function(event){
//   var text= $("#input").val();
//   $("#list").append('<li> + text+ '</li>');
// });

// // Modal
function toggleModal(){
  document.getElementById("about").addEventListener('click',function(){
    document.querySelector(".bg-modal").style.display="flex";
})}

function toggleClose(){
  document.getElementById("close").addEventListener('click',function(){
    document.querySelector(".bg-modal").style.display="none";
})}

// Modal2
function toggleModal2(){
  document.getElementById("suggestions").addEventListener('click',function(){
    document.querySelector(".bg-modal-2").style.display="flex";
})}

function toggleClose2(){
  document.getElementById("close-2").addEventListener('click',function(){
    document.querySelector(".bg-modal-2").style.display="none";
})}

// Dropdown for Homepage sidebar
//
// <style>
// .dropdown-submenu {
//     position: relative;
// }
//
// .dropdown-submenu .dropdown-menu {
//     top: 0;
//     left: 100%;
//     margin-top: 1px;
// }
// </style>
