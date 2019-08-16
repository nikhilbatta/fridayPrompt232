function refresh(){
  $(".hide").hide();
  $(".field").val(0);
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var trait = parseInt($("#trait").val());
    var whyCode = parseInt($("#whyCode").val());
    var skill = parseInt($("#skill").val());
    var interest = parseInt($("#interest").val());
    var laptopPreference = parseInt($("#laptop").val());
    // console.log(trait)
    // console.log(whyCode)
    // console.log(skill)
    // console.log(interest)
    // console.log(laptopPreference)
    var totalScore = trait + whyCode + skill + interest + laptopPreference
    if(totalScore < 5){
      alert("Please finish the quiz")
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
