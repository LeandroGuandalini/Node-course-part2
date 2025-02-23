const app = require('express')();
// const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Home Page')
})

app.get('/about', (req,res) => {
  res.status(200).send('About Page')
})


//all lida com todos os comandos (get, post...) mandando a resposta para qualquer um que não seja especificado
app.all('*', (req,res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})