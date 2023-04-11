// Importing the Express module.
import express from 'express';
import fs from 'fs'

// Creating an instance of the express application.
const app = express();

app.use(express.static('./public'))

app.get('/', (req, res)=>
{
    fs.readFile('./public/html/index.html', 'utf8', 
    (err, html) => {
        if(err)
        {
            res.status(500).send('There was an error: ' + err)
            return 
        }
        
        console.log("Sending page...")
        res.send(html)
        console.log("Page sent!")
    })
})



/* Making a GET request on the root route and sending 'Hello World!' 
as the response to the request. */
//arrow functions: una función que
app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
  // crea una respuesta
})

// Listening for incoming requests on port 3000.
app.listen(5001, () => {
  console.log('Example app listening on port 5001!');
})