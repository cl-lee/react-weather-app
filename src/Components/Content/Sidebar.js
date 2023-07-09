export default function Sidebar() {
  return (
    <aside className="col-lg-3 pb-3">
      <h2 id="form-heading" className="mt-1 h3 form-label">
        Search for a City:
      </h2>
      <form id="search-form" class="form">
        <div class="form-inline form-group">
          <div class="input-group">
            <input
              class="form-input weather-search col-12 m-2"
              type="text"
              id="search-input"
              placeholder="London"
              aria-labelledby="form-heading"
              aria-controls="today forecast"
            />
            <div class="input-group-append col-12 bg-primary m-2">
              <button
                type="submit"
                class="btn search-button"
                id="search-button"
                aria-label="submit search"
              >
                Search
              </button>
              <hr class="hr weather-hr" />
            </div>
          </div>
        </div>
      </form>
      <div class="list-group" id="history"></div>
    </aside>
  );
}