import { Link } from 'react-router-dom'

const StepOne = () => {
  return (
    <>
      <h1>StepOne</h1>
      <button>
        <Link to='/addplant/two'>Continue</Link>
      </button>
    </>
  )
}

export default StepOne
