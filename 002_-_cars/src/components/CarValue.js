import { useSelector } from "react-redux";

function CarValue() {
  const value = useSelector(({ cars: { car, searchTerm } }) => {
    return car
      .filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, x) => acc + x.cost, 0);
  });
  return <div>total value:{value}</div>;
}

export default CarValue;
