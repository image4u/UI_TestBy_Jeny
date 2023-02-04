$(document).ready(function() {
    // Search functionality
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#faq-list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    // Expand/contract functionality
    $(".question-header").click(function() {
      $(this).next().slideToggle();
    });
  });
  
// function showFaq(){
//   const element = document.querySelectorAl(".answer")
//   document.getElementsByClassName(".answer").addEventListener("click", function() {
//     document.getElementById("myDiv").classList.add("newClass");
//   });
// }




// const questions = document.querySelectorAll(".question-header");
// console.log(questions )
// questions.forEach(function(item) {
//   item.addEventListener("click", function() {
//     this.nextElementSibling.classList.toggle("show");
//   });
// });
  






// const main = document.querySelectorAll("#mainQuestion");
// console.log(mainQuestion)
// function f1() {
//   let a= document.getElementById("faq-list").style.display;
//   if(a!="none"){
//   document.getElementById("faq-list").style.display="none";
// }else if(a="none"){
//   a = "block";
// }
// }


// $(document).ready(function(){
//   const questions = $(".question-header");
//   console.log(questions);
//   questions.each(function(){
//     $(this).click(function(){
//       $(this).next().toggleClass("show");
//     });
//   });
// });
