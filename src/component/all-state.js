import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
// import { dyurl } from './config';





function Allstates() {
  useEffect(() => {
    const getToken = () => {
      // This function should return the user token dynamically
      return localStorage.getItem('token');
    }

    $(document).ready(() => {
      $('#state_table').DataTable({
        ajax: {
          url: 'https/state_create/',
          type: 'GET',
          headers: { 'Authorization': `token ${getToken()}` },
          dataSrc: ''
        },
        columns: [
          { data: 'id' },
          { data: 'name' },
          { data: 'abbreviation' },
          { data: 'created_by.username' },
          {
            data: null,
            render: function (data, type, row) {
              return (
                <a href="#" onClick={() => ViewDistrict(row.id, row.name)}>
                  <i className="fas fa-eye"></i>
                </a>
              );
            }
          }
        ],
        searching: true,
        ordering: true,
        paging: true,
        pageLength: 10
      });
    });
  }, []);

  const getToken = () => {
    // This function should return the user token dynamically
    return localStorage.getItem('token');
  }

  const ViewDistrict = (itemId, itemName) => {
    window.location.href = '/all_District';
    localStorage.setItem('x', itemId);
  }

  return (
    <div className="mt-4">
    <div className="col-xl-12">
      <div className="card">
        <div className="card-body">
          <h4 className="header-title mb-3">All States</h4>
          <div className="table-responsive">
            <table id="state_table" className="table table-striped table-nowrap table-centered mb-0 text-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>State Name</th>
                  <th>State Abbreviation</th>
                  <th>Created By</th>
                  <th>View Districts</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Allstates;