import data from '../data/plants.json' assert { type: 'json' }

const plants = data.plants

const ctrlFns = {
  getAllPlants: (req, res) => {
    res.status(200).send(plants)
  },
  updatePlantWater: (req, res) => {
    const { id } = req.params
    const index = plants.findIndex((plant) => +plant.id === +id)
    const plantToUpdate = plants[index]
    plantToUpdate.lastWatered = Date.now()
    res.status(200).send([plants][index])
  },
  updatePlantFed: (req, res) => {
    const { id } = req.params
    const index = plants.findIndex((plant) => +plant.id === +id)
    const plantToUpdate = plants[index]
    plantToUpdate.lastFed = Date.now()
    res.status(200).send([plants][index])
  },
}

export default ctrlFns
