import 'dotenv/config';

const env = {
    MONGO_DB: process.env.MONGO_DB as string,
}

export default env;