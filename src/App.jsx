import React from "react";
import Header from "./assets/Header";
import Card from "./assets/card";
import data from "./data";

export default function App() {
  const a = data.map((x)=>{
    return(
      <Card img={x.img} countryname={x.countryname} location={x.location} date={x.date} about={x.about} />
    )
  })
  return (
    <div>
      <Header />
     {a}
    </div>
  );
}
