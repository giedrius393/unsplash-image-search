import { Paper, InputBase, IconButton, Autocomplete } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';

const SUBMIT_REASONS = ['createOption', 'selectOption'];

interface SearchBarProps {
  onSearchSubmit: (searchText: string) => void;
  searchOptions: string[];
}

function SearchBar(props: SearchBarProps): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>('');

  const { onSearchSubmit, searchOptions } = props;

  const onSubmit = (event: any) => {
    event.preventDefault();
    event.currentTarget.focus();
    event.currentTarget.blur();
    if (searchInput.length) {
      onSearchSubmit(searchInput);
    }
  };

  const onChange = (_e: any, value: string | null, reason: string) => {
    if (SUBMIT_REASONS.includes(reason) && value?.length) {
      onSearchSubmit(value);
    }
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
          flexGrow: 1,
          maxWidth: 800,
          m: 2,
          ml: 0,
        }}
      >
        <Autocomplete
          inputValue={searchInput}
          id='search-input-autocomplete'
          sx={{ ml: 1, flex: 1 }}
          freeSolo
          options={searchOptions}
          onChange={onChange}
          onInputChange={(_e, newValue) => setSearchInput(newValue)}
          blurOnSelect
          renderInput={(params) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { InputLabelProps, InputProps, ...rest } = params;
            return (
              <InputBase
                {...InputProps}
                {...rest}
                placeholder="Search Images"
              />
            );
          }}
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
}

export default SearchBar;
