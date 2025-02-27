const express = require('express')
const app = express()

const logger = (req,res,next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method,url,time);
  //precisa do next, se não o borwser fica carregando infinitamente no middleware
  next()
}

//uso de middleware, para escalabilidade 
app.get('/', logger, (req,res) => {
  res.send('Home')
})

//uso de middleware, para escalabilidade 
app.get('/about', logger, (req,res) => {
  res.send('About')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000');
  
})