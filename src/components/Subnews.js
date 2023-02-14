import React, { Component } from 'react'

export class Subnews extends Component {

  render() {
    let {title,description, imageurl, newsurl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src="{imageurl}" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/deatils" className="btn btn-sn btn-primary">read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Subnews
