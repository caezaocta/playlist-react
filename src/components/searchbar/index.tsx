import { Button, TextField } from "@mui/material";
import "./styles.css";

interface SearchBarProps {
  handleSearchSong(e: React.FormEvent<HTMLFormElement>): void;
  handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

function SearchBar({ handleSearchChange, handleSearchSong }: SearchBarProps) {
  return (
    <form className="mb-5 form-outline search-box" onSubmit={handleSearchSong}>
      <div className="form-outline">
        <div className="input-group mb-3">
          <label htmlFor="search-song form-label"></label>

          <TextField
            onChange={handleSearchChange}
            type="text"
            variant="standard"
            id="search-song"
            placeholder="Search your song
          here"
          ></TextField>
          <Button type="submit" className="btn btn-primary">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
