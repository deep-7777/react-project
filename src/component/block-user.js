import React from 'react';




function Block_user() {
    return (

      <div className="mt-4">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <div className="card-widgets">
                  <a href="javascript:;" data-toggle="reload" data-bs-toggle="modal" data-bs-target="#block-model"><i className="fas fa-plus" /></a>
                </div>
                <h4 className="header-title mb-3">Block Users</h4>
                <div id="cardCollpase5" className="collapse pt-3 show">
                  <div className="table-responsive">
                    <table id="block_user_table" className="table table-hover table-centered mb-0 text-center ">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>State</th>
                          <th>District</th>
                          <th>Block</th>
                          <th>User Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                  {/* <a href="/Student_enrollment_system/user_auth/templates/temp/see_all_users.html">See
                              All Users</a> */}
                </div> {/* end table-responsive*/}
              </div> {/* end card-body*/}
            </div> {/* end card*/}
          </div>
        </div>
        <div className="modal fade" id="block-model" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Block User</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form method="post" id="usercreate">
                  <div id="basicwizard">
                    <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
                      <li className="nav-item">
                        <a href="#basictab1" data-bs-toggle="tab" data-toggle="tab" className="nav-link">
                          {/* <span class="number">1</span> */}
                          <span className="d-none d-sm-inline">Block User</span>
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
                                <input type="text" className="form-control" id="first_name" name="first_name" placeholder="Enter the Firstname" />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" htmlFor="state">State </label>
                              <div className="col-md-9">
                                <select id="state" className="form-control" onchange="myState()" name="state">
                                </select>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" htmlFor="district">District </label>
                              <div className="col-md-9">
                                <select id="district" className="form-control" onchange="myDistrict()" name="district">
                                </select>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" htmlFor="block">Block </label>
                              <div className="col-md-9">
                                <select id="block" className="form-control" name="block">
                                </select>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" htmlFor="program">
                                Program</label>
                              <div className="col-md-9">
                                <select id="program" className="form-control" name="program" />
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
        {/* block users edit modal  */}
        <div className="modal fade" id="myModal_allocate_block">
          <div className="modal-dialog">
            <div className="modal-content" style={{top: '155px'}}>
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Block User Edit</h4>
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
                    <label className="col-md-3 col-form-label" htmlFor="district_name">District Name :</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" id="f_allocate_district" name="district_name" placeholder="Enter the District Name" disabled />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3 col-form-label" htmlFor="block_name">Block Name :</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" id="f_allocate_block" name="block_name" placeholder="Enter the  Name" disabled />
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

export default Block_user;