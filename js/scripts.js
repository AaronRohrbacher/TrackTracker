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
      } else if (surveyResponse === "java") {
        java ++;
      } else if (surveyResponse === "php") {
        php++;
      }
    }

    var workType = $("input:radio[name=workType]:checked").val();
    collectData(workType);
    var appType = $("input:radio[name=appType]:checked").val();
    collectData(appType);
    var proType = $("input:radio[name=proType]:checked").val();
    collectData(proType);
    var softwareType = $("input:radio[name=softwareType]:checked").val();
    collectData(softwareType);
    var conType = $("input:radio[name=conType]:checked").val();
    collectData(conType);

    if (ruby > cSharp && ruby > java && ruby > php){
      var suggestedTrack = "Ruby on Rails"
    } else if (cSharp > java && cSharp > php && cSharp > ruby) {
      var suggestedTrack = "C#/.NET"
    } else if (java > php && java > ruby && java > cSharp) {
      var suggestedTrack = "Java"
    } else if (php > ruby && php > cSharp && php > java) {
      var suggestedTrack = "PHP"
    }
    alert(suggestedTrack);
    $("#suggestedTrack").text(suggestedTrack);

  });
});
