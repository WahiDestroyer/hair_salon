import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-kala'>
      <div className='container px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-start lg:items-center pt-16 lg:pt-35 pb-8 lg:pb-15'>
        <div className='w-full lg:w-auto mb-12 lg:mb-0'>
            <img src="images/Logo.png" alt="Logo" className='max-w-[200px] lg:max-w-none'/>
            <p className='pt-8 lg:pt-11 leading-7 lg:leading-8 text-halka-sada text-base lg:text-lg max-w-[90%] lg:max-w-108 pb-8 lg:pb-48'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
            <small className='block text-base lg:text-lg text-halka-sada'>@20201 Innovate.All rights reserved.</small>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-2 w-full lg:w-auto'>
            <div className='mb-8 lg:mb-0'>
                <h6 className='font-semibold text-xl lg:text-2xl text-halka-sada pb-6 lg:pb-12'>Features</h6>
                <ul className='flex flex-col gap-4 lg:gap-8 text-halka-sada text-base lg:text-lg'>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Benifit</a></li>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Blog</a></li>
                </ul>
            </div>
            <div className='mb-8 lg:mb-0'>
                <h6 className='font-semibold text-xl lg:text-2xl text-halka-sada pb-6 lg:pb-12'>Products</h6>
                <ul className='flex flex-col gap-4 lg:gap-8 text-halka-sada text-base lg:text-lg'>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Task Management</a></li>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Company growth</a></li>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Time tracking</a></li>
                </ul>
            </div>
            <div className='mb-8 lg:mb-0'>
                <h6 className='font-semibold text-xl lg:text-2xl text-halka-sada pb-6 lg:pb-12'>Support</h6>
                <ul className='flex flex-col gap-4 lg:gap-8 text-halka-sada text-base lg:text-lg'>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Customer service</a></li>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Accessibility</a></li>
                    <li><a href="#" className="hover:text-[#F7D38A] transition-colors">Time tracking</a></li>
                </ul>
            </div>
            <div className='col-span-full flex flex-col sm:flex-row justify-between gap-4 pt-6 lg:pt-10 border-t border-gray-700 mt-4'>
                <small className='text-halka-sada text-base lg:text-lg hover:text-[#F7D38A] transition-colors cursor-pointer'>Privacy policy</small>
                <small className='text-halka-sada text-base lg:text-lg hover:text-[#F7D38A] transition-colors cursor-pointer'>Terms & condition</small>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
