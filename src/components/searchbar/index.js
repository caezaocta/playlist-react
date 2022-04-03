const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <>
      <form className="mb-5" onSubmit={onSubmit}>
        <label htmlFor="search-song"></label>
        <input onChange={onChange} type="text" id="search-song" placeholder="Search your song here" />
        <button type={"submit"}>Search</button>
      </form>
    </>
  );
}

export default SearchBar;