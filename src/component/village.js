import React from 'react';




function Village() {
    return (

<div>
        <style dangerouslySetInnerHTML={{__html:"\n.switch {\nposition: relative;\ndisplay: inline-block;\n width: 45px;\n height:18px;\n }\n\n .switch input {\n opacity: 0;\n width: 0;\n        height: 0;\n    }\n\n    .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #dd1212;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 34px; /* Added to make slider rounded */\n    }\n\n    .slider:before {\n        position: absolute;\n        content: \"\";\n        height: 15px;\n        width: 15px;\n        left: 2px;\n        bottom: 2px;\n        background-color: rgb(229, 230, 223);\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 50%; /* Added to make the circle within slider rounded */\n    }\n\n    input:checked + .slider {\n        background-color: #267407;\n    }\n\n    input:focus + .slider {\n        box-shadow: 0 0 1px #567708;\n    }\n\n    input:checked + .slider:before {\n        -webkit-transform: translateX(26px);\n        -ms-transform: translateX(26px);\n        transform: translateX(26px);\n    }\n\n    /* Clear floats after the columns */\n    .row:after {\n        content: \"\";\n        display: table;\n        clear: both;\n    }\n\n    /* Optional styles for table layout */\n    .row {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    .column {\n        flex-basis: 20%;\n        padding: 10px;\n    }\n" }} />
        <br /> <br />
        {/* <div className="content-page">
          <div className="content"> */}
          
          <div className="col-xl-12">
  <div className="card">
    <div className="card-body">
      <div className="card-widgets">
        <a href="javascript:;" data-toggle="reload" data-bs-toggle="modal" data-bs-target="#villageModal">
          <i className="fas fa-plus" />
        </a>
      </div>
      <h4 className="header-title mb-3">All InActive Villages</h4>
      <form id="villageForm" method="POST" action="{% url 'multiple_village_update' %}">
        <div className="mt-3">
          <select name="action" id="bulkAction" aria-placeholder="Please select your option">
            <option value />
            <option value="Activate Selected">Activate Selected</option>
            <option value="Delete Selected">Delete Selected</option>
          </select>
          <button type="submit" className="btn btn-info" id="applySelection">Apply Selection</button>
        </div>
        <div className="table-responsive">
          <table id="village_table1" className="table table-striped table-nowrap table-centered mb-0">
            <thead>
              <tr>
                <th><input type="checkbox" id="selectAll" defaultValue="selectAll" className="select-all" /></th>
                <th>ID</th>
                <th>State</th>
                <th>District</th>
                <th>Block</th>
                <th>Village</th>
                <th>Created By</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </form>
    </div>
  </div>
</div>

<div className="col-xl-12">
  <div className="card">
    <div className="card-body">
      <div className="card-widgets">
        <a href="javascript:;" data-toggle="reload" data-bs-toggle="modal" data-bs-target="#villageModal">
          <i className="fas fa-plus" />
        </a>
      </div>
      <h4 className="header-title mb-3">All Active Villages</h4>
      <div className="table-responsive">
        <table id="village_table" className="table table-striped table-nowrap table-centered mb-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>State</th>
              <th>District</th>
              <th>Block</th>
              <th>Village</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div> {/* end table-responsive*/}
    </div> {/* end card-body*/}
  </div> {/* end card*/}
</div>


            <div className="modal fade" id="villageModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create Village</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <form method="post" id="village">
                      <div id="basicwizard">  
                        <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
                          <li className="nav-item">
                            <a href="#basictab1" data-bs-toggle="tab" data-toggle="tab" className="nav-link">
                              {/* <span class="number">1</span> */}
                              <span className="d-none d-sm-inline">Create Village</span>
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content b-0 mb-0">
                          <div className="tab-pane" id="basictab1">
                            <div className="row">
                              <div className="col-12">
                                <div className="row mb-3">
                                  <label className="col-md-3 col-form-label" htmlFor="state">State</label>
                                  <div className="col-md-9">
                                    <select id="state" className="form-control" onchange="myStates()" name="state">
                                    </select>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label className="col-md-3 col-form-label" htmlFor="district">District</label>
                                  <div className="col-md-9">
                                    <select id="district" className="form-control" onchange="myDistricts()" name="district">
                                    </select>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label className="col-md-3 col-form-label" htmlFor="block">Block</label>
                                  <div className="col-md-9">
                                    <select id="block" className="form-control" name="block">
                                    </select>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <label className="col-md-3 col-form-label" htmlFor="name">Village</label>
                                  <div className="col-md-9">
                                    <input type="text" className="form-control" id="name" name="village" placeholder="Enter the Village Name" required />
                                    <small className="text-muted">Only letters and numbers are allowed</small>
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
                    <h4 className="modal-title">Village Edit Form</h4>
                    <button type="button" className="close" data-dismiss="modal">×</button>
                  </div>
                  {/* Modal body */}
                  <div className="modal-body">
                    <form id="village_update">
                      <div className="row mb-3">
                        <label className="col-md-3 col-form-label" htmlFor="state">State :</label>
                        <div className="col-md-9">
                          <select id="state_e" className="form-control" name="state">
                          </select>
                          <select id="state" className="form-control" onchange="myState()" name="state">
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-md-3 col-form-label" htmlFor="district">District :</label>
                        <div className="col-md-9">
                          <select id="district_e" className="form-control" name="district">
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-md-3 col-form-label" htmlFor="block">Block :</label>
                        <div className="col-md-9">
                          <select id="block_e" className="form-control" name="block">
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-md-3 col-form-label" htmlFor="village_name">Village :</label>
                        <div className="col-md-9">
                          <input type="text" className="form-control" id="village_e" name="village_name" placeholder="Enter the Village Name" />
                          {/* <select id="village_e" class="form-control" name="village_name"></select> */}
                        </div>
                      </div>
                      <button type="submit" onclick="submit" className="btn btn-primary"> Update </button>
                    </form>
                  </div>
                </div>
              </div>
            </div> {/* End Mentor edit Models Pop Up*/}
            {/* The user DELETE Modal */}
            <div className="modal fade" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content" style={{top: '155px'}}>
                  {/* Modal Header */}
                  <form id="delet_users">
                    <div className="modal-header">
                      <h4 className="modal-title">Delete Village</h4>
                      <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      Are you sure you want to Delete this Village ?
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                      {/* <button type="submit" onclick="submit"  class="btn btn-danger" data-dismiss="modal">Delete</button> */}
                      <button type="submit" className="btn btn-danger" id="del" data-dismiss="modal">Delete</button>
                    </div>
                  </form>
                </div>
              </div>
            </div> {/*End The user DELETE Modal */}
          </div>
          
          // </div></div>
        
  );
}

export default Village;


