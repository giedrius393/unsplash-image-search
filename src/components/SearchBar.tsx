import { Paper, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';

interface SearchBarProps {
  onSearchSubmit: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.currentTarget.focus();
    e.currentTarget.blur();
    onSearchSubmit(searchInput);
  };

  return (
    <>
      <Paper
        elevation={3}
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          m: 2,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Images"
          value={searchInput}
          inputProps={{ 'aria-label': 'search images' }}
          onChange={(e) => setSearchInput(e.target.value)}
          onSubmit={onSubmit}
        />
        <IconButton
          sx={{ p: '10px' }}
          type="submit"
          aria-label="search"
          onClick={onSubmit}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
