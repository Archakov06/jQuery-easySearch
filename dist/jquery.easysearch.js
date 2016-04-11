/* 
 * jQuery-LightSearch - v1.0 - 2016-04-11
 * https://github.com/Archakov06/jQuery-LightSearch
 * Released under the MIT License
*/

(function( $ ){ 
  $.fn.jSearch = function( options ) {
    
    var defaults = {
			selector: null,
			child: null,
    	minValLength: 3,
			Found: function(elem){},
			NotFound: function(elem){},
			Before: function(t){},
			After: function(t){},
		};
    
		var options = $.extend(defaults, options);
  	var $this = $(this);
    
  	if ( options.selector == null || options.child === null || typeof options.NotFound != "function" || typeof options.Found != "function" || typeof options.After != "function" || typeof options.Before != "function" ) 
    { console.error( 'One of the parameters is incorrect.' ); return false; }
    
    
   	$this.on( 'keyup', function(){
    	
      options.Before($this);
      
      if ( $(this).val().length >= options.minValLength ) {
        console.clear();

        $( options.selector ).find( options.child ).each(function( ){
          if ( this.innerText.toLowerCase().indexOf( $this.val().toLowerCase() ) == -1 ) {
              options.NotFound( this );
          } else {
            options.Found( this );
          }

        });

			}
      
      options.After($this);
      
  	});
    
  };
})( jQuery );
