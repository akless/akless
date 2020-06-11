
( async () => {

  const url = 'http://localhost:8080/api/v1/items';
  let response;

  // via XMLHttpRequest-Objekt
  const request = new XMLHttpRequest();
  request.open( 'GET', url, true );
  request.setRequestHeader( 'Content-Type', 'application/json' );
  request.onreadystatechange = () => {
    if ( request.readyState === 4 )
      request.status >= 200 && request.status < 300 ? success( request.responseText ) : error( request );
  };
  request.send();

  function success( response ) {
    console.log( JSON.parse( response ) );
  }

  function error( error ) {
    console.log( 'Error!', error );
  }

  // via fetch API und Promise
  fetch( url )
    .then( response => response.json() )
    .then( data => console.log( data ) );

  // via fetch API und async await
  response = await fetch( url, { method: 'GET' } );
  response = await response.json();
  console.log( response );

  // via ccm und async await
  response = await ccm.load( { url: url, method: 'GET' } );
  console.log( response );

  // via jQuery
  jQuery.ajax( url ).done( response => console.log( response ) );

} )();