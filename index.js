import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const hostname = '127.0.0.1';
const port = 8000;

app.use(express.static('public'));

app.get('(/home)?', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/handling.html')
})

app.listen(port, () => {
    console.log('Server running at '+ hostname + ':' + port)
})
