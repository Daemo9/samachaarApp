import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, author, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgUrl?imgUrl:"https://images.unsplash.com/photo-1586339949216-35c2747cc36d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%' }}>
              {source}
            </span></h5>
            <p className="card-text"> {description}...</p>
            <p className="card-text"><small className="text-muted">By <b>{author ? author : 'unknown'}</b> on {new Date(publishedAt).toGMTString()}</small></p>
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
