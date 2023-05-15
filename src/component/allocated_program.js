import React from 'react';


function Program_allocated (){

      return (
  
        <div className="mt-4">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-widgets">
                    <a href="javascript:;" data-toggle="reload" data-bs-toggle="modal" data-bs-target="#programmodel2"><i className="fas fa-plus" /></a>
                  </div>
                  <h4 className="header-title mb-0">Allocated Programs</h4>
                  <div id="cardCollpase5" className="collapse pt-3 show">
                    <div className="table-responsive">
                      <table id="program_table" className="table table-hover table-centered mb-0 text-center ">
                        <thead>
                          <tr>
                            <th>State</th>
                            <th>Program Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div> {/* end table responsive*/}
                  </div> {/* collapsed end */}
                </div> {/* end card-body */}
              </div> {/* end card*/}
            </div>
            {/* end row */}
          </div> {/* container */}
          <div className="modal fade" id="programmodel2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Allocate state to the program</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <form method="post" id="allocate__program">
                    <div id="basicwizard">
                      <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
                        <li className="nav-item">
                          <a href="#basictab1" data-bs-toggle="tab" data-toggle="tab" className="nav-link">
                            {/* <span class="number">1</span> */}
                            <span className="d-none d-sm-inline">Allocate state to the program</span>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content b-0 mb-0">
                        <div className="tab-pane" id="basictab1">
                          <div className="row">
                            <div className="col-12">
                              <div className="row mb-3">
                                <label className="col-md-3 col-form-label" htmlFor="statename">
                                  Select State</label>
                                <div className="col-md-9">
                                  <select id="statename" className="form-control" name="statename" />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label className="col-md-3 col-form-label" htmlFor="programname">
                                  Program Name</label>
                                <div className="col-md-9">
                                  <select id="programname" className="form-control" name="programname" />
                                </div>
                              </div>
                            </div> {/* end row */}
                            <ul className="pager wizard mb-0 list-inline text-end mt-2">
                              <li className="next list-inline-item">
                                <input type="submit" className="btn btn-success" />
                              </li>
                            </ul>
                          </div>
                        </div> {/* tab-content */}
                      </div> {/* end #basicwizard*/}
                    </div></form>
                </div>
              </div>
            </div>
          </div>
  
        {/* The Allocated  Program DELETE Modal */}
        <div className="modal fade" id="myprogramallocateModal">
          <div className="modal-dialog">
            <div className="modal-content" style={{top: '155px'}}>
              {/* Modal Header */}
              <form id="delete_program">
                <div className="modal-header">
                  <h4 className="modal-title">Delete Program</h4>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  Are you sure you want to Delete this Allocated  Program ?
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                  {/* <button type="submit" onclick="submit"  class="btn btn-danger" data-dismiss="modal">Delete</button> */}
                  <button type="submit" className="btn btn-danger" id="program_del" data-dismiss="modal">Delete</button>
                </div>
              </form>
            </div>
          </div>
        </div> {/* End The Allocated  Program DELETE Modal */}
        {/* Mentor edit Models Pop Up*/}
        <div className="modal fade" id="Allocated_edit">
          <div className="modal-dialog">
            <div className="modal-content" style={{top: '155px'}}>
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Allocated Edit Form</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form id="allo_update">
                  <div className="row mb-3">
                    <label className="col-md-3 col-form-label" htmlFor="state">State :</label>
                    <div className="col-md-9">
                      <select id="State_e" className="form-control" name="state">
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3 col-form-label" htmlFor="program_e">Program Name </label>
                    <div className="col-md-9">
                      <select id="program_e" className="form-control" name="program_e">
                      </select>
                    </div>
                  </div> 
                  <button type="submit" onclick="submit" className="btn btn-primary"> Update </button>
                </form>
              </div>
            </div>
          </div>
        </div> {/* End Mentor edit Models Pop Up*/}
      </div>

    )
  };

export default Program_allocated;