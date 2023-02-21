import React, { Component } from "react";
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
      "https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&country=us";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }
  handlePreviousClick = async ()=>{
    let url =
      `https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&country=us&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page - 1
    })
    console.log("Previos clicked");
  }
  handleNextClick = async ()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){

    
    let url =
      `https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&country=us&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    console.log("Next clicked");
    this.setState({
      page: this.state.page + 1
    })
  }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Samachaar App : Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((elem) => {
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
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
