import express from 'express'
import ViteExpress from 'vite-express'
import ctrlFns from './plantController.js'

const app = express()
app.use(express.json())

app.get('/plants', ctrlFns.getAllPlants)
app.patch('/water/:id', ctrlFns.updatePlantWater)
app.patch('/feed/:id', ctrlFns.updatePlantFed)

ViteExpress.listen(app, 4500, () =>
  console.log('Server is listening on port 4500...')
)
