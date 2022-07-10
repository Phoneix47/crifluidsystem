import React from 'react';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import './upperHalf.css';
const Upperhalf = () => {
  return (
    <div className="upperHalf">
      <img className="img1" src={img1} />

      <div>
        <p style={{ fontWeight: 'bold' }}>
          C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
          for the 4th time.
        </p>
        <ul>
          <li>
            C.R.I's energy efficent products are well recognized by
            various Goverment Institutions, as trustworthy products
            for various projects across the globe to save energy.
          </li>
          <li>
            C.R.I is the highest contributor in the country for the
            projects of EESL (Energy Efficent Services Limited) to
            replace the old inefficent pumps with 5 Star rated energy
            effcient smart pumps with IoT enabled control panel.
          </li>
        </ul>
        <img className="img2" src={img2} />
        <p>
          Goverment of India has awarded the{' '}
          <p style={{ fontWeight: 'bold', display: 'inline' }}>
            "National Energy Consevation Award 2018"
          </p>
          .Mr.G.Selvaraj, Joint Managing Director of C.R.I. Group
          recived the award from Smt. Sumitra Mahajan, Speaker of Lok
          Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default Upperhalf;
