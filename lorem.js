(function($){

    $.fn.lorem = function(_length) {

        //Define Lorem Paragraph and split into words
        var paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt? ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          , words = paragraph.split(" ")

        return this.each(function() {

            //Establish word limit
            var limit = _length 
            || ($(this).attr('class') ? $(this).attr('class').match(/lorem-\d+/)[0].split('-')[1] : null) 
            || (Math.floor(Math.random()*50)+3);

            //Setup out string, prepare for next word
            var out = "Lorem", word = "";

            //Helper for finding character at position x from the end of out
            var charAtEndOfOut = function (char,step) {
            	return out.indexOf(char, out.length-step-1) !== -1
            }
      		
            //Construct snippet of length limit  
            for(var i = 1; i < limit; i = i+1) {
		    
                //Select random word from paragraph
                word = words[Math.floor(Math.random() * words.length)]; 
                out += " ";

                //Append to out, capitalize first letter if necessary
                out += (charAtEndOfOut('.',1) ||  charAtEndOfOut('?',1)) 
                ?  word[0].toUpperCase()+word.slice(1) 
                :  word.toLowerCase();
            }

            //Append full stop to the end of out string, strip punctuation if necessary
            out = (charAtEndOfOut(',') || charAtEndOfOut('.')  || charAtEndOfOut('?')) 
            ? out.slice(0,-1) + "." 
            : out + ".";

            //Set self text to out
            $(this).text(out);
		    
        });
    }

    //Target all 'lorem-' classes on load
    $(function(){ $("*[class*='lorem-']").lorem(); });
  
})(jQuery);
