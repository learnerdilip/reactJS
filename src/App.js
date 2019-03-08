import React from "react";
import NewsItem from "./NewsItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newsList: []
    };
    this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e85e242bc6874dcb95cf8bbcddd68f27"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          newsList: data.articles
        });
      });
  }

  render() {
    const newsitems = this.state.newsList.map(item => {
      return <NewsItem a={item} />;
      //<NewsItem key={item.createdAt} item={item} />;
    });
    return (
      <div>
        <h1>The Headlines:</h1>
        <button onClick={this.clickHandle}> Get Data </button>
        {newsitems}
      </div>
    );
  }
}

export default App;
