const express = require('express')
const port = 8000;
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(request, response) => {
    response.sendFile('index.html')
});


app.get('/resume', async (request, response) => {
    response.download(path.join(__dirname, "resume/resume.pdf"));
});


app.listen(port, () => {
    console.log(`Listening at Port ${port}`)
})