var page = require('webpage').create();
var today = new Date();
page.viewportSize = { width: 1366, height: 768 };
page.open('https://elen.nurulfikri.ac.id/login/index.php', function(){
  var system = require('system');
  page.evaluate(function(system) {
    document.getElementById('username').value = system.args[1];
    document.getElementById('password').value =system.args[2];
    document.getElementById('login').submit();
  }, system);
  setInterval(function(){
    page.open("https://elen.nurulfikri.ac.id/my/index.php?mynumber=-2", function(){
      page.evaluate(function(){
        var cList = document.getElementsByClassName('course_list');
        document.write(cList[0].innerHTML);
        document.body.style.background='#FFFFFF';
      });
      page.render('course-list-['+today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear()+'].png');
      phantom.exit();
    });
  }, 5000);
});