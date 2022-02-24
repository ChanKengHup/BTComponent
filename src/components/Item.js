import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='heroic__item pt-4'>
          <div className="container px-lg-5">
              <div className="row">
                <div className="col-lg-6 col-xxl-4">
                    <div className="heroic__card bg-light pt-0 p-lg-5 p-4 mt-5">
                        <div className="heroic__icon">
                        <i className="bi bi-collection"></i>
                        </div>
                        <h2 className='fs-4'>Fresh new layout</h2>
                        <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    </div>
                </div>


                <div className="col-lg-6 col-xxl-4">
                    <div className="heroic__card bg-light pt-0 p-lg-5 p-4 mt-5">
                        <div className="heroic__icon">
                        <i className="bi bi-cloud-download"></i>
                        </div>
                        <h2 className='fs-4'>Free to download</h2>
                        <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                </div>

                <div className="col-lg-6 col-xxl-4">
                    <div className="heroic__card bg-light pt-0 p-lg-5 p-4 mt-5">
                        <div className="heroic__icon">
                        <i className="bi bi-card-heading"></i>
                        </div>
                        <h2 className='fs-4'>Jumbotron hero header</h2>
                        <p>The heroic part of this template is the jumbotron hero header!</p>
                    </div>
                </div>

                <div className="col-lg-6 col-xxl-4">
                    <div className="heroic__card bg-light pt-0 p-lg-5 p-4 mt-5">
                        <div className="heroic__icon">
                        <i className="bi bi-bootstrap"></i>
                        </div>
                        <h2 className='fs-4'>Feature boxes</h2>
                        <p>We've created some custom feature boxes using Bootstrap icons!</p>
                    </div>
                </div>

                <div className="col-lg-6 col-xxl-4">
                    <div className="heroic__card bg-light pt-0 p-lg-5 p-4 mt-5">
                        <div className="heroic__icon">
                        <i className="bi bi-code"></i>
                        </div>
                        <h2 className='fs-4'>Simple clean code</h2>
                        <p>We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>
                </div>

                <div className="col-lg-6 col-xxl-4">
                    <div className="heroic__card bg-light pt-0 p-lg-5 p-4 mt-5">
                        <div className="heroic__icon">
                        <i className="bi bi-patch-check"></i>
                        </div>
                        <h2 className='fs-4'>A name you trust</h2>
                        <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                    </div>
                </div>
              </div>

              
          </div>

      </div>
    )
  }
}
