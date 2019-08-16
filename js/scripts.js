function refresh(){
  $(".hide").hide();
  $(".field").val(0);
  $(".field").removeClass("one")
}
function checkErrors(){
  var fields = $(".field").get();
  var hasErrors = 0;
  fields.forEach(function(questionIndex){
    var fieldValue = parseInt($(questionIndex).val());

    if (fieldValue === 0){
      $(questionIndex).addClass("one");
      hasErrors = true;
    }
    else {
      $(questionIndex).removeClass("one")
        console.log(questionIndex);
    }
  });
  return hasErrors;
}

function calculateScore(){
  var fields = $(".field").get();
  var totalScore = 0 ;
  fields.forEach(function(questionIndex){
    var fieldValue = parseInt($(questionIndex).val());
    totalScore = totalScore + fieldValue;
    });
  return totalScore;
}


$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    // var trait = parseInt($("#trait").val());
    // var whyCode = parseInt($("#whyCode").val());
    // var skill = parseInt($("#skill").val());
    // var interest = parseInt($("#interest").val());
    // var laptopPreference = parseInt($("#laptop").val());
    // console.log(trait)
    // console.log(whyCode)
    // console.log(skill)
    // console.log(interest)
    // console.log(laptopPreference)
    //var totalScore = trait + whyCode + skill + interest + laptopPreference
    totalScore = calculateScore();
    console.log(totalScore);
    if(checkErrors()){
      alert("please enter all fields")
    }
    else if (totalScore >= 5 && totalScore < 9){
    $("#selectOne").show();
  } else if (totalScore >=9 && totalScore <14){
    $("#selectTwo").show();
  } else {
    $("#selectThree").show();
  }
});
});
