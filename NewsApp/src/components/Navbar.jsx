import React from 'react'
import { Link } from 'react-router-dom'

const navbar= ()=> {
    return (
      <div>
  <nav className='bg-[url("../images/Navbar.jpg")] p-5 border border-grey-200 rounded-lg shadow-md'>
    <div className="container mx-auto flex justify-between">
      <div>
      <Link className="text-white hover:text-blue-200 text-2xl font-bold" to="/general">Google news</Link>
      </div>
      <button className="text-gray-300 hover:text-gray-500" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="text-red-500"></span>
      </button>
      <div className="text-2 mx-auto" id="navbarSupportedContent">
        <ul className="flex mx-2">
          <li className="mr-4">
            <Link className="text-gray-300 hover:text-gray-500" aria-current="page" to="/general">Home</Link>
          </li>
          <li className="mr-4"><Link className="text-gray-300 hover:text-gray-500" to="/entertainment">Entertainment</Link></li>
          <li className="mr-4"><Link className="text-gray-300 hover:text-gray-500" to="/general">General</Link></li>
          <li className="mr-4"><Link className="text-gray-300 hover:text-gray-500" to="/health">Health</Link></li>
          <li className="mr-4"><Link className="text-gray-300 hover:text-gray-500" to="/science">Science</Link></li>
          <li className="mr-4"><Link className="text-gray-300 hover:text-gray-500" to="/technology">Technology</Link></li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    )
}

export default navbar
