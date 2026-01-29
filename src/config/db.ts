import mongoose from 'mongoose';
import env from './env';
const DB_LINK = env.MONGO_DB;

async function connectDB () {
    try {
        await mongoose.connect(DB_LINK);
        console.log('db connected')
    } catch (err) {
        console.log('something went wrong: ', err)
    }
}

export default connectDB;