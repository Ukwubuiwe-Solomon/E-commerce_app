import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-2'>
        {/* LEFT */}
        <Link href="/" className='flex items-center'>
         <Image src="/logo.png" alt='TrendSolo' width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />
            <p className='text-md font-medium tracking-wider hidden md:block'>TRENDSOLO.</p>
        </Link>
         {/* RIGHT */}
         <div className=' flex items-center gap-4 '>
         <SearchBar />
         <Link href="/">
          <Home  className='w-4 h-4 text-gray-600'/>
         </Link>
         <Bell  className='w-4 h-4 text-gray-600' />
         <ShoppingCart  className='w-4 h-4 text-gray-600'/>
         <Link href="/login">
         Sign in
         </Link>
         </div>
    </nav>
  )
}

export default Navbar