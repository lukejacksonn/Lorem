Lorem
=========

A jQuery plugin that generates random 'lorem ipsum' snippets on the fly. When designing/developing web interfaces you sometimes want to model content you don't have (filler). Standardly, you copy snippets of the of an altered Latin text into your code..

```html
<div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>
```

The content makes no sense but for demonstrative purposes it works great. When trying to model dynamic content (say a list of comments).. then copy/pasting becomes hard work and may not give an accurate representation real content would look like. 

This plugin was built to keep your filler realistically dynamic and your code tidy!


USAGE
--------

Using the lorem plugin you can model a div containing a paragraph of filler text fifty words long like so..

```html
<div>
    <p class='lorem-50'></p>
<div>
```  

Lorem targets any element with a class that has the prefix 'lorem-' and populates it with a given amount of random words. The amount of words is defined by the class suffix which in this case is '50'.  

On page load the model above is rendered into something like..

```html
<div>
    <p class='lorem-50'>
        Lorem est quis anim adipisicing mollit dolor culpa est cupidatat do ipsum veniam,
        sint non commodo nisi adipisicing officia amet, esse veniam, duis veniam, non sed
        non esse non dolore ut velit aute sint aute commodo dolore consectetur in voluptate
        labore laborum. Veniam, commodo consequat.
    </p>
</div>
```

The idea being that you can populate your layout with meaningless filler.. not your code! If you want to populate elements without using the 'lorem-' class you can call the plugin directly on any container element..

```javascript
$('p').lorem(50) // Populates all p elements with a random lorem snippet 50 words long
```
If no argument is passed into the function and no 'lorem-' class is attached to the element in question, then the element will be populated with a snippet of arbitrary length (between 3 and 50 words).  


***

DEMO : http://lukejacksonn.com/Lorem
