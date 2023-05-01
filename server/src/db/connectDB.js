import mongoose from 'mongoose'
import config from './config.js'

let connection = null
export const connectDB = async () => {
    if (connection) {
        return connection
    }
    try {
        connection = await mongoose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to MongoDB')
        return connection
    } catch (error) {
        console.error(`Failed to connect to MongoDB: ${error}`)
        throw error
    }
}

