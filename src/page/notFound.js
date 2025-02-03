import React from 'react';

const NotFound = () => {
  return (
    <div>
      <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex align-items-center">
              <div class="input-group w-75 mx-auto d-flex">
                <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
          <h1 class="display-2 text-white mb-4">404 Error</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/">Pages</a></li>
              <li class="breadcrumb-item text-white" aria-current="page">404 Error</li>
            </ol>
          </nav>
        </div>
      </div>


      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.3s">
        <div class="container text-center py-5">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 class="display-1">404</h1>
              <h1 class="mb-4">Page Not Found</h1>
              <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
              <a class="btn btn-primary rounded-pill py-3 px-5" href="/">Go Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
