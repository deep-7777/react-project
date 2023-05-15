import React from 'react';
// import DataTable from 'react-data-table-component'




function Program() {
  return (

    <div className="mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title">Program Data Table</h4>
              <p className="sub-header">
                DataTables has most features enabled by default, so all you need to do
                to use it with your own tables is to call the construction function:
                <code>$().DataTable();</code>.
              </p>
              <div
                id="basic-datatable_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="basic-datatable_length">
                      <label>
                        Show{" "}
                        <select
                          name="basic-datatable_length"
                          aria-controls="basic-datatable"
                          className="form-select form-select-sm"
                        >
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>{" "}
                        entries
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="basic-datatable_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                          aria-controls="basic-datatable"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      id="basic-datatable"
                      className="table dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                      role="grid"
                      aria-describedby="basic-datatable_info"
                      style={{ width: 1507 }}
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting sorting_asc"
                            tabIndex={0}
                            aria-controls="basic-datatable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "251.4px" }}
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                          >
                            Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="basic-datatable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "376.4px" }}
                            aria-label="Position: activate to sort column ascending">
                            Position
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="basic-datatable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "188.4px" }}
                            aria-label="Office: activate to sort column ascending"
                          >
                            Office
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="basic-datatable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "99.4px" }}
                            aria-label="Age: activate to sort column ascending"
                          >
                            Age
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="basic-datatable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "177.4px" }}
                            aria-label="Start date: activate to sort column ascending"
                          >
                            Start date
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="basic-datatable"
                            rowSpan={1}
                            colSpan={1}
                            style={{ width: "152.4px" }}
                            aria-label="Salary: activate to sort column ascending"
                          >
                            Salary
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td className="dtr-control sorting_1" tabIndex={0}>
                            Airi Satou
                          </td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>33</td>
                          <td>2008/11/28</td>
                          <td>$162,700</td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_1 dtr-control">Angelica Ramos</td>
                          <td>Chief Executive Officer (CEO)</td>
                          <td>London</td>
                          <td>47</td>
                          <td>2009/10/09</td>
                          <td>$1,200,000</td>
                        </tr>
                        <tr className="odd">
                          <td className="dtr-control sorting_1" tabIndex={0}>
                            Ashton Cox
                          </td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td>$86,000</td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_1 dtr-control">Bradley Greer</td>
                          <td>Software Engineer</td>
                          <td>London</td>
                          <td>41</td>
                          <td>2012/10/13</td>
                          <td>$132,000</td>
                        </tr>
                        <tr className="odd">
                          <td className="sorting_1 dtr-control">Brenden Wagner</td>
                          <td>Software Engineer</td>
                          <td>San Francisco</td>
                          <td>28</td>
                          <td>2011/06/07</td>
                          <td>$206,850</td>
                        </tr>
                        <tr className="even">
                          <td className="dtr-control sorting_1" tabIndex={0}>
                            Brielle Williamson
                          </td>
                          <td>Integration Specialist</td>
                          <td>New York</td>
                          <td>61</td>
                          <td>2012/12/02</td>
                          <td>$372,000</td>
                        </tr>
                        <tr className="odd">
                          <td className="sorting_1 dtr-control">Bruno Nash</td>
                          <td>Software Engineer</td>
                          <td>London</td>
                          <td>38</td>
                          <td>2011/05/03</td>
                          <td>$163,500</td>
                        </tr>
                        <tr className="even">
                          <td className="sorting_1 dtr-control">Caesar Vance</td>
                          <td>Pre-Sales Support</td>
                          <td>New York</td>
                          <td>21</td>
                          <td>2011/12/12</td>
                          <td>$106,450</td>
                        </tr>
                        <tr className="odd">
                          <td className="sorting_1 dtr-control">Cara Stevens</td>
                          <td>Sales Assistant</td>
                          <td>New York</td>
                          <td>46</td>
                          <td>2011/12/06</td>
                          <td>$145,600</td>
                        </tr>
                        <tr className="even">
                          <td className="dtr-control sorting_1" tabIndex={0}>
                            Cedric Kelly
                          </td>
                          <td>Senior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                          <td>2012/03/29</td>
                          <td>$433,060</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div
                      className="dataTables_info"
                      id="basic-datatable_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 57 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="basic-datatable_paginate"
                    >
                      <ul className="pagination pagination-rounded">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="basic-datatable_previous"
                        >
                          <a
                            href="#"
                            aria-controls="basic-datatable"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            <i className="mdi mdi-chevron-left" />
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="basic-datatable"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="basic-datatable"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="basic-datatable"
                            data-dt-idx={3}
                            tabIndex={0}
                            className="page-link"
                          >
                            3
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="basic-datatable"
                            data-dt-idx={4}
                            tabIndex={0}
                            className="page-link"
                          >
                            4
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="basic-datatable"
                            data-dt-idx={5}
                            tabIndex={0}
                            className="page-link"
                          >
                            5
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="basic-datatable"
                            data-dt-idx={6}
                            tabIndex={0}
                            className="page-link"
                          >
                            6
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="basic-datatable_next"
                        >
                          <a
                            href="#"
                            aria-controls="basic-datatable"
                            data-dt-idx={7}
                            tabIndex={0}
                            className="page-link"
                          >
                            <i className="mdi mdi-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  )
}

export default Program;