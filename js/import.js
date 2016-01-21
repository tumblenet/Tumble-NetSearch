$( document ).ready(function() {
      $( "#import" ).each(function( index ) {
            var url = $( this ).attr( "title" );
            $( this ).load( url );
      });
            
  });
