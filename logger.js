const logger = (req,res,next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method,url,time);
  //precisa do next, se não o borwser fica carregando infinitamente no middleware
  next()
}

module.exports = logger