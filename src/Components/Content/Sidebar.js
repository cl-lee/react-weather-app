export default function Sidebar() {
  function checkInput() {
    
  }
    
  return (
    <aside className="pb-3">
      <h2 id="form-heading" className="col-start-1 col-end-4 mt-1 h3 form-label">
        Search for a City:
      </h2>
      <form id="search-form" className="form">
        <div className="form-inline form-group">
          <div className="input-group">
            <input
              className="form-input weather-search col-12 m-2"
              type="text"
              id="search-input"
              placeholder="London"
              aria-labelledby="form-heading"
              aria-controls="today forecast"
            />
            <div className="input-group-append col-12 bg-primary m-2">
              <button
                type="submit"
                className="btn search-button"
                id="search-button"
                aria-label="submit search"
              >
                Search
              </button>
              <hr className="hr weather-hr" />
            </div>
          </div>
        </div>
      </form>
      <div className="list-group" id="history"></div>
    </aside>
  );
}