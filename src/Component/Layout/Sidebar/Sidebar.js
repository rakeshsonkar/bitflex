import React from 'react'
import {Link} from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="page-sidebar">
        <a className="logo" href="#"><img src='../../assets/images/Logo3.png'></img></a>

        <ul className="list-unstyled accordion-menu">


          <li >
            <Link to="dashboard"  className="active nav-space" > <i data-feather="activity" /> Dashboard</Link>
          </li>

          <li >
            <Link to="dashboard" ><i class="fa fa-user ml-5" ></i> User</Link>
          </li>
          <li>
            <Link to="userdetails"><i class="fa fa-user"> </i>User</Link>
          </li>

          <li>
            <Link to="userdetails"><i class="fa fa-users"> </i>Customer</Link>
          </li>
          <li>
            <Link to="userdetails"><i class="fa fa-user"> </i>Buy/Sell</Link>
          </li>
          <li>
            <Link to="userdetails"><i class="fa fa-user"></i>Accounts</Link>
          </li>
          <li>
            <Link to="userdetails"><i class="fa fa-user"></i>Funds</Link>
          </li>
          <li>
            <Link to="userdetails"><i class="fa fa-user"></i>Lending</Link>
          </li>
          <li>
            <Link to="userdetails"><i class="fa fa-user"></i>Expenses</Link>
          </li>


          {/* <li>
            <a href="#"><i data-feather="aperture" />Apps<i className="fas fa-chevron-right dropdown-icon" /></a>
            <ul className>
              <li><a href="email.html"><i className="far fa-circle" />Email</a></li>
              <li><a href="contact.html"><i className="far fa-circle" />Contact</a></li>
              <li><a href="calendar.html"><i className="far fa-circle" />Calendar</a></li>
              <li><a href="social.html"><i className="far fa-circle" />Social</a></li>
              <li><a href="file-manager.html"><i className="far fa-circle" />File Manager</a></li>
            </ul>
          </li> */}



          {/* <li>
            <a href="#"><i data-feather="code" />Components<i className="fas fa-chevron-right dropdown-icon" /></a>
            <ul className>
              <li><a href="alerts.html"><i className="far fa-circle" />Alerts</a></li>
              <li><a href="typography.html"><i className="far fa-circle" />Typography</a></li>
              <li><a href="icons.html"><i className="far fa-circle" />Icons</a></li>
              <li><a href="badge.html"><i className="far fa-circle" />Badge</a></li>
              <li><a href="buttons.html"><i className="far fa-circle" />Buttons</a></li>
              <li><a href="cards.html"><i className="far fa-circle" />Cards</a></li>
              <li><a href="dropdowns.html"><i className="far fa-circle" />Dropdowns</a></li>
              <li><a href="list-group.html"><i className="far fa-circle" />List Group</a></li>
              <li><a href="toasts.html"><i className="far fa-circle" />Toasts</a></li>
              <li><a href="modal.html"><i className="far fa-circle" />Modal</a></li>
              <li><a href="pagination.html"><i className="far fa-circle" />Pagination</a></li>
              <li><a href="popovers.html"><i className="far fa-circle" />Popovers</a></li>
              <li><a href="progress.html"><i className="far fa-circle" />Progress</a></li>
              <li><a href="spinners.html"><i className="far fa-circle" />Spinners</a></li>
              <li><a href="accordion.html"><i className="far fa-circle" />Accordion</a></li>
            </ul>
          </li>
          <li>
          <a href="#"><i data-feather="box"></i>Plugins<i class="fas fa-chevron-right dropdown-icon"></i></a>
                    <ul class="">
                      <li><a href="block-ui.html"><i class="far fa-circle"></i>Block UI</a></li>
                      <li><a href="session-timeout.html"><i class="far fa-circle"></i>Session Timeout</a></li>
                      <li><a href="tree-view.html"><i class="far fa-circle"></i>Tree View</a></li>
                      <li><a href="select2.html"><i class="far fa-circle"></i>Select2</a></li>
                    </ul>
                  </li>
                  
                  <li>
                    <a href="#"><i data-feather="star"></i>Pages<i class="fas fa-chevron-right dropdown-icon"></i></a>
                    <ul class="">
                      <li><a href="invoice.html"><i class="far fa-circle"></i>Invoice</a></li>
                      <li><a href="404.html"><i class="far fa-circle"></i>404 Page</a></li>
                      <li><a href="500.html"><i class="far fa-circle"></i>500 Page</a></li>
                      <li><a href="blank-page.html"><i class="far fa-circle"></i>Blank Page</a></li>
                      <li><a href="login.html"><i class="far fa-circle"></i>Login</a></li>
                      <li><a href="register.html"><i class="far fa-circle"></i>Register</a></li>
                      <li><a href="lockscreen.html"><i class="far fa-circle"></i>Lockscreen</a></li>
                      <li><a href="price.html"><i class="far fa-circle"></i>Price</a></li>
                    </ul>
                  </li>
          <li>
            <a href="#"><i data-feather="droplet" />Form<i className="fas fa-chevron-right dropdown-icon" /></a>
            <ul className>
              <li><a href="form-elements.html"><i className="far fa-circle" />Form Elements</a></li>
              <li><a href="form-layout.html"><i className="far fa-circle" />Form Layout</a></li>
              <li><a href="form-validation.html"><i className="far fa-circle" />Form Validation</a></li>
            </ul>
          </li>
          <li>
            <a href="#"><i data-feather="grid" />Tables<i className="fas fa-chevron-right dropdown-icon" /></a>
            <ul className>
              <li><a href="tables.html"><i className="far fa-circle" />Basic Tables</a></li>
              <li><a href="data-tables.html"><i className="far fa-circle" />Data Tables</a></li>
            </ul>
          </li>
          <li>
            <a href="charts.html"><i data-feather="pie-chart" />Charts</a>
          </li> */}
        </ul>
        <a href="#" id="sidebar-collapsed-toggle"><i data-feather="arrow-right" /></a>
      </div>
    </>
  )
}

export default Sidebar