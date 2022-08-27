import React from 'react'
import "../Header/Header.css";

const Header = () => {

  return (
    <>
      <div className="page-header">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between">
          <div className="header-title flex-fill">
            <a href="#" id="sidebar-toggle"><i data-feather="arrow-left" /></a>
            
            <h5>Dashboad </h5>
          </div>
        
          <div className="flex-fill" id="headerNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link notifications-dropdown" href="#" id="notificationsDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-bell-o"></i><div className="spinner-grow text-danger" role="status" /></a>
                <div className="dropdown-menu dropdown-menu-end notif-drop-menu" aria-labelledby="notificationsDropDown">
                  <h6 className="dropdown-header">Notifications</h6>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge bg-info text-white">
                          <i className="fas fa-bullhorn" />
                        </span>
                      </div>
                      <div className="notif-text">
                        <p className="bold-notif-text">faucibus dolor in commodo lectus mattis</p>
                        <small>19:00</small>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge bg-primary text-white">
                          <i className="fas fa-bolt" />
                        </span>
                      </div>
                      <div className="notif-text">
                        <p className="bold-notif-text">faucibus dolor in commodo lectus mattis</p>
                        <small>18:00</small>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge bg-success text-white">
                          <i className="fas fa-at" />
                        </span>
                      </div>
                      <div className="notif-text">
                        <p>faucibus dolor in commodo lectus mattis</p>
                        <small>yesterday</small>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge">
                          <img src="../../assets/images/avatars/avatar2.jpg" alt />
                        </span>
                      </div>
                      <div className="notif-text">
                        <p>faucibus dolor in commodo lectus mattis</p>
                        <small>yesterday</small>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="header-notif">
                      <div className="notif-image">
                        <span className="notification-badge">
                          <img src="../../assets/images/avatars/avatar5.jpg" alt />
                        </span>
                      </div>
                      <div className="notif-text">
                        <p>faucibus dolor in commodo lectus mattis</p>
                        <small>yesterday</small>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link profile-dropdown" href="#" id="profileDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="../../assets/images/avatars/avatar1.jpg" alt /></a>
                <div className="dropdown-menu dropdown-menu-end profile-drop-menu" aria-labelledby="profileDropDown">
                  <a className="dropdown-item" href="#"><i data-feather="user" />Profile</a>
                  <a className="dropdown-item" href="#"><i data-feather="inbox" />Messages</a>
                  <a className="dropdown-item" href="#"><i data-feather="edit" />Activities<span className="badge rounded-pill bg-success">12</span></a>
                  <a className="dropdown-item" href="#"><i data-feather="check-circle" />Tasks</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#"><i data-feather="settings" />Settings</a>
                  <a className="dropdown-item" href="#"><i data-feather="unlock" />Lock</a>
                  <a className="dropdown-item" href="#"><i data-feather="log-out" />Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>

  )
}

export default Header