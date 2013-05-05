jQuery.fn.sumLipsum = function (length) {
  
  var length = length-1 || Math.floor(Math.random()*50)+3;

  var lipsum = function() {

    var str = "Lorem";
    var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var l = lorem.split(" ");
    
    for(i = 0; i < length; i = i+1) {
    
        var word = l[Math.floor(Math.random()*l.length)];
        if(str.indexOf(".", str.length-1) !== -1) {
          str +=  " " + word[0].toUpperCase()+word.slice(1);
        }
        else { str +=  " " + word.toLowerCase(); }
    }
    str += ".";
    return str;
  }

  return this.each(function () {
    $(this).text(lipsum());
  });

};
