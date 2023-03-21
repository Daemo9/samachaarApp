import React, { Component } from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultPops = {
    country: 'in',
    pageSize: 6,
    category: 'general',
  }

  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (word)=>{
    return word[0].toUpperCase() + word.substr(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title =`Samachaar - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async updateNews() {
    this.props.setProgress(10)
    const url =
      `https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&category=${this.props.category}&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&category=${this.props.category}&country=${this.props.country}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    this.updateNews();
  }

  // handlePreviousClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();

  //   let buttons = document.querySelectorAll('[aria-label^="Accept "]','[aria-label$="invitation"]')
  //   console.log("size of list : "+buttons);
  // }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    });
    const url =
      `https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&category=${this.props.category}&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults });
  };


  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          Samachaar App : Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {/* {this.state.loading && <Loader />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader />}
        >
          <div className="container">
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
                      publishedAt={elem.publishedAt}
                      author={elem.author}
                      source={elem.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
