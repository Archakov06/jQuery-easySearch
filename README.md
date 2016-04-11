# jQuery-LightSearch

A jQuery plug-in for filtering elements with user input.

## Demo

* <http://archakov.im/examples/jquery-lightsearch>

## Usage

#### Example #1
```js
$('input').jSearch({ 
    selector  : 'table',
    child : 'td',
    Found : function(elem, event){
    	$(elem).show();
    },
    NotFound : function(elem, event){
    	$(elem).hide();
    }
});
```

#### Example #2
```js
$('input').jSearch({ 
	selector  : 'table',
	child : 'td',
	minValLength: 2,
	Found : function(elem, event){
  		$(elem).show();
	},
	NotFound : function(elem, event){
  		$(elem).hide();
	},
	Before : function(t){
  		alert('before callback!');
	},
	After : function(t){
		alert('after callback!');
  		//if (!t.val().length) $('table td').show();
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
	

## License

Now licensed under the MIT License: <http://deuxhuithuit.mit-license.org>

