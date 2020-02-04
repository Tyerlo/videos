import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "" };

  inputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    const { onFormSubmit } = this.props;
    const { searchTerm } = this.state;
    event.preventDefault();
    onFormSubmit(searchTerm);
  };
  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>VideoSearch</label>
            <input
              type="text"
              value={searchTerm}
              onChange={this.inputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
