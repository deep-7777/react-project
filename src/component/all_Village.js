import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

const YourComponent = () => {
  useEffect(() => {
    function getToken() {
      // This function should return the user token dynamically
      return localStorage.getItem('token');
    }

    const x = localStorage.getItem('x');
    console.log(x);

    $(document).ready(function () {
      $('#village_table').DataTable({
        ajax: {
          url: dyurl + '/block/' + x + '/villages/',
          type: 'GET',
          headers: { 'Authorization': `token ${getToken()}` },
          dataSrc: '',
        },
        columns: [
          { data: 'id' },
          { data: 'name' },
          { data: 'created_by.username' },
        ],
        searching: true,
        ordering: true,
        paging: true,
        pageLength: 10,
      });
    });
  }, []);

  function getToken() {
    // This function should return the user token dynamically
    return localStorage.getItem('token');
  }

  function Viewvillage(itemId) {
    window.location.href = '/all_village';
    localStorage.setItem('x', itemId);
  }

  return (
    <div className="content-page">
      <div className="content">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-3">All Villages</h4>
              <div className="table-responsive">
                <table id="village_table" className="table table-striped table-nowrap table-centered mb-0 text-center">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Village Name</th>
                      <th>Created By</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
