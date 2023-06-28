import React from 'react'
import { Link } from 'react-router-dom'

const navbar= ()=> {
    return (
      <nav className='flex flex-col border bg-[#1f1f1f] border-transparent rounded-lg drop-shadow-sm'>
  <div className='bg-[url("../images/Navbar.jpg")] p-3 border border-transparent rounded-lg shadow-md'>
    <div className="container mx-auto flex justify-between">
      <div className='border-0 p-1 rounded-lg drop-shadow-lg backdrop-blur-sm'>
      <Link className=" text-white hover:text-blue-200 text-2xl font-bold" to="/general">NewsApp</Link>
      </div>
      <button className="text-gray-300 hover:text-gray-500" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="text-red-500"></span>
      </button>
      
    </div>
  </div>
  <div className='text-white'>
      <div className="w-full text-sm font-bold mx-auto" id="navbarSupportedContent">
        <ul className="flex mx-2 border-0 p-2 rounded-lg drop-shadow-lg backdrop-blur-sm">
          <li className="mr-4">
            <Link className="text-white hover:text-gray-400" aria-current="page" to="/">Home</Link>
          </li>
          <li className="mr-4"><Link className=" hover:text-gray-400" to="/entertainment">Entertainment</Link></li>
          <li className="mr-4"><Link className=" hover:text-gray-400" to="/general">General</Link></li>
          <li className="mr-4"><Link className=" hover:text-gray-400" to="/health">Health</Link></li>
          <li className="mr-4"><Link className=" hover:text-gray-400" to="/science">Science</Link></li>
          <li className="mr-4"><Link className=" hover:text-gray-400" to="/technology">Technology</Link></li>
        </ul>
      </div>
  </div>
</nav>

    )
}

export default navbar
