var http = require ("http");


http.createServer(function(req, res){
// var p_url = url.parse(req.url, true);
// console.log(p_url.pathname)
// switch (p_url. ) {
// 	case "/update/":


// 	case "/data/":
	

// 	break;
// }
	console.log('got a response');
	res.write('hi')
	res.end();

}).listen("8080");