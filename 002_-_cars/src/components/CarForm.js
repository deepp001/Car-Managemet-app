import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">addCar</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">name</label>
            <input
              value={name}
              onChange={handleChange}
              className="input is-expanded"
            />
          </div>
          <div className="field">
            <label className="label">cost</label>
            <input
              value={cost || ""}
              onChange={handleCostChange}
              className="input is-expanded"
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
