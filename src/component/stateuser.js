import React from 'react';




function StateUser() {
    return (


            <div>
              {/* Start Content*/}
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box">
                      <h4 className="page-title">Create State User</h4>
                    </div>
                  </div>
                </div>
                {/* end page title */}
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-widgets">
                          <a href="javascript:;" data-toggle="reload" data-bs-toggle="modal" data-bs-target="#state-usersmodal"><i className="fas fa-plus" /></a>
                        </div>
                        <h4 className="header-title mb-3"> State Users</h4>
                        <div className="table-responsive">
                          <table className="table table-striped table-nowrap table-centered mb-0 text-center" id="state_user_table">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>State Name</th>
                                <th>State User Name</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                            </tbody>
                          </table>
                        </div> {/* end table-responsive*/}
                      </div> {/* end card-body*/}
                    </div> {/* end card*/}
                  </div>
                  <div className="modal fade" id="state-usersmodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Create State Users</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <form method="post" id="usercreate">
                            <div id="basicwizard">
                              <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
                                <li className="nav-item">
                                  <a href="#basictab1" data-bs-toggle="tab" data-toggle="tab" className="nav-link">
                                    {/* <span class="number">1</span> */}
                                    <span className="d-none d-sm-inline"> State User</span>
                                  </a>
                                </li>
                              </ul>
                              <div className="tab-content b-0 mb-0">
                                <div className="tab-pane" id="basictab1">
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="row mb-3">
                                        <label className="col-md-3 col-form-label" htmlFor="firstname"> Name </label>
                                        <div className="col-md-9">
                                          <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Enter the name" />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label className="col-md-3 col-form-label" htmlFor="password">
                                          Select State</label>
                                        <div className="col-md-9">
                                          <select id="state" className="form-control" name="state" />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label className="col-md-3 col-form-label" htmlFor="PhoneNumber">Phone Number </label>
                                        <div className="col-md-9">
                                          <input type="tel" className="form-control" id="phone_number" name="phone_number" placeholder={+91} defaultValue={+91} maxLength={13} pattern="\+?[0-9]{10,13}" inputMode="numeric" oninput="this.value=this.value.replace(/[^0-9+]/g,'');" required />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label className="col-md-3 col-form-label" htmlFor="email">Email </label>
                                        <div className="col-md-9">
                                          <input type="email" className="form-control" id="email" name="email" placeholder="Enter the Email" />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label className="col-md-3 col-form-label" htmlFor="program">
                                          Program</label>
                                        <div className="col-md-9">
                                          <select id="program" className="form-control" name="program" />
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
                              </div> {/* tab-content */}
                            </div> {/* end #basicwizard*/}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* container */}
              </div> {/* content */}
              {/* state users edit modal  */}
              <div className="modal fade" id="myModal_allocate">
                <div className="modal-dialog">
                  <div className="modal-content" style={{top: '155px'}}>
                    {/* Modal Header */}
                    <div className="modal-header">
                      <h4 className="modal-title">State User Edit</h4>
                      <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      <form id="state_allocated_update">
                        <div className="row mb-3">
                          <label className="col-md-3 col-form-label" htmlFor="state_name">State Name :</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" id="f_allocate_state" name="state_name" placeholder="Enter the State Name" disabled />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-md-3 col-form-label" htmlFor="user_name">User Name :</label>
                          <div className="col-md-9">
                            <input type="text" className="form-control" id="f_allocate_user" name="user_name" placeholder="Enter the User Name" />
                          </div>
                        </div>
                        <button type="submit" onclick="submit" className="btn btn-primary"> Update Users</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div> {/*end state users edit modal  */}
            </div>
          );
        }


export default StateUser;
