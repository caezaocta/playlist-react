import './styles.css'
import { Button, TextField } from "@mui/material"

const SearchBar = ({ onChange, onSubmit }) => {
  return (

    <form className="mb-5 form-outline search-box" onSubmit={onSubmit}>
      <div className="form-outline">
        <div className="input-group mb-3">
          <label htmlFor="search-song form-label"></label>
          <TextField onChange={onChange} type="text" variant="standard" id="search-song" placeholder="Search your song here" className="form-control" />
          <Button type={"submit"} className="btn btn-primary">
            Search
          </Button>
        </div>

      </div>
    </form>
  );
}

export default SearchBar;