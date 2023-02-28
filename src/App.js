import React, { Component } from "react";
import Header from "./components/Header";
import Field from "./components/Field";
class App extends Component {
  constructor() {
    super();
    this.state = {
      id: -1,
    };

    this.clickCard = this.clickCard.bind(this);
  };

  clickCard(click_id) {
    this.setState({ id: click_id });
  }

  render() {
    return (
      <div>
        <Header id={this.state.id} />
        <Field clickCard={this.clickCard} />
      </div>
    );
  }
}

export default App;
