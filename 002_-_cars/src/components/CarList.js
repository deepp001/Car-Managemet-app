import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slices/carSlice";

function CarList() {
  const dispatch = useDispatch();
  const { cars, names } = useSelector(({ form, cars: { car, searchTerm } }) => {
    const filteredCar = car.filter((x) =>
      x.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCar,
      name: form.name,
    };
  });
  const handleClick = (id) => {
    dispatch(removeCar(id));
  };
  const bold = names && cars.name.toLowerCase().includes(names.toLowerCase());

  return (
    <div className="car-list">
      {cars.map((x, index) => {
        return (
          <div className={`panel ${bold && "bold"}`} key={index}>
            <p>
              {x.name}-${x.cost}
            </p>
            <button
              onClick={() => handleClick(x.id)}
              className="button is-danger"
            >
              Delete
            </button>
          </div>
        );
      })}
      <hr />
    </div>
  );
}

export default CarList;
