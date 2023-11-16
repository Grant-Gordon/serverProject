const http = require('http');
const fs = require('fs');
const _ = require('lodash');



const server = http.createServer((req, res) => {
 //lodash
 const num = _.random(0,20);
 console.log(num); 

 const greet = _.once(() =>{
    console.log('hello')
 });
  
    //set header content type
    res.setHeader('Conetne-Type', 'text/html');
  
    let path =  './views/';
  switch(req.url){
    case'/':
        path +='index.html';
        res.statusCode = 200;

        break;
    case'/about':
        path+='about.html';
        res.statusCode = 200;

        break;
    case'/about-me':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
    default:
        path += '404.html';
        res.statusCode = 404;

        break;
  }
  
    //send hmtl fiel
    fs.readFile(path,(err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
           // res.write(data);
	        res.end(data);
        }
    })
});

/*
    res.write('<p>hello ira<P>');
    res.write('<p>hello again ira<P>');
    res.write('<head><link rel="styleseet" href="#"><head>');
*/

server.listen(3000, 'localhost', () =>{
    console.log('listening to requests on port: 3000');
});
