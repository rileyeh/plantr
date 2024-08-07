import { Link } from 'react-router-dom'

const StepThree = () => {
  return (
    <>
      <h1>StepThree</h1>
      <button>
        <Link to='/addplant/two'>Back</Link>
      </button>
      <button>
        <Link to='/'>Add Plant</Link>
      </button>
    </>
  )
}

export default StepThree
