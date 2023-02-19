import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "'Stokes' entertainers are just getting started'",
      "description": "England have made winning a habit after setting out to entertain and there is still room to improve, says chief cricket writer Stephan Shemilt.",
      "url": "http://www.bbc.co.uk/sport/cricket/646942775",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/102DB/production/_128676266_gettyimages-1467480342.jpg",
      "publishedAt": "2023-02-19T12:07:28.445626Z",
      "content": "For a team that don't focus on winning, England have done a good job of turning victory into a habit.\r\nWhen they were desperate for a win, they couldn't beg, borrow or steal one. Now they place less … [+5896 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "'Stokes' entertainers are just getting started'",
      "description": "England have made winning a habit after setting out to entertain and there is still room to improve, says chief cricket writer Stephan Shemilt.",
      "url": "http://www.bbc.co.uk/sport/cricket/64694277",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/102DB/production/_128676266_gettyimages-1467480342.jpg",
      "publishedAt": "2023-02-19T12:07:28.445626Z",
      "content": "For a team that don't focus on winning, England have done a good job of turning victory into a habit.\r\nWhen they were desperate for a win, they couldn't beg, borrow or steal one. Now they place less … [+5896 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ];
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?apiKey=2f2e058ecaa64fdd81c83247ff369134&country=us";
    let data =await fetch(url);
    let parsedData = await data.json()

    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Samachaar App : Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((elem)=>{
          return  <div className="col-md-4" key={elem.url}>
          <NewsItem title={elem.title?elem.title.slice(0,45):""} description={elem.description?elem.description.slice(0,88):""} imgUrl={elem.urlToImage} newsUrl={elem.url}/>
        </div>
        })}
         
        </div>
      </div>
    );
  }
}

export default News;
