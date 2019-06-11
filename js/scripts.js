$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#warning-responses").show();
    var warningCount = 0;
    var symptomCount= 0;
    var strategyCount= 0;
    $("input:checkbox[name=warning]:checked").each(function(){
      warningCount +=1;
      var warningMode = $(this).val();
      $('#warning-responses').append(warningMode + "<br>");
    });
    $("#symptoms-responses").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      symptomCount += 1;
      var symptomsMode = $(this).val();
      $('#symptoms-responses').append(symptomsMode + "<br>");
    });
    $("#strategy-responses").show();
    $("input:checkbox[name=strategy]:checked").each(function(){
      strategyCount +=1;
      var warningMode = $(this).val();
      $('#strategy-responses').append(warningMode + "<br>");
    });
debugger;
    if(warningCount >= 3 && symptomCount >= 3){
      // you are stressed and we print stress info
      $("#high-result").show();
      $("#medium-result").hide();
      $("#low-result").hide();

    }else if( warningCount ===2 || warningCount === 1 && symptomCount === 2 || symptomCount === 1){
      // you are good, but check out more stategies
      $("#medium-result").show();
      $("#high-result").hide();
      $("#low-result").hide();
    }else {
      // no prob but be aware!
      $("#low-result").show();
      $("#medium-result").hide();
      $("#high-result").hide();

    }


    $('#stress_survey').hide();
  });
});
