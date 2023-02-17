import React, { Component } from 'react';
import Subnews from './Subnews';

export class NewsSec extends Component {
  constructor()
  {
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=c5ddccd7e12e45a6bcae2b4617dc6570&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlenext= async () =>{

    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c5ddccd7e12e45a6bcae2b4617dc6570&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
  
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })

    }
  }
  handleprev= async ()=>{

    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c5ddccd7e12e45a6bcae2b4617dc6570&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }

  render() {
    return (
      <div className="container my-3">
        <h2>this is the news section</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4"key={element.url} >
                      <Subnews title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
                    </div>
          })
          }
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handlenext}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default NewsSec