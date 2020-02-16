const expres = require('express')
const app = expres()
app.use(expres.static('public'));
app.use('/css',expres.static(__dirname+'/public/css'))
app.use('/js',expres.static(__dirname+'/public/js'))
app.use('/image',expres.static(__dirname+'/public/image'))
const server = app.listen(9005,function(){
    const port = server.address().port ;
    console.log('server start at ',port)
})