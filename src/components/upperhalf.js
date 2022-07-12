import React from 'react';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import './upperHalf.css';

const Upperhalf = () => {
  return (
    <div className="upperHalf">
      <img className="img1" src={img1} />

      <div style={{ marginLeft: '50px', textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', fontSize: '2vh' }}>
          C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
          for the 4th time.
        </p>
        <ul>
          <li style={{ fontSize: '2vh' }}>
            C.R.I's energy efficent products are well recognized by
            various Goverment Institutions, as trustworthy products
            for various projects across the globe to save energy.
          </li>
          <li style={{ fontSize: '2vh' }}>
            C.R.I is the highest contributor in the country for the
            projects of EESL (Energy Efficent Services Limited) to
            replace the old inefficent pumps with 5 Star rated energy
            effcient smart pumps with IoT enabled control panel.
          </li>
        </ul>
        <img className="img2" src={img2} />
        <p style={{ fontSize: '2vh' }}>
          Goverment of India has awarded the{' '}
          <p
            style={{
              fontWeight: 'bold',
              display: 'inline',
              fontSize: '2vh',
            }}
          >
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
