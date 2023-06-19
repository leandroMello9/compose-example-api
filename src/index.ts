import express, { Request, Response } from 'express';
import { connect } from 'mongoose';


const app = express();

connect(
    "mongodb://leo:leo@mongo/?authMechanism=DEFAULT"
).then(sucess => {
    console.log("Sucesso ao connectar ao banco")
}).catch(err => {
    console.log("Erro ao connectar no banco" + err )
});

app.use(express.json());

app.get("/hello", (request: Request, response: Response) => {
    return response.status(201).json({
        ok: "Hello World"
    })
})

app.listen(3000, () => {
    console.log("Server is running in port 3000")
})