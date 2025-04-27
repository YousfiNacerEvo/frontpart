import Link from 'next/link'
import React from 'react'

export default function Nav() {


  return (
    <nav className='px-[100px] py-[50px] flex justify-between items-center'>
      <div className="log">
        <h1 className='text-[40px] font-bold'>Logo</h1>
      </div>
      <ul className='flex gap-[50px]'>
        <li>
          <Link href="/" className='text-[20px] font-bold'>Home</Link>
        </li>
        
        <li>
          <Link href="/newBlog" className='text-[20px] font-bold bg-red-600 rounded-[7px] p-3'>NewBlog</Link>
        </li>
      </ul>
    </nav>
  )
}
