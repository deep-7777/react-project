import React, { useState, useEffect } from "react";
import axios from "axios";



function Students() {
  const [token, setToken] = useState('');
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    getToken();
    getStates();
  }, []);

  function getToken() {
    // Function to get the user token dynamically
    const userToken = localStorage.getItem('token');
    setToken(userToken);
  }

  function getStates() {
    axios.get(fetch + 'https://state_create/', {
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const stateOptions = response.data.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ));
      setStates(stateOptions);
    })
    .catch(error => {
      console.error('Error fetching states:', error);
    });
  }

  function handleStateChange(event) {
    const selectedStateId = event.target.value;
    localStorage.setItem('state_id', selectedStateId);

    axios.get(fetch + `/state/${selectedStateId}/district/`, {
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const districtOptions = response.data.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ));
      setDistricts(districtOptions);
    })
    .catch(error => {
      console.error('Error fetching districts:', error);
    });
  }

  function handleDistrictChange(event) {
    const selectedDistrictId = event.target.value;
    localStorage.setItem('district_id', selectedDistrictId);

    axios.get(fetch + `/district/${selectedDistrictId}/block/`, {
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const blockOptions = response.data.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ));
      setBlocks(blockOptions);
    })
    .catch(error => {
      console.error('Error fetching blocks:', error);
    });
  }

  function handleBlockChange(event) {
    const selectedBlockId = event.target.value;

    axios.get(fetch + `/block/${selectedBlockId}/villages/`, {
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const villageOptions = response.data.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ));
      setVillages(villageOptions);
    })
    .catch(error => {
      console.error('Error fetching villages:', error);
    });
  }

  return (
  <div>
      <select id="state" onChange={handleStateChange}>
        {states}
      </select>

    <div className="mt-4">
      <div className="content-page">
          <div className="content">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                    </div>
                    <h4 className="header-title mb-3"> All Inactive Students</h4>
                    <div className="row1">
                      <form method="Post" action="/result_students">
                        {'{'}% csrf_token %{'}'}
                        <div className="column left">
                          <span aria-hidden="true">Search the State</span>
                          <select id="state" className="form-control" onchange="myState()" name="state">
                          </select>
                        </div>
                        <div className="column middle">
                          <span aria-hidden="true">Search the District</span>
                          <select id="district" onchange="myDistrict()" className="form-control" name="district">
                          </select>
                        </div>
                        <div className="column right">
                          <span aria-hidden="true">Search the Block</span>
                          <select id="block" onchange="myblock()" className="form-control" name="block">
                          </select>
                        </div>
                        <div className="column right">
                          <span aria-hidden="true">Search the Village</span>
                          <select id="village" className="form-control" name="village">
                          </select>
                        </div>
                        <input type="submit" className="btn btn-info" defaultValue="Search" style={{position: 'relative', top: '32px', right: '-32px'}} />
                      </form>
                    </div>
                  </div>
                  <form method="Post" action="/multiple_choice">
                    {'{'}% csrf_token %{'}'}
                    <select name="selection" aria-placeholder="Please select your option">
                      <option value />
                      <option value="Active selected Student">Active selected Student</option>
                      <option value="Delete Selected">Delete Selected</option>
                    </select>
                    <button className="btn btn-info" type="submit">Apply Selection</button>
                    <div className="table-responsive">
                      {'{'}% for stud in inactaive_students %{'}'}
                      {'{'}% endfor %{'}'}
                      <table id="inActive_stud" className="display table-striped table-bordered text-center" style={{width: '100%'}}>
                        <thead>
                          <tr>
                            <th> <input type="checkbox" id="selectAll" defaultValue="selectAll" />
                            </th>
                            <th>Enrollment ID</th>
                            <th> Student Name</th>
                            <th>Phone Number</th>
                            <th>State</th>
                            <th>District</th>
                            <th>Block</th>
                            <th>Village</th>
                            <th>Approval</th>
                          </tr>
                        </thead>
                        {/* <tbody id="user_table"> */}
                        <tbody><tr>
                            <td>
                              <center> 
                                <input type="checkbox" id="stud_id" name="filetouse" defaultValue="{{ stud.enrollment_id }}" />
                              </center>
                            </td>
                            <td>
                              {'{'}{'{'} stud.enrollment_id {'}'}{'}'}
                            </td>
                            <td>
                              {'{'}{'{'} stud.first_name {'}'}{'}'} {'{'}{'{'} stud.last_name {'}'}{'}'}
                            </td>
                            <td>
                              {'{'}{'{'} stud.phone_number {'}'}{'}'}
                            </td>
                            <td>
                              {'{'}{'{'} stud.village_id.block.district.state.name {'}'}{'}'}
                            </td>
                            <td>
                              {'{'}{'{'} stud.village_id.block.district.name {'}'}{'}'}
                            </td>
                            <td>
                              {'{'}{'{'} stud.village_id.block.name {'}'}{'}'}
                            </td>
                            <td>
                              {'{'}{'{'} stud.village_id.name {'}'}{'}'}
                            </td>
                            <td>
                              <form method="post" action="{% url 'student_detail' stud.id %}">
                                {'{'}% csrf_token %{'}'}
                                <input type="hidden" name="action" defaultValue="toggle_active" />
                                <label className="switch">
                                <input type="checkbox" name="is_active" checked={ Students.status ? true : false} onChange={() => this.form.submit()} />

                                  <span className="slider round" />
                                </label>
                              </form>
                            </td>
                          </tr></tbody>
                      </table>
                    </div> {/* end table-responsive*/}
                  </form></div> {/* end card-body*/}
              </div> {/* end card*/}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown float-end">
                  </div>
                  <h4 className="header-title mb-3"> All Active Students</h4>
                </div>
                <div className="table-responsive">
                  {'{'}% for stud in active_students %{'}'}
                  {'{'}% endfor %{'}'}
                  <table id="Active_stud" className="display table-striped table-bordered text-center" style={{width: '100%'}}>
                    <thead>
                      <tr>
                        <th>Enrollment ID</th>
                        <th> Student Name</th>
                        <th>Phone Number</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Block</th>
                        <th>Village</th>
                        <th>Approval</th>
                      </tr>
                    </thead>
                    {/* <tbody id="user_table"> */}
                    <tbody><tr>
                        <td>
                          {'{'}{'{'} stud.enrollment_id {'}'}{'}'}
                        </td>
                        <td>
                          {'{'}{'{'} stud.first_name {'}'}{'}'} {'{'}{'{'} stud.last_name {'}'}{'}'}
                        </td>
                        <td>
                          {'{'}{'{'} stud.phone_number {'}'}{'}'}
                        </td>
                        <td>
                          {'{'}{'{'} stud.village_id.block.district.state.name {'}'}{'}'}
                        </td>
                        <td>
                          {'{'}{'{'} stud.village_id.block.district.name {'}'}{'}'}
                        </td>
                        <td>
                          {'{'}{'{'} stud.village_id.block.name {'}'}{'}'}
                        </td>
                        <td>
                          {'{'}{'{'} stud.village_id.name {'}'}{'}'}
                        </td>
                        <td>
                          {/* <a href="#" onclick="FetchUserDetails({{ user.id }});"  data-toggle="modal" data-target="#myModal1"><i class="fas fa-edit"></i></a> | 
                                <a href="#"  onclick="deleteUSER({{ user.id }});" data-toggle="modal" data-target="#myModal" ><i class="fas fa-trash-alt"></i></a> */}
                          <form method="post" action="{% url 'student_detail' stud.id %}">
                            {'{'}% csrf_token %{'}'}
                            <input type="hidden" name="action" defaultValue="toggle_inactive" />
                            <label className="switch">
                            <input type="checkbox" name="is_active" checked={Students.status ? true : false} onChange={() => this.form.submit()}/>
                              <span className="slider round" />
                            </label>
                          </form>
                        </td>
                      </tr></tbody>
                  </table>
                </div> {/* end table-responsive*/}
              </div> {/* end card-body*/}
            </div> {/* end card*/}
          </div>
        </div>
        {/* Models all user  Pop Up*/}
        <div className="modal fade" id="myModal1">
          <div className="modal-dialog">
            <div className="modal-content" style={{top: '155px'}}>
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Edit Form</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <form id="user_update">
                  <div className="row mb-3">
                    <label className="col-md-3 col-form-label" htmlFor="first_name">First Name :</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" id="f_user_name" name="first_name" placeholder="Enter the First Name" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3 col-form-label" htmlFor="phone_number">Phone Number :-</label>
                    <div className="col-md-9">
                      <input type="number" className="form-control" id="f_phone_number" name="phone_number" placeholder="Enter the Phone Number" />
                    </div>
                  </div>
                  <button type="submit" onclick="submit" className="btn btn-primary"> Update Users</button>
                </form>
              </div>
              {/* Modal footer */}
            </div>
          </div>
        </div>
        {/* The user DELETE Modal */}
        <div className="modal fade" id="myModal">
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
                  Are you sure you want to Delete this User ?
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
      </div>
      </div>
      </div>   
  );
}

export default Students;