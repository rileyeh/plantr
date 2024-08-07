import axios from 'axios'

const initialState = {
  loading: false,
  plants: [],
}

const GET_PLANTS = 'GET_PLANTS'
const PENDING = 'PENDING'

export const getPlants = async (dispatch) => {
  dispatch({ type: PENDING })
  let plants = await axios.get('/plants').then((res) => res.data)
  dispatch({ type: GET_PLANTS, payload: plants })
}

export default function plantReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true }
    case GET_PLANTS:
      return { loading: false, plants: action.payload }
    default:
      return state
  }
}
