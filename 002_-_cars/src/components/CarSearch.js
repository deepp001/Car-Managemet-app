import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices/carSlice";

function CarSearch() {
  const searchTerm = useSelector((state) => {
    console.log(state);
    return state.form.searchTerm;
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeSearchTerm(value));
  };
  return (
    <div>
      <form>
        <label>Search here:</label>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  );
}

export default CarSearch;
