import React from 'react'
import "./Dashboard.css";
import  Doughunt from "../Charts/Doughunt";
import DashboardBarChart from "../Charts/DashboardBarChart";

const Dashboard = () => {
  return (
    <> 
      <div className="main-wrapper">
        <h5 className='text-white mt-2'>Statistics</h5>
      <div className="row">
                        <div className="col-md-3">
                        <div className="card stats-card bg-info">
                                <div className="card-body">
                                <div className="stats-icon change-danger">
                                <i className="fa fa-address-book"></i>
                                  </div>
                                  <div className="stats-info">
                                    <h5 className="card-title">1200</h5>
                                    <p className="stats-text">Total funds</p>
                                  </div>
                                  
                                </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card stats-card  bg-info">
                                <div className="card-body">
                                <div className="stats-icon change-dangers">
                                <i className="fa fa-address-book"></i>
                                  </div>
                                  <div className="stats-info">
                                    <h5 className="card-title">550</h5>
                                    <p className="stats-text">total</p>
                                  </div>
                                  
                                </div>
                        </div>
                        </div>
                        <div className="col-md-3 ">
                        <div className="card stats-card  bg-info">
                                <div className="card-body">
                                 <div className="stats-icon change-dangerss">
                                <i className="fa fa-user-o" ></i>
                                  </div>
                                  <div className="stats-info">
                                    <h5 className="card-title">120</h5>
                                    <p className="stats-text">users</p>
                                  </div>
                                  
                                </div>
                              </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="card stats-card  bg-info">
                                <div className="card-body">
                                <div className="stats-icon change-dangersss">
                                <i className="fa fa-address-book"></i>
                                  </div>
                                  <div className="stats-info">
                                    <h5 className="card-title">40</h5>
                                    <p className="stats-text">Accounts</p>
                                  </div>
                                  
                                </div>
                        </div>
                        </div>
                        
      </div>
           {/* grap chart and pie chart */}
           <div className="row">
            
              <div className='col-md-6 '>
                <div className='card bg-info chart-graph'>
             
                  <div className='d-flex justify-content-between mt-3 border-bottom p-3'>
                  <h5>Active Visitors</h5>
                  <div class="dropdown">
                    <button class="btn  btn-dark dropdown-toggle bg-info " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  </div>
                  </div>
                   <DashboardBarChart />

              </div>


              <div className='col-md-6 '>
                <div className=' card bg-info'>
             
                  <div className='d-flex justify-content-between mt-3 border-bottom mb-3 p-3'>
                  <h5>Active Visitors</h5>
                  <div class="dropdown">
                    <button class="btn  btn-dark dropdown-toggle bg-info" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  </div>
               
                    <div className='center'>
                    <Doughunt /> 
                    </div>
                </div>

              </div>


             


      </div>
     
      </div>

 
  </>

  )
}

 
export default Dashboard