$(document).ready(function(){
  $("form#surveyForm").submit(function(event){
    event.preventDefault();
    var ruby = 0;
    var cSharp = 0;
    var java = 0;
    var php = 0;
    var suggestedTrack = null;
    var name = $("input#name").val();
    var name = name.split(" ")[0];;

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

    if (name) {
      if (ruby > cSharp && ruby > java && ruby > php){
        var suggestedTrack = "Ruby on Rails";
      } else if (cSharp > java && cSharp > php && cSharp > ruby) {
        var suggestedTrack = "C#/.NET";
      } else if (java > php && java > ruby && java > cSharp) {
        var suggestedTrack = "Java";
      } else if (php > ruby && php > cSharp && php > java) {
        var suggestedTrack = "PHP";
      } else if (!suggestedTrack) {
        $("#noMatch").slideToggle(2000, function() {
        });
        $("#noMatch").append("<ul><li>Ruby on Rails: "+ruby+" out of 5</li><li>C#/.NET: "+cSharp+" out of 5</li><li>PHP: "+php+" out of 5</li><li>Java/Android: "+java+" out of 5</li></ul>");
      }
      $("#surveyForm").hide();
      if (suggestedTrack){
        $("#suggestedTrack").text(suggestedTrack);
        $("#surveyOutput").slideToggle(2000, function() {
        });
      }
      $(".name").text(name+", ");
  } else {
    alert("Please enter your name.")
  }
  });
});
