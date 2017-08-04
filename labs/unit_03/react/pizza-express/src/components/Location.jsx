import React, { Component } from 'react';
import locationData from '../locationData.js';


class Location extends Component {
  render(){
    return (
      <div>
        {specs.map((spec, i) => {
            return <Location key={i} name={spec.name} address={spec.address} phone={spec.phone} />
        })}
      </div>
    );
  }
}



export default Location;