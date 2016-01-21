$( document ).ready(function() {
      $( "#import" ).each(function( i ) {
            console.log('i: ' + i);
            var url = $( this ).attr( "title" );
             console.log('url: ' + url);
            $( this ).load( url );
      });
            
  });
