import SearchBar from '../components/SearchBar';

function Header(): JSX.Element {
  const onSearchSubmit = (searchInput: string) => {
    console.log(searchInput);
  };

  return (
    <>
      <SearchBar onSearchSubmit={onSearchSubmit}/>
    </>
  );
}

export default Header;
