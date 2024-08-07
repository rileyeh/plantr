import { Outlet } from 'react-router-dom'
import Header from './Header'

const PlantForm = () => {
  return (
    <>
      <Header />

      <div
        className='flex justify-center items-center min-h-screen'
        style={{ width: '100vw' }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default PlantForm
