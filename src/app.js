import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'


const app = express()

mongoose.connect('mongodb+srv://redfox:redfox@pokemongo-7iix2.gcp.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true,}
)

app.use(cors())
app.use(express.json())
app.use(routes)

export default app;