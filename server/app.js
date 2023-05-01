import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import {connectDB} from './src/db/connectDB.js'
import productsRoutes from "./src/routes/products.routes.js"
import bodyParser from "body-parser";

dotenv.config()

const app = express()
connectDB()

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// app.use(normalizeProductIds)

app.use('/products', productsRoutes)

app.get('/', (req, res) => {
    res.status(200).json({message: 'hello from backend'})
})

app.listen(8080, () => console.log('Server has started on port 8080'))