import React from 'react'
import emp from './Images/emp.jpg'
import Ait from './Images/Ait.png'
import './Header.css'

function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          <img src={Ait}style={{ height: "30px", width: "60px" }} />
              <form className="d-flex">
                  <input className="form-control" type="text" placeholder="Search People" aria-label="Search" />
                  <button className="btn btn-primary" type="submit"> <i className="fas fa-search" ></i></button>
              </form>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span> 
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                          <div className="form-check form-switch" >
                              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />

                          </div>
                      </li>

                      <li className="nav-item">
                          <div className="notif">
                          <i className="fa-regular fa-bell"></i>
                          </div>
                      </li>

                      <li className="nav-item">
                      <div className="profile">
                          <img src={emp} className="img-fluid" alt="#"/>
                          </div>
                      </li>
                  </ul>
                  </div>
              </div>
          
      </nav>

  );
}

export default Header;




    
