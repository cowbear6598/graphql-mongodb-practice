import {connect} from 'mongoose'

const runMongo = async function runMongo(): Promise<void> {
    console.log("connecting to mongo");

    const uri = "mongodb://nftGames:nftGamesCtrls@127.0.0.1:27017/nft_games";

    await connect(uri).then((mongo) => console.log("connected to mongo"));
}

export {runMongo}