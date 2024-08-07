import { useLoaderData } from 'react-router-dom'
import PlantCard from './PlantCard'
import Header from './Header'

const MyPlants = () => {
  const plants = useLoaderData()

  return (
    <>
      <Header />

      <div
        className='flex justify-center items-center min-h-screen'
        style={{ width: '100vw' }}
      >
        <div className='mt-8 space-y-6 mx-auto w-192'>
          {plants.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MyPlants
