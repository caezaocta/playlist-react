import './styles.css'

const SearchBar = ({ onChange, onSubmit }) => {
  return (

    <form className="mb-5 form-outline search-box" onSubmit={onSubmit}>
      <div className="form-outline">
        <div className="input-group mb-3">
          <label htmlFor="search-song form-label"></label>
          <input onChange={onChange} type="text" id="search-song" placeholder="Search your song here" className="form-control" />
          <button type={"submit"} className="btn btn-primary">
            Search
          </button>
        </div>

      </div>
    </form>
  );
}

export default SearchBar;