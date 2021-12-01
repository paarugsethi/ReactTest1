import axios from "axios";
import CarCard from "./CarCard";
import React, { useEffect, useState } from "react";

const getCars = () => {
  const config = {
    url: "http://localhost:3000/cars/",
    method: "get"
  };
  return axios(config);
};

const postOrders = (name, phone) => {
  const payload = {
    name,
    phone
  };
  const config = {
    url: "http://localhost:3000/orders/",
    method: "post",
    data: payload
  };
  return axios(config);
};

function CarsHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    handleGetCars();
  }, []);

  const handleGetCars = () => {
    return getCars()
      .then((res) => {
        setCars(res.data);
        // console.log(cars);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("Oops! There has been an error.");
        console.log(err);
      });
  };

  const handleOrderClick = async (details) => {
    try {
      setIsLoading(true);
      await postOrders(details);
      // await handleGetCars();
      setIsLoading(false);
    } catch (err) {
      alert("There has been an error!");
    }
  };

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h1>Buy your Dream Car</h1>

          <div>
            <CarCard handleOrderClick={handleOrderClick} data={cars} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CarsHome;
