import React from 'react';
import '../components/footer.css';

import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <div className="container">
      <div>
        <CallIcon className="callIcon" />

        <a href="tel:18002001234">18002001234</a>
      </div>
      <div>
        <FacebookIcon className="fbIcon" />
        <a href="https://www.facebook.com/cripumps">
          {' '}
          www.facebook.com/cripumps
        </a>
      </div>

      <div>
        <LanguageIcon className="webIcon" />
        <a href="https://www.crigroups.com">
          {' '}
          www.facebook.com/cripumps
        </a>
      </div>
    </div>
  );
};

export default Footer;
