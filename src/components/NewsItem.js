import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, author, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... <span className="position-absolute top-0 translate-middle badge badge-pill badge-info" 
            style={{color:'black'}}>{source}</span></h5>            
            <p className="card-text"> {description}...</p>
          <p className="card-text"><small className="text-muted">By <b>{author?author:'unknown'}</b> on {new Date(publishedAt).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
