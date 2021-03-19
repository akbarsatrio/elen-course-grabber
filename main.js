var page = require('webpage').create();
page.viewportSize = { width: 1366, height: 768 };
page.open('https://elen.nurulfikri.ac.id/login/index.php', function(){
  page.includeJs('https://code.jquery.com/jquery-3.6.0.slim.js', function(){
    var system = require('system');
    page.evaluate(function(system){
      $('#username').val(system.args[1]);
      $('#password').val(system.args[2]);
      $('#login').submit();
    }, system);
    setInterval(function(){
      page.open("https://elen.nurulfikri.ac.id/my/index.php?mynumber=-2", function(){
        page.evaluate(function(){
          var cList = document.getElementsByClassName('course_list');
          document.write(cList[0].innerHTML);
          document.body.style.background='#FFFFFF';
        });
        page.render('course-list.png');
        phantom.exit();
      });
    }, 5000);
  })
});