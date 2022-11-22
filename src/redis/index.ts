import {createClient} from "redis";

const redisClient =createClient({
    url:'redis://ctrls:pppoplllkl@127.0.0.1:8411'
});

const runRedis = async function runRedis() : Promise<void>{
    console.log("connecting to redis");
    await redisClient.connect().then(() => console.log("connected to redis"));
}

export {redisClient, runRedis}