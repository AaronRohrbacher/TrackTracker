$(document).ready(function(){
  $("form#surveyForm").submit(function(event){
    event.preventDefault();
    var ruby = 0;
    var cSharp = 0;
    var java = 0;
    var php = 0;
    alert("hello!");
    var collectData = function(surveyResponse) {
      if (surveyResponse === "ruby") {
        ruby ++;
      } else if (surveyResponse === "cSharp") {
        cSharp ++;
      }
    }

    var workType = $("input:radio[name=workType]:checked").val();
    collectData(workType);

    if (ruby > cSharp && ruby > java && ruby > php){
      var suggestedTrack = "Ruby on Rails"
    } else if (cSharp > java && cSharp > php && cSharp > ruby) {
      var suggestedTrack = "C#/.NET"
    }
    alert(suggestedTrack);
    $("#suggestedTrack").text(suggestedTrack);

  });
});
