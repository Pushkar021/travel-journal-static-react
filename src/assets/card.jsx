import React from "react";


export default function Card(props){
    return (
      <div className="main">
        <div className="main1">
          <img src={`../images/${props.img}`} />
        </div>
        <div className="width">
          <div>
            <div className="main2">
              <img src="../public/images/pointer.png" />
              <p className="country">{props.countryname}</p>
              <a href="https://www.google.com" target="_blank">
                View on Google maps
              </a>
            </div>
            <div>
              <p className="title">{props.location}</p>
              <p>{props.date}</p>
              <p>
               {props.about} </p>
            </div>
          </div>
        </div>
      </div>
    );
}