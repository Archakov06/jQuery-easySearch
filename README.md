# jQuery-easySearch

A jQuery plug-in for filtering elements with user input.

![Example work](http://archakov.im/uploads/search-in-list_480db9c7.gif)

## Usage

#### Example #1: UL
```js
	$('input').jSearch({ 
	    selector  : 'ul',
	    child : 'li div.header',
	    minValLength: 0,
	    Found : function(elem){
	        $(elem).parent().parent().show();
	    },
	    NotFound : function(elem){
	        $(elem).parent().parent().hide();
	    },
	    After : function(t){
	        if (!t.val().length) $('ul li').show();
	    }
	});
```

#### Example #2: Table
```js
	$('input').jSearch({ 
	    selector  : 'table',
	    child : 'tr > td',
	    minValLength: 0,
	    Before: function(){
	    	$('table tr').data('find','');
	    },
	    Found : function(elem){
	    	$(elem).parent().data('find','true');
	        $(elem).parent().show();
	    },
	    NotFound : function(elem){
	    	if (!$(elem).parent().data('find'))
	        $(elem).parent().hide();
	    },
	    After : function(t){
	        if (!t.val().length) $('table tr').show();
	    }
	});
```

## Options

* 	**selector**
	The selector that will occur search for child elements
* 	**child**
	The child element that will be searched
* 	**minValLength**
	The minimum number of characters to search
* 	**onFound**
	The function is called if there is a match
* 	**onNotFound**
	The function is called if there is no match
*	**onBefore**
	Function to call before trigger is called
*	**onAfter**
	Function to call after trigger is called
	

## Contacts
* 	**E-Mail**
	<archakov@gatafan.com>
* 	**Website**
	<http://archakov.im>

## License

Now licensed under the MIT License: <http://deuxhuithuit.mit-license.org>

