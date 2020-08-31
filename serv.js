const http = require('http')
const fs = require('fs')
const server = http.createServer( (req, res)=>
{   
    var readstream = undefined
    const url = req.url
    if (url === '/'){
        readstream = fs.createReadStream("./index.html")
        res.writeHead(200, {"Content-type" : "text/html"})
    }else if (url == '/favicon.ico'){
        console.log("requested favicon")
    }
    else{
        readstream = fs.createReadStream("." + url)
    }
    if (readstream){
        readstream.pipe(res)
    }

    // res.write(req.url)
    // res.end()
})

server.listen("8080")