/* eslint-disable turbo/no-undeclared-env-vars */
import express from 'express';

const app = express();
const port = process.env.PORT || 4000

app.get('/', (_req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log('Server listening at port 3000')
})