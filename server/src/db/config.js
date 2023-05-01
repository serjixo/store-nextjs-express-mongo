import dotenv from 'dotenv'

dotenv.config()

const config = {
    mongoUri: process.env.MONGODB_URI,
}

export default config