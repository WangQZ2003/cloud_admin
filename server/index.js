// const http =request("http")
import http from "http"
const port = 7777

const server = http.createServer((req,res)=>{
    res.end(
        JSON.stringify([
            {
                id:1,
                name:"jack"
            },
            {
                id:2,
                name:"rose"
            }
        ])
        )
})

server.listen(port)