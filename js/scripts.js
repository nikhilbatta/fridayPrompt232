$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var trait = parseInt($("#trait").val());
    var whyCode = parseInt($("#whyCode").val());
    var skill = parseInt($("#skill").val());
    var interest = parseInt($("#interest").val());
    var laptopPreference = parseInt($("#laptop").val());
    console.log(trait)
    console.log(whyCode)
    console.log(skill)
    console.log(interest)
    console.log(laptopPreference)
  })
})
