import React from 'react';

import FooterCardList from './FooterCardList';

const content = {
  title: 'Information',
  items: [
    { link: '#', name: 'Testimonials' },
    { link: '#', name: 'My Account' },
    { link: '#', name: 'Payments & Returns' },
    { link: '#', name: 'View Catalogues Online' },
  ],
};

const FooterLeftMid = () => {
  return <FooterCardList items={content.items} title={content.title} />;
};

export default FooterLeftMid;
