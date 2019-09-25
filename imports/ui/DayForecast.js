import React, { Component } from 'react';
import './styles.css';

export default class DayForecast extends Component {
 
  imageSelector=(imagen)=>{
    console.log(imagen);
    if(imagen === "Mostly sunny"){
      console.log("hola");
      return (<img height="80" width="80"  key="Sunny" src="https://bloximages.newyork1.vip.townnews.com/mdjonline.com/content/tncms/assets/v3/editorial/5/0d/50d87010-ca5d-5563-955b-6947936c071d/5c72bfbbc1635.image.jpg"></img>);
      
    }
    else if(imagen === "Rain"){
      return (<img height="80" width="80" src="http://www.newdesignfile.com/postpic/2014/11/rain-cloud-weather-icon_287503.png"></img>);
    }
    else {
      return (<img height="80" width="80"src="https://cdn2.iconfinder.com/data/icons/weather-forecast-filled-outline/512/WEATHER_-_Lineal_color_Artboard-9-512.png"></img>);
    }
  }
 
  render() {
    return (
      <div className="col-sm">
        <p>{this.props.report.dayName}</p>
        <p>{this.props.report.minTemp}</p>
        <p>{this.props.report.maxTemp}</p>
        {this.imageSelector(this.props.report.status)}
      </div>
    );
  }
}