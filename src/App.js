import React from "react";
import "./styles.css";
import NewsItem from "./NewsItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newsHead: [],
      isLoading: true
    };
    this.clickHandle = this.clickHandle.bind(this);
    // this.clickB = this.clickB.bind(this);
  }

  clickHandle(event) {
    let search = document.getElementById("itemsearch").value;
    let urlBase = "https://newsapi.org/v2/";
    let newsType = "everything?q=" + search;
    let apiKey = "&apiKey=e85e242bc6874dcb95cf8bbcddd68f27";
    fetch(urlBase + newsType + apiKey)
      .then(response => response.json())
      .then(data => {
        this.setState({
          newsHead: data.articles
        });
      });
  }

  enterPress(event) {
    if (event.charCode === 13) {
      document.getElementById("x").click();
    }
  }

  render() {
    let newsList = this.state.newsHead.map(item => {
      return <NewsItem details={item} />;
    });
    return (
      <div className="Application">
        <h1>Hello Visitor</h1>
        <input
          type="text"
          onKeyPress={this.enterPress}
          id="itemsearch"
          placeholder="Enter search term"
        />
        <h2>We provide top news on anything!!</h2>
        <button id="x" onClick={this.clickHandle}>
          click for latest News
        </button>
        {newsList}
      </div>
    );
  }
}

export default App;
