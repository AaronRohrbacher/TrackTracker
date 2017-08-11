$(document).ready(function(){
  $("form#surveyForm").submit(function(event){
    event.preventDefault();
    var ruby = 0;
    var cSharp = 0;
    var java = 0;
    var php = 0;
    var suggestedTrack = null;
    var name = $("input#name").val();
    var name = name.split(" ")[0];
    var rubyImage = "<img src='img/ruby.png' alt='ruby'><img src='img/rails.png' alt='rails'>";
    var cSharpImage = "<img src='img/csharp.png' alt='C Sharp'><img src='img/net.png' alt='.NET'>";
    var javaImage = "<img src='img/java.png' alt='java'><img src='img/android.png' alt='android'>";
    var phpImage = "<img src='img/php.png' alt='php'><img src='img/drupal.png' alt='drupal'>";

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
        var trackImage = rubyImage;
      } else if (cSharp > java && cSharp > php && cSharp > ruby) {
        var suggestedTrack = "C#/.NET";
        var trackImage = cSharpImage;
      } else if (java > php && java > ruby && java > cSharp) {
        var suggestedTrack = "Java";
        var trackImage = javaImage;
      } else if (php > ruby && php > cSharp && php > java) {
        var suggestedTrack = "PHP";
        var trackImage = phpImage;
      } else if (!suggestedTrack) {
        $("#noMatch").slideToggle(2000, function() {
        });
        $("#noMatch").append("<ul><li><img src='img/ruby.png'> Ruby on Rails: "+ruby+" out of 5</li><li><img src='img/csharp.png'> C#/.NET: "+cSharp+" out of 5</li><li><img src='img/php.png' width='100px'> PHP/Drupal: "+php+" out of 5</li><li><img src='img/java.png'> Java/Android: "+java+" out of 5</li></ul>");
      }
      $("#surveyForm").hide();
      if (suggestedTrack){
        $("#trackImages").append(trackImage);
        $("#suggestedTrack").text(suggestedTrack);
        $("#surveyOutput").slideToggle(2000, function() {
        });
      }
      $(".name").text(name);
  } else {
    alert("Please enter your name.")
  }
  });
});
