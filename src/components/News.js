import React, { Component } from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&country=us&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading: false });
  }
  handlePreviousClick = async ()=>{
    let url =
      `https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&country=us&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page - 1,
      loading: false
    })
    console.log("Previos clicked");
  }
  handleNextClick = async ()=>{    
    let url =
      `https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&country=us&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false
    })
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Samachaar App : Top Headlines</h1>
        {this.state.loading && <Loader/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((elem) => {
            return (
              <div className="col-md-4" key={elem.url}>
                <NewsItem
                  title={elem.title ? elem.title.slice(0, 45) : ""}
                  description={
                    elem.description ? elem.description.slice(0, 88) : ""
                  }
                  imgUrl={elem.urlToImage}
                  newsUrl={elem.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
