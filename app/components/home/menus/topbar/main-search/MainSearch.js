
const MainSearch = () => {
    return (
        <form className="search-bar">
        <label className="search-bar-toggle" htmlFor="searchMain">
          <i className="ri-search-line"></i>
        </label>
        <input id="searchMain" type="search" placeholder="¿Qué quieres buscar?" />
        <button type="submit">
          <i className="ri-search-line"></i><span>Buscar</span>
        </button>
      </form>
      );
}
 
export default MainSearch;