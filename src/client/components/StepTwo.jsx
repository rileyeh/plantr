import { Link } from 'react-router-dom'

const StepTwo = () => {
  return (
    <>
      <h1>StepTwo</h1>
      <button>
        <Link to='/addplant'>Back</Link>
      </button>
      <button>
        <Link to='/addplant/three'>Continue</Link>
      </button>
    </>
  )
}

export default StepTwo
