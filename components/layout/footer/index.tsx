import React from 'react';

import FooterLeft from './FooterLeft';
import FooterLeftMid from './FooterLeftMid';
import FooterRight from './FooterRight';
import FooterRightMid from './FooterRightMid';

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="mx-4 py-4 md:py-6 lg:py-8 md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-7 lg:gap-3">
        <FooterLeft />
        <FooterLeftMid />
        <FooterRightMid />
        <FooterRight />
      </div>
    </div>
  );
};

export default Footer;
