import * as express from "express";
import {runMongo} from "../mongo";
import {runRedis} from "../redis";

const app = express();
const port = 8080;

const startServer = () => {
    app.set('trust proxy', true);

    app.listen(port, () =>{
        runRedis().catch(e => console.log(`redis error: ${e.message}`));
        runMongo().catch(e => console.log(`mongo error: ${e.message}`));

        console.log(`server is running on ${port}`);
    });
}

export {app, startServer};