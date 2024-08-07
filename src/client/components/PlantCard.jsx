import images from '../assets/imagesIndex'
import wateringCan from '../assets/wateringCan.png'
import leaf from '../assets/leaf.png'
import { DateTime } from 'luxon'
import axios from 'axios'

const formatDate = (ms) => DateTime.fromMillis(ms).toFormat('EEEE, LLLL d')

const PlantCard = ({ plant }) => {
  const imageUrl = images[plant.imageUrl]
  const formattedLastWatered = formatDate(plant.lastWatered)
  const formattedLastFed = formatDate(plant.lastFed)

  const waterPlant = () => {
    axios.patch(`/water/${plant.id}`).then((res) => console.log(res.data))
  }

  return (
    <div className='bg-[#C7D66D] rounded-xl p-4 flex h-64'>
      <img
        src={imageUrl}
        alt={plant.name}
        className='w-1/3 rounded-xl object-cover'
      />
      <div className='w-2/3 p-4 text-[#232323] flex flex-col justify-between'>
        <div>
          <h2 className='text-xl font-bold'>{plant.name}</h2>
          <p className='italic'>{plant.species}</p>
        </div>
        <div>
          <p className='mt-2'>Last watered: {formattedLastWatered}</p>
          <p>Last fed: {formattedLastFed}</p>
        </div>
      </div>
      <div className='flex flex-col justify-between ml-4'>
        <button
          onClick={waterPlant}
          className='bg-[#5D6337] text-white rounded-xl px-4 py-2 mt-2 min-w-full text-sm'
        >
          <img src={wateringCan} alt='watering can' />
          <p>Water</p>
        </button>
        <button className='bg-[#5D6337] text-white rounded-xl px-4 py-2 mt-2 min-w-full text-sm'>
          <img src={leaf} alt='leaf' />
          <p>Feed</p>
        </button>
      </div>
    </div>
  )
}

export default PlantCard
