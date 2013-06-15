(function($){

  $.fn.lorem = function(_length) {

		return this.each(function() {

		var _length = $(this).attr('class').match(/lorem-\d+/)[0].split('-')[1] || _length || (Math.floor(Math.random()*50)+3);

		var paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt? ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		  , words = paragraph.split(" ")
		  , word = ""
		  , out = "Lorem"

		var charAtEndOfOut = function (char,step) {
			return out.indexOf(char, out.length-step-1) !== -1
		}
      		    
		    for(var i = 0; i < _length; i = i+1) {
		    
				//Select random word from paragraph
				word = words[Math.floor(Math.random() * words.length)]; 
				out += " ";

				//Append to out, capitalize first letter if necessary
				out += (charAtEndOfOut('.',1) ||  charAtEndOfOut('.',1)) 
				   ?  word[0].toUpperCase()+word.slice(1) 
				   :  word.toLowerCase();
		    }

	    	//Append full stop to the end of string, strip punctuation if necessary
		    out = (charAtEndOfOut('.') || charAtEndOfOut(',')  || charAtEndOfOut('?')) 
		         ? out.slice(0,-1) + "." 
		         : out + ".";

		    $(this).text(out);
		    
		});
	}

	$(function(){
		$("*[class*='lorem-']").lorem();
	});
  
})(jQuery);
