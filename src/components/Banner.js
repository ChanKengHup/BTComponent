import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='heroic__banner container px-lg-5 '>
          <div className="banner__content bg-light p-4 p-lg-5">
              <h1>A warm welcome!</h1>
              <p >Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
              <a href="#" className="btn btn-primary btn-lg">Call to action</a>
          </div>
      </div>
    )
  }
}
