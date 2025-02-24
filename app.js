const express = require('express')
const app = express()
const logger = require('./logger')

//coloca o middleware global, sem precisar ficar escrevendo em cada uma o logger (bom para algo que precisa estar presente em todas)
//o use só funciona para baixo, se tiver alguma função acima ele não ira entrar
//se passar um caminho, só será aplicado nos que começarem com esse path
app.use('/api',logger)

app.get('/', (req,res) => {
  res.send('Home')
})

app.get('/about', (req,res) => {
  res.send('About')
})

app.get('/api/products', (req,res) => {
  res.send('Products')
})

app.get('/api/items', (req,res) => {
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
  
})