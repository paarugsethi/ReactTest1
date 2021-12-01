import { useState } from "react";
import Success from "./Success";

function CarCard({ data, id, handleOrderClick }) {
  const [carClicked, setCarClicked] = useState(false);
  const [text, setText] = useState({
    name: "",
    phone: ""
  });

  const handleFinalClick = () => {
    handleOrderClick(text);
    alert("Success!");
  };

  const handleBuyClick = () => {
    setCarClicked(true);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setText({
      ...text,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {data.map((car) => (
        <div>
          <img src={car.image} alt="Car Pic" />
          <h2>{car.name}</h2>
          <p>{car.type}</p>
          <p>{car.year}</p>
          <p>{car.price}</p>
          {carClicked ? (
            <div>
              <label>Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <label>Phone Number</label>
              <input
                onChange={handleChange}
                type="tel"
                name="phone"
                placeholder="Your Contact"
              />
              <button onClick={handleFinalClick}>Confirm Order</button>
            </div>
          ) : (
            <button onClick={handleBuyClick}>Buy Now</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default CarCard;
