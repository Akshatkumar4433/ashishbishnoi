const express = require('express')
const port = 8000;
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(request, response) => {
    response.sendFile('index.html')
});

/*
app.get('/resume', async (request, response) => {
    response.download(path.join(__dirname, "resume/resume.pdf"));
});
*/

app.get('/resume' , (request, response,next) => {
    const options = {
        root: path.join(__dirname, 'resume'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      };
      
      var fileName = 'resume.pdf';
      response.sendFile(fileName, options, function (err) {
        if (err) {
          console.log('err', err);
      
          next(err);
        }
      });
})


app.listen(port, () => {
    console.log(`Listening at Port ${port}`)
})