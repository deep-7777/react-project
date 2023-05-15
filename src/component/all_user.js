import React, { useState, useEffect } from "react";
import axios from "axios";



function Alluser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/users/`).then((res) => {
        setUsers(res.data);
      });
    }, []);
  
    const handleDelete = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`).then((res) => {
        setUsers(users.filter((user) => user.id !== id));
      });
    };
  
    const [modalShow, setModalShow] = useState(false);
    const [modalUser, setModalUser] = useState({ id: null, first_name: "", phone_number: "" });
  
    const handleEdit = (id) => {
      axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`).then((res) => {
        setModalUser(res.data);
        setModalShow(true);
      });
    };
  
    const handleModalClose = () => {
      setModalUser({ id: null, first_name: "", phone_number: "" });
      setModalShow(false);
    };
  
    const handleModalSubmit = (e) => {
      e.preventDefault();
      axios
        .put(`${process.env.REACT_APP_API_URL}/users/${modalUser.id}/`, modalUser)
        .then((res) => {
          setUsers(users.map((user) => (user.id === res.data.id ? res.data : user)));
          setModalUser({ id: null, first_name: "", phone_number: "" });
          setModalShow(false);
        });
    };
    return (
      <div className="mt-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="dropdown float-end">
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Settings</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Action</a>
                </div>
              </div>
              <h4 className="header-title mb-3"> All Users</h4>
              <div className=" tablesaw-modeswitch tablesaw-bar-section"><label>
                  <span aria-hidden="true">Data</span>
                </label>
              </div>
              <div className="table-responsive">
                &gt;
                {'{'}% for user in custom_user %{'}'}
                {'{'}% endfor %{'}'}
                <table id="tableID" className="display table-striped table-bordered" style={{width: '100%'}}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>UserName</th>
                      <th>First Name</th>
                      <th>Action</th>
                    </tr>
                  </thead><tbody><tr>
                      <td>
                        {'{'}{'{'} user.id {'}'}{'}'}
                      </td>
                      <td>
                        {'{'}{'{'} user.username {'}'}{'}'}
                      </td>
                      <td>
                        {'{'}{'{'} user.first_name {'}'}{'}'}
                      </td>
                      <td>
                        <a href="#" onclick="FetchUserDetails('{{ user.id }}');" data-toggle="modal" data-target="#myModal1"><i className="fas fa-edit" /></a> | 
                        <a href="#" onclick="deleteUSER('{{ user.id }}');" data-toggle="modal" data-target="#myModal"><i className="fas fa-trash-alt" /></a>
                      </td>
                    </tr></tbody>
                </table>
              </div> {/* end table-responsive*/}
            </div> {/* end card-body*/}
          </div> {/* end card*/}
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
                  <button type="submit" onClick={() => handleEdit(users.id)} onclick="submit" className="btn btn-primary"> Update Users</button>
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
                  <button type="submit" onClick={() => handleDelete(users.id)} className="btn btn-danger" id="del" data-dismiss="modal">Delete</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
       
  );
}

export default Alluser;