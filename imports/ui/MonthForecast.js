import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { Forecast } from '../api/forecast.js';
import WeekForecast from "./WeekForecast.js";
 
class MonthForecast extends Component {

  renderMonths() {
    return this.props.forecast.map((d) => (
      <WeekForecast key={d._id} report={d} />
    ));
  }

  render() {
    return (
      <div>
        <div className="row text-center bg-success">
          <div className="col-sm">
            Componente Mensual       
          </div>
        </div>
        <div className="row">
          <WeekForecast numero="Semana 1"></WeekForecast>
          <WeekForecast numero="Semana 2"></WeekForecast>
          <WeekForecast numero="Semana 3"></WeekForecast>
          <WeekForecast numero="Semana 4"></WeekForecast>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    forecast: Forecast.find({}).fetch(),
  };
})(MonthForecast);