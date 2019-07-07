var http = require("http")
http.createServer((req,res)=>{
  var url = new URL(`incoming://incoming${req.url}`)
}).listen(process.env.PORT)
