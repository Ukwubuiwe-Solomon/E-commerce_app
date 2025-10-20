import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center rounded-md gap-2 ring-1 ring-gray-200 px-2 py-1 shadow-md'>
        <Search  className='w-4 h-4 text-gray-500'/>
        <input id='search' placeholder='Search...' className='text-sm outline-0'/>
    </div>
  )
}

export default SearchBar