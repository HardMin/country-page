import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./card.css";
import axios from "axios";

const Card = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(countries);

  return (
    <section className="card-list">
      {countries.map((country, i) => (
        <CardItem key={i} country={country} />
      ))}
    </section>
  );
};

export default Card;
