import express from 'express';
import { config } from 'dotenv';
config({override: true, debug: true, encoding: "UTF-8", quiet: true});


const app = express();

if(!process.env.PORT) throw new Error("Port number not defined.");

const port: number = Number(process.env.PORT) ?? 0;

app.listen(port, () => console.log(`Server Started at port ${port}`))

