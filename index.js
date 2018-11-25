import app from './app';
var port = process.env.port || 3977;

app.listen(port, function() {
  console.log("el servidor esta escuchando en el puerto " + port);
});