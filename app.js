//. app.js
var express = require( 'express' ),
    iconv = require( 'iconv-lite' ),
    app = express();

//. EJS の設定
var ejs = require( 'ejs' ); 
app.set( 'views', __dirname + '/views' );  //. ejs ファイルが views フォルダにあることを指定
app.set( 'view engine', 'ejs' );


app.get( '/', function( req, res ){
  Object.keys( req.headers ).forEach( function( key ){
    req.headers[key] = iconv.decode( req.headers[key], 'utf-8' );
  });
  console.log( req.headers );
  res.render( 'index', { headers: req.headers } );               //. index.ejs を使って表示する
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
