import express from 'express';
import routes from './planets.js';

const app = express();

// get data from req.body
app.use(express.json())

app.use('/planets', routes);

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));