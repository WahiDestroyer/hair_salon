import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import PrimaryBtn from '../../Utility/PrimaryBtn'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='pt-2.5 bg-primary relative'>
      <div className='container flex justify-between items-center py-4'>
        <div>
          <a href="">
            <img src="images/Logo.png" alt="Logo" className="max-h-12 w-auto" />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className='flex flex-row gap-10 text-white font-semibold'>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Home</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>About</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Service</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Portfolio</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Price</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Blog</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden lg:block">
          <PrimaryBtn lakha="Contact Us"/>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-primary transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className='flex flex-col gap-4 text-white font-semibold p-6'>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Home</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>About</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Service</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Portfolio</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Price</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#F7D38A] transition-colors">
                <span>Blog</span>
                <IoIosArrowDown aria-hidden="true" />
              </a>
            </li>
            <li className="mt-4">
              <PrimaryBtn lakha="Contact Us"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
