const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    /*
        // res.setHeader('Content-Type', 'text/plain')
        // res.setHeader('Content-Type', 'application/json')
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 200
        res.statusMessage = 'OK'

        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><h1>Hello from Nodejs server</h1></body>')
        res.write('</html>')
        res.end()

        */

    fs.readFile('index.html', function(error, file) {

        if (error) {
            res.setHeader('Content-Type', 'text/plain')
            res.statusCode = 404
            res.statusMessage = 'Not Found'
            res.end('Dosya bulunamadı.')
        } else {
            res.setHeader('Content-Type', 'text/html')
            res.statusCode = 200
            res.statusMessage = 'Ok'
            res.end(file)
        }

    })

})