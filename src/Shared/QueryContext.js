import React, { Component } from "react";

export const QueryContext = React.createContext();
export class QueryProvider extends Component {
  state = {
    query: "",
  };
  setQuery = (value) => {
    this.setState({
      query: value,
    });
  };
  render() {
    return (
      <QueryContext.Provider
        value={{ state: this.state, setQuery: this.setQuery }}
      >
        {this.props.children}
      </QueryContext.Provider>
    );
  }
}
