import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MyPlants from './components/MyPlants'
import PlantForm from './components/PlantForm'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'

import axios from 'axios'

const Router = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <MyPlants />,
      loader: async () => {
        let res = await axios.get('/plants')
        return res.data
      },
    },
    {
      path: 'addplant',
      element: <PlantForm />,
      children: [
        {
          index: true,
          element: <StepOne />,
        },
        {
          path: 'two',
          element: <StepTwo />,
        },
        {
          path: 'three',
          element: <StepThree />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default Router
