import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

// import $ from 'jquery';




function Addmin() {
    return (
        <div className="content-page">
        <div className="content">
              <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Admin Dashboard</h4>
                    </div>
                </div>
            </div>
            <div className="row">
            <StateCount/> 
            <District/>
            <Allblock/>
            <Villages/>
            <Student/><div className="mt-4">
            <div className="row">
            {/* <div className="col-xl-12"> */}
                {/* <div class="card"> */}
                    <div class="card-body">
                        {/* <div class="dropdown float-end"> */}
           <UserTable/>
           <div className="mt-4">
            <StateTable/>
           <div className="mt-4">

            <Block/>
           </div>
           </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            //  </div>
            // </div>

  );
}



// ----------------------------------------All State------------------------------------

function StateCount() {
    const [stateCount, setStateCount] = useState(0);
  
    useEffect(() => {
      async function fetchStateCount() {
        const response = await fetch('All_state_count/', {
          headers: {
            'Authorization': `token ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setStateCount(data.count);
      }
      fetchStateCount();
    }, []);
  
    return (
      <div className="col-xl-2 col-md-5">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="text-muted fw-normal mt-0 text-truncate" title="All State">
                  All State
                </h5>
                <h3 className="my-2 py-1">
                  <span data-plugin="counterup">{stateCount}</span>
                </h3>
                <p className="mb-0 text-muted">
                  <span className="text-success me-2">
                    <span className="mdi mdi-arrow-up-bold"></span>
                  </span>
                  <span className="text-nowrap"></span>
                </p>
              </div>
              <div className="avatar-sm"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
//   --------------------------All District------------------------------------------

function District() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('All_district_count/', {
          headers: {
            'Authorization': `token ${token}`
          }
        });
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="col-xl-2 col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="text-muted fw-normal mt-0 text-truncate" title="All Student">All District</h5>
              <h3 className="my-2 py-1"><span id="block" data-plugin="counterup">{count}</span></h3>
              <p className="mb-0 text-muted">
                <span className="text-success me-2"><span className="mdi mdi-arrow-up-bold"></span></span>
                <span className="text-nowrap"></span>
              </p>
            </div>
            <div className="avatar-sm">
              {/* <span className="avatar-title bg-soft-primary rounded">
                <i className="ri-slideshow-2-line font-20 text-primary"></i>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default Dashboard;

// ---------------------------------Allblock----------------------------------------

function Allblock() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('All_block_count/', {
          headers: {
            'Authorization': `token ${token}`
          }
        });
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="col-xl-2 col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="text-muted fw-normal mt-0 text-truncate" title="All Village">All Blocks</h5>
              <h3 className="my-2 py-1"><span id="block_data">{count}</span></h3>
              <p className="mb-0 text-muted">
                <span className="text-success me-2"><span className="mdi mdi-arrow-up-bold"></span></span>
                <span className="text-nowrap"></span>
              </p>
            </div>
            <div className="avatar-sm">
              {/* <span className="avatar-title bg-soft-primary rounded">
                <i className="ri-hand-heart-line font-20 text-primary"></i>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------------------Villages---------------------------------------

function Villages() {
  const [villageCount, setVillageCount] = useState(0);

  useEffect(() => {
    async function fetchVillageCount() {
      const token = localStorage.getItem('token');
      const response = await fetch('All_village_count/', {
        headers: {
          'Authorization': `token ${token}`
        }
      });
      const data = await response.json();
      setVillageCount(data.count);
    }
    fetchVillageCount();
  }, []);

  return (
    <div className="col-xl-2 col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="text-muted fw-normal mt-0 text-truncate" title="All Village">All Villages</h5>
              <h3 className="my-2 py-1"><span id="village">{villageCount}</span></h3>
              <p className="mb-0 text-muted">
                <span className="text-success me-2">
                  <span className="mdi mdi-arrow-up-bold"></span>
                </span>
                <span className="text-nowrap"></span>
              </p>
            </div>
            <div className="avatar-sm">
              {/* <!-- <span className="avatar-title bg-soft-primary rounded">
                  <i className="ri-hand-heart-line font-20 text-primary"></i>
                </span> --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------all student-------------------------------------------------


const Student = () => {
  const [studentCount, setStudentCount] = useState(null);

  useEffect(() => {
    const fetchStudentCount = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('All_Student_count/', {
        headers: {
          'Authorization': `token ${token}`
        }
      });
      const data = await response.json();
      setStudentCount(data.count);
    };
    fetchStudentCount();
  }, []);

  return (
    <div className="col-xl-3 col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="text-muted fw-normal mt-0 text-truncate" title="All Student">
                <a href="/student_view_data">All Students</a>
              </h5>
              <h3 className="my-2 py-1">
                <span id="Student" data-plugin="counterup">
                  {studentCount}
                </span>
              </h3>
              <p className="mb-0 text-muted">
                <span className="text-success me-2">
                  <span className="mdi mdi-arrow-up-bold"></span>
                </span>
                <span className="text-nowrap"></span>
              </p>
            </div>
            <div className="avatar-sm">
              {/* <span className="avatar-title bg-soft-primary rounded">
                  <i className="ri-money-dollar-box-line font-20 text-primary"></i>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------all user table -----------------------------------------------------------------

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/All_users/', {
        headers: { Authorization: `token ${getToken()}` }
      });
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUSER = async (itemId) => {
    try {
      await axios.delete(`/Update_All_users/${itemId}/`, {
        headers: { Authorization: `token ${getToken()}` }
      });
      fetchData(); // Reload the data after successful deletion
    } catch (error) {
      console.error(error);
    }
  };

  const getToken = () => {
    // This function should return the user token dynamically
    return localStorage.getItem('token');
  };

  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-body">
          <h4 className="header-title mb-3">
            <a href="/all_user_view">All Users</a>
          </h4>

          <div className="table-responsive">
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UserName</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.first_name}</td>
                    <td>{user.phone_number}</td>
                    <td>
                      <a
                        href="#"
                        onClick={() => deleteUSER(user.id)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------state table -------------------------------------------------

const StateTable = () => {
  useEffect(() => {
    // const getToken = () => {
    //   // This function should return the user token dynamically
    //   return localStorage.getItem('token');
    // };

    // $(document).ready(function () {
    //   $('#state_name').DataTable({
    //     paging: true, // Enable pagination
    //     pageLength: 10, // Set the number of rows per page
    //     searching: true, // Enable searching
    //     ordering: true, // Enable sorting
    //     order: [[0, 'asc']], // Set the default sorting order
    //     ajax: {
    //       url: `${dyurl}/state_create/`,
    //       type: 'GET',
    //       headers: {
    //         Authorization: `token ${getToken()}`,
    //       },
    //       dataSrc: '',
    //     },
    //     columns: [
    //       { data: 'id' },
    //       { data: 'name' },
    //       { data: 'abbreviation' },
    //       {
    //         data: null,
    //         render: function (data, type, row) {
    //           return (
    //             <a
    //               href="#"
    //               onClick={() => ViewStudent(row.id, row.name)}
    //             >
    //               <i className="fas fa-eye"></i>
    //             </a>
    //           );
    //         },
    //       },
    //     ],
    //   });
    // });
  }, []);

  // const getToken = () => {
  //   // This function should return the user token dynamically
  //   return localStorage.getItem('token');
  // };

  // const deletestate = (itemId) => {
  //   $.ajax({
  //     url: `${dyurl}/State_update/${itemId}/`,
  //     method: 'GET',
  //     headers: { Authorization: `token ${getToken()}` },
  //     success: function (data) {
  //       // Remove item from the HTML table
  //       var userid = data.id;
  //       console.log(userid);
  //     },
  //     error: function () {
  //       console.log('Error deleting item');
  //     },
  //   });

  //   $('#s_l').click(function () {
  //     // Send an AJAX request to delete the user
  //     $.ajax({
  //       url: `${dyurl}/State_update/${itemId}/`,
  //       method: 'DELETE',
  //       headers: { Authorization: `token ${getToken()}` },
  //       success: function (data) {
  //         // Reload the page after successful deletion
  //         window.location.reload();
  //       },
  //     });
  //   });
  // };

  // const ViewStudent = (itemId) => {
  //   window.location.href = '/State_Students_view';
  //   localStorage.setItem('x', itemId);
  // };

  return (
    <div className="col-xl-12">
    <div className="card">
      <div className="card-body">
        <h4 className="header-title mb-4">States</h4>
        {/* <div className="d-flex"> */}
          <div className="flex-1">
            <div className="table-responsive">
              <table id="state_name" className="table table-striped text-center">
                <thead>
                  <tr>
                    <th>Id3</th>
                    <th>Name</th>
                    <th>Abbreviation</th>
                    <th>View Students</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            <h5 className="mt-0 mb-1"></h5>
          </div>
        </div>

        {/* The state DELETE Modal */}
        <div className="modal fade" id="state_delete">
          <div className="modal-dialog">
            <div className="modal-content" style={{ top: '155px' }}>
              <form id="delet_users">
                <div className="modal-header">
                  <h4 className="modal-title">Delete State</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  Are you sure you want to Delete this state?
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">
                    Cancel
                  </button>
                  {/* <button type="submit" onClick={submit} className="btn btn-danger" data-dismiss="modal">Delete</button> */}
                  <button type="submit" className="btn btn-danger" id="s_l" data-dismiss="modal">
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End The state DELETE Modal */}
      </div>
      {/* end card-body */}
    {/* </div> */}
    {/* end card */}
  </div>
)
};

// -----------------------------------block table----------------------------------------------------

const Block = () => {
  return (
    <div className="col-lg-12">
      {/* Todo*/}
      <div className="card">
        <div className="card-body">
          <h4 className="header-title mb-4"> Blocks </h4>
          {/* <div className="d-flex"> */}
            {/* <div className="flex-1"> */}
              <div className="table-responsive">
                <table className="table table-striped table-nowrap table-centered mb-0 text-center" id="blockname">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Abbrivation</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
              </div>
              <h5 className="mt-0 mb-1"> </h5>
              {/* block delet */}
              <div className="modal fade" id="block_dels">
                <div className="modal-dialog">
                  <div className="modal-content" style={{ top: "155px" }}>
                    {/* Modal Header */}
                    <form id="delet_users">
                      <div className="modal-header">
                        <h4 className="modal-title">Delete Block</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      {/* Modal body */}
                      <div className="modal-body">
                        Are you sure you want to Delete this Block ?
                      </div>
                      {/* Modal footer */}
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                        {/* <button type="submit" onclick="submit" className="btn btn-danger" data-dismiss="modal">Delete</button> */}
                        <button type="submit" className="btn btn-danger" id="b_l" data-dismiss="modal">Delete</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* end block delet */}
            </div>
          </div>
        </div>
       
      // </div>
    // </div> // end BLOCKS col
  );
};








































export default Addmin;


