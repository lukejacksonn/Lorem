jQuery.fn.sumLipsum = function (length) {
  
  var length = length-1 || Math.floor(Math.random()*50)+3;
  var lipsum = function() {

    var str = "Lorem";
    var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt? ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var l = lorem.split(" ");
    var word;
    
    for(i = 0; i < length; i = i+1) {
    
      //Select random word from lorem
      word = l[Math.floor(Math.random() * l.length)]; 
      str += " ";
      
      //Append to output, capitalize first letter if necessary
      str += (str.indexOf(".", str.length-2) !== -1 
           || str.indexOf("?", str.length-2) !== -1) 
            ? word[0].toUpperCase()+word.slice(1) 
            : word.toLowerCase();
    }

    //Append full stop to the end of string, strip punctuation if necessary
    str = (str.indexOf(".", str.length-1) !== -1 
        || str.indexOf(",", str.length-1) !== -1 
        || str.indexOf("?", str.length-1) !== -1) 
         ? str.slice(0,-1) + "." 
         : str + ".";
    
    return str;
  }

  //Populate self with lipsum snippit
  return this.text(lipsum());
  
};
