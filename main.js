const http = require('http');
const fs = require('fs');
// const url = require('url');

const app = http.createServer(function(request,response){
    let url = request.url;
    console.log(url);
    // let queryData = url.parse(_url, true).query;
    // let title = queryData.id;
    if(url == '/'){
      url = '/index.html'
    }
    if(url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    
    // console.log(__dirname + url);
    // response.end(template);
    response.end(fs.readFileSync(__dirname + url));
   
 
});
app.listen(3000);