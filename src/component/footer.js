import React from "react";

function Footer() {
    return (
      <>
        {/* <!-- Footer Start --> */}
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div>
                  <h3>Logo</h3>
                  <p class="mb-30 footer-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    soluta facilis eos quia optio iusto odit atque eum tempore,
                    quisquam officiis vero veniam hic,
                  </p>
                </div>
              </div>
              <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
                <div class="">
                  <h4>Quick Link</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="text-decoration-none">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none">
                        Service
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6">
                <div>
                  <h4>Service</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="text-decoration-none">
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none">
                        Branding
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none">
                        Graphics Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6">
                <div>
                  <h4>Newsletter</h4>
                  <div>
                    <label for="Newsletter" class="form-label">
                      Subscribe To Our Newsletter
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      Placeholder="Enter Your Email"
                    />
                    <button class="btn btn-danger mt-3">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="copyright">
                <p>
                  Developed and maintained by{" "}
                  <a href="#" target="_blank">
                    company
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- end Footer --> */}
      </>
    );
  }

  export default Footer;