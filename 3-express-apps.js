const express = require('express');
const path = require('path');

const app = express();

//setup do static (um arquivo que o servidor não precisa modificar) e middleware
app.use(express.static('./public'))


// app.get('/', (req,res) => {
//   res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*', (req,res) => {
  res.status(404).send('Resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})