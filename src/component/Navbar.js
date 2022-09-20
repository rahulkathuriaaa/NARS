import React from 'react'
import MyImage from '../logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
           <img  style={{height: '40px',padding: '0 15px'}}src={MyImage} alt="logo" />TECH-MACHIN
           </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
          <li className="nav-item dropdown fw-bold">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ padding: '0 22px' }}>
                Developer
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown fw-bold">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ padding: '0 22px' }}>
                Network
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="#" style={{ display: 'flex', alignItems: 'center', padding: '0 22px' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="#" style={{ display: 'flex', alignItems: 'center', padding: '0 22px' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="#" style={{ display: 'flex', alignItems: 'center', padding: '0 22px' }}>Contact</a>
            </li>
          
            
            
            
             <li className="nav-item dropdown fw-bold">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ padding: '0 22px' }}>
                Community
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> 
            
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
