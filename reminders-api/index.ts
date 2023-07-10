/**
 * tsc --init
 * npm i typescript @types/node @types/express
 * 
 */
import express from 'express';
import reminders from './routers/reminders';
import morgan from 'morgan'; //npm i --save @types/debug
import Debug from 'debug'; // npm i --save @types/morgan
const DatabaseDebugger = Debug('app:database');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use('/reminders', reminders);


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, 
    () => DatabaseDebugger('Server ready++++'));
