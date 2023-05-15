import React, { useEffect, useState } from "react";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

const All_block = () => {
  useEffect(() => {
    function getToken() {
      // This function should return the user token dynamically
      return localStorage.getItem('token');
    }

    const x = localStorage.getItem('x');
    console.log(x);

    $(document).ready(function () {
        const dyurl = 'your_dyurl_value'; // Define the dyurl variable with your desired value
        $('#village_table').DataTable({
          ajax: {
            url: dyurl + '/district/' + x + '/block/',
            type: 'GET',
            headers: { 'Authorization': `token ${getToken()}` },
            dataSrc: '',
          },
          columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'abbreviation' },
            { data: 'created_by.username' },
            {
              data: null,
              render: function (data, type, row) {
                return `<a href="#" onclick="Viewvillage('${row.id}','${row.name}');"><i class="fas fa-eye"></i></a>`;
              },
            },
          ],
          searching: true,
          ordering: true,
          paging: true,
          pageLength: 10,
        });
      });
  }, []);

  function Viewvillage(itemId) {
    window.location.href = '/all_Village';
    localStorage.setItem('x', itemId);
  }

  return (
    // <div className="content-page">
      <div className="content">
      <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-3">All Blocks</h4>
              <div className="table-responsive">
                <table id="village_table" className="table text-center table-striped table-nowrap table-centered mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Block Name</th>
                      <th>Abbreviation</th>
                      <th>Created By</th>
                      <th>View villages</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default All_block;
