import React from "react"
import { BtnLabel, SearchForm, SearchFormBtn, SearchInput, StyledSearchBar } from "./Searchbar.styled"

export const Searchbar = ({onSubmit}) => {

  const [query, setQuery] = React.useState('');
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search query');
      return;
    }
    onSubmit(query);
  };

  return (
  <StyledSearchBar>
   <SearchForm onSubmit={handleSubmit}>
    <SearchFormBtn type="submit" name="query">
      <BtnLabel>Search</BtnLabel>
    </SearchFormBtn>

    <SearchInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
    />
  </SearchForm>
</StyledSearchBar>
  );

};