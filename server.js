const http =require('http')   
const fs = require('fs')    
const port = 3000

const server = http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/html'})
    fs.readFile('GeoLoca.html', function(error, data) {
        if(error){                        
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.download('ckn.jpg')
            res.write('C H I C K E N S C R A T C H'+ data)
        }
        res.end()
    })
   })

server.listen(port,function(error){
    if(error){
        console.log('something went wrong ', error)
    } else{
        console.log(`works on port ${port}`)
    }
})
