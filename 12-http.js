const http =require('http');

const server = http.createServer((req,res)=>{
if(req.url=== '/'){
    res.end ('Welcome to Anant Website')
}
if(req.url ==='/about'){
    res.end('History of your webpage')
}
res.end(`
<h1>oops!<h1>
<p> we can't find page you are looking for</p>
<a href ="/">back home</a>
`)
})
server.listen(5000)