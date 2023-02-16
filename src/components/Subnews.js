import React, { Component } from 'react'

export class Subnews extends Component {

  render() {
    let {title,description, imageurl,newsurl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageurl?"https://live-production.wcms.abc-cdn.net.au/f6c03ba6b2400be5f026b06355410bd0?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=521&width=862&height=485": imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} className="btn btn-sn btn-primary">read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Subnews
