import './SuperSideBar.css'
import { NavLink, useLocation } from 'react-router-dom'
import React from 'react'

const SuperSideBar = () => {
  const location = useLocation()
  console.log('djfb ', location.pathname)
  return (
    <div>
      <div className="sideBarContainer">
        <div className="SuperSideBar-imageContainer">
          <img
            src={require('../../../assets/VL logo.png')}
            alt=""
            className="sideBarImg"
          />
        </div>

        <div className="sideBar-dashBoard">
          <NavLink to="SupermainBoard" className="sideBar-linkNames">
            <div className="sideBar-DashBoardContainer">
              <div className="sideBar-Item">
                <img
                  src={require('../../../assets/icons/dashboard_black_24dp 1.png')}
                  alt=""
                  className="sideBar-navTools"
                />
              </div>
              <div className="sideBar-Text">Admin&nbsp;List</div>
            </div>
          </NavLink>

          <NavLink to="SuperRequests" className="sideBar-linkNames">
            <div className="sideBar-DashBoardContainer">
              <div className="sideBar-Item">
                <img
                  src={require('../../../assets/icons/settings.png')}
                  alt=""
                  className="sideBar-navTools"
                />
              </div>
              <div className="sideBar-Text">Requests</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SuperSideBar
