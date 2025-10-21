import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-kala'>
      <div className='container flex justify-between items-center pt-35 pb-15'>
        <div>
            <img src="images/Logo.png" alt="Logo" />
            <p className='pt-11 leading-8 text-halka-sada text-lg max-w-108 pb-48'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
            <small className='text-lg text-halka-sada '>@20201 Innovate.All rights reserved.</small>
        </div>
        <div className='grid grid-cols-3 gap-2'>
            <div>
                <h6 className='font-semibold text-2xl text-halka-sada pb-12'>Features</h6>
                <ul className='flex flex-col gap-8 text-halka-sada text-lg'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Benifit</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h6 className='font-semibold text-2xl text-halka-sada pb-12'>Products</h6>
                <ul className='flex flex-col gap-8 text-halka-sada text-lg'>
                    <li>Task Management</li>
                    <li>Company growth</li>
                    <li>Time tracking</li>
                </ul>
            </div>
            <div>
                <h6 className='font-semibold text-2xl text-halka-sada pb-12'>Support</h6>
                <ul className='flex flex-col gap-8 text-halka-sada text-lg'>
                    <li>Customer service</li>
                    <li>Accessibility</li>
                    <li>Time tracking</li>
                </ul>
            </div>
            <div className='flex justify-between gap-4 pt-10'>
            <small className='text-halka-sada text-lg'>Privacy policy</small>
            <small className='text-halka-sada text-lg '>Terms & condition</small>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
