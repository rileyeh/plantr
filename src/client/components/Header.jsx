import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#5D6337] p-4 flex justify-between items-center'>
      <h1 className='text-3xl font-bold text-[#C7D66D]'>Plantr</h1>
      <nav className='flex space-x-4'>
        <Link to='/' className='text-[#C7D66D] hover:text-white'>
          My Plants
        </Link>
        <Link to='/addplant' className='text-[#C7D66D] hover:text-white'>
          Add a Plant
        </Link>
      </nav>
    </header>
  )
}

export default Header
