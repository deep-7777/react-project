import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

const DistrictTable = () => {
    const tableRef = useRef(null);
  
    useEffect(() => {
      const token = getToken();
      const x = localStorage.getItem('x');
  
      $(document).ready(() => {
        $(tableRef.current).DataTable({
          ajax: {
            dyurl : 'https://state/${x}/district/',
            type: 'GET',
            headers: { 'Authorization': `token ${token}` },
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
                  <a href="#" onClick={() => ViewBlock(row.id, row.name)}>
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
  
    function getToken() {
      return localStorage.getItem('token');
    }
  
    function ViewBlock(itemId, itemName) {
      window.location.href = '/all_Block';
      localStorage.setItem('x', itemId);
    }
  
    return (
      <div className="content-page">
        <div className="content">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-3">All Districts</h4>
                <div className="table-responsive">
                  <table
                    ref={tableRef}
                    className="table table-striped table-nowrap table-centered mb-0 text-center"
                    id="village_table"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>District Name</th>
                        <th>Abbreviation</th>
                        <th>Created By</th>
                        <th>View Blocks</th>
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
  
  export default DistrictTable;
  