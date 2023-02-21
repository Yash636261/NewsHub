import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/general"/>Navbar
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/general"/>Home
                </li>
                <li className="nav-item-my-2"><Link className="nav-link active" aria-current="page" to="/entertainment"/>entertainment  </li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general"/>general  </li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health"/>health  </li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science"/>science  </li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports"/>sports  </li>
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology"/>technology  </li>
                
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default navbar
