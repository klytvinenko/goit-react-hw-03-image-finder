import React, { Component } from "react"
import { BtnLabel, SearchForm, SearchFormBtn, SearchInput, StyledSearchBar } from "./Searchbar.styled"

export class Searchbar extends Component {

  state = {
    query: ''
  }
  handleInputChange = event => {
    this.setState({query:event.target.value})
  }

  // const [query, setQuery] = React.useState('');
  // const handleInputChange = event => {
  //   setQuery(event.target.value);
  // };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Please enter a search query');
      return;
    }
    this.props.onSubmit(this.state.query);
  };

  render () {

    return (
      <StyledSearchBar>
       <SearchForm onSubmit={this.handleSubmit}>
        <SearchFormBtn type="submit" name="query">
          <BtnLabel>Search</BtnLabel>
        </SearchFormBtn>
    
        <SearchInput
              type="text" 
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handleInputChange}
        />
      </SearchForm>
    </StyledSearchBar>
      );
    
  }

};