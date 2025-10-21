import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import PrimaryBtn from '../../Utility/PrimaryBtn'

const Navbar = () => {
  return (
    <nav className=' pt-2.5 bg-primary'>
      <div className='container flex justify-between items-center'>

      
      <div>
        <a href="">
        <img src="images/Logo.png" alt="Logo" />
        </a>
      </div>
      <div>
        <ul className='flex flex-row gap-10 text-white font-semibold'>
          <li>
            <a href="#" className="inline-flex items-center gap-1">
              <span>Home</span>
              <IoIosArrowDown aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-1">
              <span>About</span>
              <IoIosArrowDown aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-1">
              <span>Service</span>
              <IoIosArrowDown aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-1">
              <span>Portfolio</span>
              <IoIosArrowDown aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-1">
              <span>Price</span>
              <IoIosArrowDown aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex items-center gap-1">
              <span>Blog</span>
              <IoIosArrowDown aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <PrimaryBtn lakha="Contact Us"/>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
