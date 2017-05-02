import React from 'react';

class RandomPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomPage: 0
    };

    this.getRandomPage = this.getRandomPage.bind(this);
    this.setRandomPage = this.setRandomPage.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    const availPages = nextprops.availPages;
    if (availPages) {
      const randomPage = this.getRandomPage(availPages);
      this.setRandomPage({ randomPage });
    }
  }

  getRandomPage(availPages) {
    return availPages[Math.floor(Math.random()*availPages.length)];
  }

  setRandomPage(randomPage) {
    this.setState(randomPage);
  }

  render() {
    return (
      <div className="card">
        <h1>Suggested Page</h1>
        <h1 className="random-page">{ this.state.randomPage }</h1>
      </div>
    );
  }
}

export default RandomPage;
