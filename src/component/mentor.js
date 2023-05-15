import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Mentor() {
    return (
            <div>
              {/* Hello world */}
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card-widgets">
                      <a href="javascript:;" data-toggle="reload" data-bs-toggle="modal" data-bs-target="#mentor-model"><i className="fas fa-plus" /></a>
                    </div>
                    <h4 className="header-title mb-3">All Mentor</h4>
                    <div className="table-responsive">
                      <table id="Mentor_data" className="table table-striped table-nowrap table-centered mb-0 text-center">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Mentor Name</th>
                            <th>Phone Number </th>
                            <th>State</th>
                            <th>District</th>
                            <th>Block</th>
                            <th>Village</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div> {/* end table-responsive*/}
                  </div> {/* end card-body*/}
                </div> {/* end card*/}
              </div> {/* End All Mentor*/}
              <div className="modal fade" id="mentor-model" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Create Mentor</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <form method="post" id="mentorcreate">
                        <div id="basicwizard">
                          <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
                            <li className="nav-item">
                              <a href="#basictab1" data-bs-toggle="tab" data-toggle="tab" className="nav-link">
                                  <span className="d-none d-sm-inline">Create Mentor</span>
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content b-0 mb-0">
                            <div className="tab-pane" id="basictab1">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row mb-3">
                                    <label className="col-md-3 col-form-label" htmlFor="firstname">Name</label>
                                    <div className="col-md-9">
                                      <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Enter the Firstname" />
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <label className="col-md-3 col-form-label" htmlFor="PhoneNumber">Phone Number</label>
                                    <div className="col-md-9">
                                      <input type="tel" className="form-control" id="phone_number" name="phone_number" placeholder={+91} defaultValue={+91} maxLength={13} pattern="\+?[0-9]{10,13}" inputMode="numeric" oninput="this.value=this.value.replace(/[^0-9+]/g,'');" required />
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <label className="col-md-3 col-form-label" htmlFor="state">State</label>
                                    <div className="col-md-9">
                                      <select id="state" className="form-control" onchange="myState()" name="state">
                                      </select>
                                    </div>
                                  </div>
                                  {/* <select id="district" class="form-control" onchange="myState()" name='district'>
                                      +   <option value="" selected>--Select District--</option>
                                      </select> */}  
                                  <div className="row mb-3">
                                    <label className="col-md-3 col-form-label" htmlFor="district">District</label>
                                    <div className="col-md-9">
                                      <select id="district" className="form-control" onchange="myDistrict()" name="district">
                                      </select>
                                      {/* <option value="" selected>--Select District--</option> */}
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <label className="col-md-3 col-form-label" htmlFor="block">Block</label>
                                    <div className="col-md-9">
                                      <select id="block" onchange="myblock()" className="form-control" name="block">
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <label className="col-md-3 col-form-label" htmlFor="village">Village</label>
                                    <div className="col-md-9">
                                      <select id="village" className="form-control" name="village">                    
                                      </select>
                                    </div>
                                  </div>
                                </div> {/* end col */}
                              </div> {/* end row */}
                              <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                <li className="next list-inline-item">
                                  <input type="submit" className="btn btn-success" />
                                </li>
                              </ul>
                            </div>
                            {/* end tab pane */}
                            {/* end tab pane */}
                          </div> {/* tab-content */}
                        </div> {/* end #basicwizard*/}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mentor edit Models Pop Up*/}
              <div className="modal fade" id="Mentor_edit">
                <div className="modal-dialog">
                  <div className="modal-content" style={{top: '155px'}}>
                    {/* Modal Header */}
                    <div className="modal-header">
                      <h4 className="modal-title">Mentor Edit Form</h4>
                      <button type="button" className="close" data-dismiss="modal">x</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      <form id="mentor_update">
                        <div className="row mb-3">
                          <label className="col-md-3 col-form-label" htmlFor="Mentor_name">Mentor Name :</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" id="name" name="Mentor_name" placeholder="Enter the First Name" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-md-3 col-form-label" htmlFor="PhoneNumber">Phone Number :</label>
                          <div className="col-md-9">
                            <input type="tel" className="form-control" id="phone_number" name="phone_number" placeholder={+91} defaultValue={+91} maxLength={13} pattern="\+?[0-9]{10,13}" inputMode="numeric" oninput="this.value=this.value.replace(/[^0-9+]/g,'');" required />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-md-3 col-form-label" htmlFor="state">State :</label>
                          <div className="col-md-9">
                            <select id="State_e" className="form-control" onchange="myState_e()" name="state">
                            </select>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-md-3 col-form-label" htmlFor="district">District :</label>
                          <div className="col-md-9">
                            <select id="district_e" className="form-control" onchange="myDistrict_e()" name="district">
                            </select>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-md-3 col-form-label" htmlFor="block">Block :</label>
                          <div className="col-md-9">
                            <select id="block_e" onchange="myblock_e()" className="form-control" name="block">
                            </select>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-md-3 col-form-label" htmlFor="village">Village :</label>
                          <div className="col-md-9">
                            <select id="village_e" className="form-control" name="village">                    
                            </select>
                          </div>
                        </div>
                        <button type="submit" onclick="submit" className="btn btn-primary"> Update </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div> {/* End Mentor edit Models Pop Up*/}
              {/* The Mentor DELETE Modal */}
              <div className="modal fade" id="Mentor_delete">
                <div className="modal-dialog">
                  <div className="modal-content" style={{top: '155px'}}>
                    {/* Modal Header */}
                    <form id="delet_users">
                      <div className="modal-header">
                        <h4 className="modal-title">Delete User</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                      </div>
                      {/* Modal body */}
                      <div className="modal-body">
                        Are you sure you want to Delete this Mentor ?
                      </div>
                      {/* Modal footer */}
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                        {/* <button type="submit" onclick="submit"  class="btn btn-danger" data-dismiss="modal">Delete</button> */}
                        <button type="submit" className="btn btn-danger" id="Mentor_del" data-dismiss="modal">Delete</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div> {/* End The Mentor DELETE Modal */}
            </div>
          );
        }

export default Mentor;