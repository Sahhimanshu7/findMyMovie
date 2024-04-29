import { Link } from "react-router-dom"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-12 py-6">
      <div>
        <Link to="/">
          <h1 className="text-orange-500 md:text-4xl text-3xl">findMyMovie</h1>
        </Link>
      </div>
      <div className="flex space-x-8">
        <button className="text-white flex text-xl items-center">
          <p className="md:block hidden">myMovies</p>
          <FavoriteBorderIcon />
        </button>
        <button className="flex text-xl">
          <p className="md:block hidden">Log In</p>
          <AccountCircleIcon />
        </button>
      </div>
    </header>
  )
}

export default Header