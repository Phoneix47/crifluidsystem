import React from 'react';
import img3 from '../img/3.png';
import './lowerHalf.css';

const Lowerhalf = () => {
  const divider = () => {
    return <div style={{ color: ' red', display: 'inline' }}>|</div>;
  };
  return (
    <div>
      <p style={{ fontSize: '2vh' }}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
        RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION
        UNITS OF POWER FOR THE NATION.
      </p>
      <img className="img3" src={img3} />
      <p style={{ fontSize: '2vh' }}>
        Vales - Pumps -Pipes - Iot Drives & Controllers - Wires &
        Cables - Solar Systems - Motors
      </p>
      <hr className="line" />
      <p style={{ textAlign: 'center', fontSize: '2vh' }}>
        C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p style={{ fontSize: '2vh' }}>
        CHEMICALS & PROCESS {divider()} POWER {divider()} WATER &
        WASTE WATER{divider()}OILS & GAS {divider()}PHARMA{divider()}
        SUGARS&DISTILLERIES{divider()}PAPER&PULP{divider()}
        MARINE&DEFENCE {divider()} METAL & MINING {divider()} FOOD &
        BEVERAGE {divider()}
        PETROCHEMICAL & REFINERIES {divider()} SOLAR {divider()}
        BUILDING{divider()}HVAC{divider()}FIRE FIGHTING{divider()}
        AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
};

export default Lowerhalf;
