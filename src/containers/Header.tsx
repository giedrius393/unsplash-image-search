import SearchBar from '../components/SearchBar';

function Header(): JSX.Element {
  const searchOptions: string[] = [];
  const onSearchSubmit = (searchInput: string) => {
    searchOptions.unshift(searchInput);
    console.log(searchInput);
  };


  return (
    <>
      <SearchBar
        onSearchSubmit={onSearchSubmit}
        searchOptions={searchOptions}
      />
    </>
  );
}

export default Header;
