(function($) {
  $.fn.lorem = function(_length) {
    return this.each(function() {

      // Amount of words required
      var _length = _length || $(this).data('lorem') || (Math.floor(Math.random() * 50) + 3);

      // Helper functions
      var charAtEndOfOut = function(char, step) {
        return out.indexOf(char, out.length - step - 1) !== -1;
      }
      var randomWord = function() {
        return words[Math.floor(Math.random() * (words.length - 1))];
      }
      var capitalize = function(word) {
        return word[0].toUpperCase() + word.slice(1)
      }

      // Dictionary of words
      var paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est laborum.",
        words = paragraph.split(" "),
        word = "",
        out = capitalize(randomWord());

      for (var i = 1; i < _length; i = i + 1) {
        //Select random word from paragraph
        word = randomWord();
        out += " ";

        //Append to out, capitalize first letter if necessary
        out += (charAtEndOfOut('.', 1) || charAtEndOfOut('?', 1)) ? capitalize(word) : word.toLowerCase();
      }

      //Append full stop to the end of string, strip punctuation if necessary
      out = (charAtEndOfOut('.') || charAtEndOfOut(',') || charAtEndOfOut('?')) ? out.slice(0, -1) + "." : out + ".";

      if ($(this).is('input'))
        $(this).val(out);
      else
        $(this).text(out);

    });
  }

  $("[data-lorem]").lorem();

})(jQuery);
