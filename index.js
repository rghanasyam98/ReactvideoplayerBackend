// import json-server
const jsonServer=require('json-server');

// create server
const server=jsonServer.create()

// create path to db.json
const router=jsonServer.router('db.json')

// middlewares to convert js to json 
const middleware=jsonServer.defaults()

// connect middleware and router to server
server.use(middleware)
server.use(router)

// by default this json server runs in port 3000
// so need to change the port to another
// 6000 or another free port when hosted to avoid issue
const port=5000 || process.env.PORT


// explicitly telling the server to listen to port(6000)
server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})

